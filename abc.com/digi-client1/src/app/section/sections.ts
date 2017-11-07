import {Injectable} from "@angular/core";
import {Section} from "./section";


@Injectable()
export class Sections {

  private  sections: Array<Section> = new Array<Section>();
  private  totalItems: number;

  public setSections(clients: Array<Section>) {
    this.sections = clients;
  }
  public getSections(): Array<Section> {
    return this.sections;
  }
  
   public deleteSection(sectionId: string) {
    let sectionFound: Section = this.sections.find(section => sectionId === section.getId());
    const index: number = this.sections.indexOf(sectionFound);
    if (index !== -1) {
      this.sections.splice(index, 1);
      this.totalItems--;
    }
  }
 public addSection(section: Section) {
    this.sections.push(section);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
