/**
 * Created by gipai on 10/4/2017.
 */


export class QueryParams {
  private _searchString: string;
  private _pageNumber = 0;
  private _pageSize= 3;


  get searchString(): string {
    return this._searchString;
  }

  set searchString(value: string) {
    this._searchString = value;
  }

  get pageNumber(): number {
    return this._pageNumber;
  }

  set pageNumber(value: number) {
    this._pageNumber = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }
}
