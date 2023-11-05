import { getRegistrantSheets } from "./GoogleSheets";

export interface RegistrantCount {
    designers: Number;
    developers: Number;
}

export async function getRegistrants(): Promise<RegistrantCount> {
    const { designers, developers } = await getRegistrantSheets();

    designers.resetLocalCache(true);
    developers.resetLocalCache(true);

    await designers.loadCells("A:A");
    await developers.loadCells("A:A");

    return {
        designers: designers.cellStats.nonEmpty - 1,
        developers: developers.cellStats.nonEmpty - 1
    }
}