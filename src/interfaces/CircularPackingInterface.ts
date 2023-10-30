export interface TreeNode {
  type: 'node';
  value: number;
  name: string;
  children: Tree[];
}

export interface TreeLeaf {
  type: 'leaf';
  name: string;
  value: number;
}

export type Tree = TreeNode | TreeLeaf;
