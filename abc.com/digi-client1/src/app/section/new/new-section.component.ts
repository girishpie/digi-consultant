//import { BoQ } from '../../boq/boq';
//import { BoQs } from '../../boq/boqs';
//import { BoQService } from '../../boq/boq.service';
import { Section } from '../section';
import { SectionService } from '../section.service';
import { Sections } from '../sections';
import { Component, Input, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {
  // private availableBoQs: BoQ[];
   private sectionName: string ;
   private boqId: string ;
  
  constructor(private sectionService: SectionService, 
             // private boQService: BoQService, 
              private sections: Sections) {
              //private boQs: BoQs)  {
  }

  ngOnInit() {
    this.getBoQs();
  }
  
  addNewSection(){
    let section: Section = new Section();
    section.setSectionName(this.sectionName);
    section.setBoqId(this.boqId);
    this.sectionService.save(section).subscribe(data => {
        console.log(data);
        section.setId(data);
        this.sections.addSection(section);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });


  }
  getBoQs() {
//    this.boQService.getBoQs(null).subscribe( data => {
//      this.availableBoQs = this.boQs.getCompanies();
//    }, error => {
//      window.alert(error._body);
//    });
  }

}
