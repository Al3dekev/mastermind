export class ResultBallData {


  private _id: number;
  private _IdLine: number;
  /**
   * manage de result ball color depending on the main game grid results
   * 0: No color; there's nothing to say
   * 1: Good color exists in the grid, but not the good placement
   * 2: good color, good placement
   */
  private _ColorType: number;


  constructor(id: number, IdLine: number, ColorType: number) {
    this.id = id;
    this.IdLine = IdLine;
    this.ColorType = ColorType;
  }


  get IdLine(): number {
    return this._IdLine;
  }

  set IdLine(value: number) {
    this._IdLine = value;
  }

  get ColorType(): number {
    return this._ColorType;
  }

  set ColorType(value: number) {
    this._ColorType = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
