export class ColorData {

  private _id: number;
  private _name: string;
  private _HEX: string;

  constructor(id: number, name: string, HEX: string) {
    this.id = id;
    this.name = name;
    this.HEX = HEX;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get HEX(): string {
    return this._HEX;
  }

  set HEX(value: string) {
    this._HEX = value;
  }
}
