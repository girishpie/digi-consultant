import { Phase } from '../phase';
import { PhaseService } from '../phase.service';
import { Phases } from '../phases';
import { Component, Input, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'new-phase',
  templateUrl: './new-phase.component.html'
})
export class NewPhaseComponent implements OnInit {

   private name: string ;

  constructor(private phaseService: PhaseService, private phases: Phases)  {

  }

  ngOnInit() { 
  }
  
  addNewPhase() {
    
    let phase: Phase = new Phase();
    phase.setName(this.name);
   
    this.phaseService.save(phase).subscribe(data => {
        console.log(data);
        phase.setId(data);
        this.phases.addPhase(phase);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });


  }

}
