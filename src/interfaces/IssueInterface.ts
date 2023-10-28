interface Issue {
    name: string;
    subissues: SubIssue[];
}

interface SubIssue {
    name: string;
    count: number;
}

export type { Issue, SubIssue };