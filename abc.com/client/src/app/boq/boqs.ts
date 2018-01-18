import {Injectable} from "@angular/core";
import {BoQ} from "./boq";


@Injectable()
export class BoQs {

  private  boqs: Array<BoQ> = new Array<BoQ>();
  private  totalItems: number;

  public setBoQs (boqs: Array<BoQ>) {
    this.boqs = boqs;
  }
  public getBoQs (): Array<BoQ> {
    return this.boqs;
  }
   public deleteBoQ(boqId: string) {
    let boqFound: BoQ = this.boqs.find(boq => boqId === boq.getId());
    const index: number = this.boqs.indexOf(boqFound);
    if (index !== -1) {
      this.boqs.splice(index, 1);
      this.totalItems--;
    }
  }
 public addBoQ(boq: BoQ) {
    this.boqs.push(boq);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
