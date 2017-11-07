import {Injectable} from "@angular/core";
import {Document} from "./document";


@Injectable()
export class Documents {

  private  documents: Array<Document> = new Array<Document>();
  private  totalItems:number;

  public setDocuments(documents: Array<Document>) {
    this.documents = documents;
  }
  public getDocuments(): Array<Document> {
    return this.documents;
  }
   public deleteDocument(documentId: string) {
    let documentFound: Document = this.documents.find(document => documentId === document.getId());
    const index: number = this.documents.indexOf(documentFound);
    if (index !== -1) {
      this.documents.splice(index, 1);
      this.totalItems--;
    }
  }
 public addDocument(document: Document) {
    this.documents.push(document);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
