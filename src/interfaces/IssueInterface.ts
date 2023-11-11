interface Issue {
    name: string;
    subissues: SubIssue[];
}

interface SubIssue {
    name: string;
    count: number;
}

interface ModifiedIssue extends Issue {
    count: number;
}

export type { Issue, SubIssue, ModifiedIssue };
