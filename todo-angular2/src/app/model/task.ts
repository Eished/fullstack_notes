export class Task {
  id: string;
  name: string;
  isDone: boolean;

  constructor(id: string, name: string, isDone: boolean) {
    this.id = id;
    this.name = name;
    this.isDone = isDone;
  }

  getName(): string {
    return this.name;
  }
}
