export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  toWrite(): void {
    if (this.tool === null) {
      console.log('I cannot write without tool');
      return;
    }
    this.tool.toWrite();
  }
}
/////////////////////////////////////
export abstract class Tool {
  constructor(private _name: string) {}

  abstract toWrite(): void;

  get name(): string {
    return this._name;
  }
}
///////////////////////////////////////
export class Pen extends Tool {
  toWrite(): void {
    console.log(this.name + `is writing...`);
  }
}
///////////////////////////////////////
export class WriterMachine extends Tool {
  toWrite(): void {
    console.log(`${this.name} is typing...`);
  }
}
///////////////////////////////////////
const writer = new Writer('Leo');
const pen = new Pen('BIC');
const writermachine = new WriterMachine('Samsung');

console.log(writer.name);
console.log(pen.name);
console.log(writermachine.name);
writer.toWrite();
