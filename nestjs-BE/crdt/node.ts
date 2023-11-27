export class Node<T> {
  targetId: string;
  parentId: string;
  description: T;
  children = new Array<string>();

  constructor(
    targetId: string,
    parentId: string = '0',
    description: T | null = null,
  ) {
    this.targetId = targetId;
    this.parentId = parentId;
    this.description = description;
  }
}
