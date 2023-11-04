import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { getIssueSheet } from "./GoogleSheets";
import { Issue, SubIssue } from '@/interfaces/IssueInterface';

const cols: string[] = [
    'C', 'D', 'E', 'F', 'G', 'H'
]

export async function getListedIssues(): Promise<Issue[]> {
    const sheet: GoogleSpreadsheetWorksheet = await getIssueSheet();
    let issues: Issue[] = [];

    for (let col of cols) {
        sheet.resetLocalCache(true);
        await sheet.loadCells(`${col}:${col}`);
        
        let subissues: SubIssue[] = []
        const numbers = Array.from({ length: sheet.cellStats.nonEmpty + 1 }, (_, i) => sheet.cellStats.nonEmpty - i);

        for await (let i of numbers) {
            if (i == 0) {
                // Header row
                let topic: string | undefined = sheet.getCellByA1(`${col}${i + 1}`).value?.toString();
                if (topic === undefined) break; // No topic
                topic = topic.trim().replace("(", " ").split(" ")[0];
                issues.push(
                    { name: topic, subissues: subissues }
                );
            } else {
                // Subissue row
                let notes: string | undefined = sheet.getCellByA1(`${col}${i + 1}`).value?.toString();
                if (notes === undefined) continue;
                for (let note of notes.split(",")) {
                    note = note.trim();
                    const idx = subissues.findIndex((e) => e.name == note);
                    if (idx > -1) {
                        const old = subissues[idx];
                        subissues[idx] = {
                            name: note,
                            count: old.count + 1
                        };
                    } else {
                        subissues.push({
                            name: note,
                            count: 1
                        });
                    }
                }
            }
        }
    }

    return issues;
}