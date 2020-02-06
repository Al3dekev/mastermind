class GameGridData {

  private _id: number;
  private _id_line: number;
  private _colorId: number;

  constructor(id: number, id_line: number, colorId: number) {
    this.id = id;
    this.id_line = id_line;
    this.colorId = colorId;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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
