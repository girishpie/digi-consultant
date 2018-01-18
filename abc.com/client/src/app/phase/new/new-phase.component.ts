import { Phase } from '../phase';
import { PhaseService } from '../phase.service';
import { Phases } from '../phases';
import { Component, Input, OnInit } from '@angular/core';
import {StateService } from '@uirouter/angular';
import { PhaseComponent } from '../phase.component';

//declare var jQuery:any;
const phaseState = { name: 'phase', url: '/phase',  component: PhaseComponent };
@Component({
  selector: 'new-phase',
  templateUrl: './new-phase.component.html'
})
export class NewPhaseComponent implements OnInit {

   private name: string ;
   loading: boolean = false;
   
  constructor(private phaseService: PhaseService, private phases: Phases, public stateService: StateService)  {

  }

  ngOnInit() { 
  }
  
  addNewPhase() {
    this.loading = true;
    let phase: Phase = new Phase();
    phase.setName(this.name);
   
    this.phaseService.save(phase).subscribe(data => {
        console.log(data);
       // phase.setId(data);
       // this.phases.addPhase(phase);
      this.stateService.go('phase');
      this.loading = false;

    }, error => {
      window.alert(error._body);
      this.loading = false;
    });


  }

  goBack() {
    window.history.back();
  }
}
