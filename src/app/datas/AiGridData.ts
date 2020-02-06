export class AiGridData {

  private _id_line: number;
  private _colorId: number;

  constructor(id_line: number, colorId: number) {
    this.id_line = id_line;
    this.colorId = colorId;
  }

  get id_line(): number {
    return this._id_line;
  }

  set id_line(value: number) {
    this._id_line = value;
  }

  get colorId(): number {
    return this._colorId;
  }

  set colorId(value: number) {
    this._colorId = value;
  }
}
