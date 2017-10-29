import {Injectable} from "@angular/core";
import {Phase} from "./phase";


@Injectable()
export class Phases {

  private  phases: Array<Phase> = new Array<Phase>();
  private  totalItems: number;

  public setPhases (phases: Array<Phase>) {
    this.phases = phases;
  }
  public getPhases(): Array<Phase> {
    return this.phases;
  }

  public addPhase(phase: Phase) {
    this.phases.push(phase);
    this.totalItems++;
  }

  public deletePhase(name: string) {
    let phaseFound: Phase = this.phases.find(phase => name === phase.getName());
    const index: number = this.phases.indexOf(phaseFound);
    if (index !== -1) {
      this.phases.splice(index, 1);
      this.totalItems--;
    }
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
