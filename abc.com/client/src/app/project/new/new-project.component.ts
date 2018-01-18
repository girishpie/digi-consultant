import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../client/client';
import { ClientService } from '../../client/client.service';
import { Clients } from '../../client/clients';
import { Phase } from '../../phase/phase';
import { Phases } from '../../phase/phases';
import { PhaseService } from '../../phase/phase.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Projects } from '../projects';
import {StateService } from '@uirouter/angular';
import { ProjectComponent } from '../project.component';

//declare var jQuery:any;
const projectState = { name: 'project', url: '/project',  component: ProjectComponent };

@Component({
  selector: 'new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
   private availableClients: Client[];
   private availablePhases: Phase[];
   private projectName: string ;
   private jobNumber: string ;
   private siteAddress: string ;
   private description: string ;
   private startDate: Date ;
   private clientId: string ;
   private phase: string ;

  constructor(private  projectService: ProjectService,private  clientService: ClientService,
              private phaseService: PhaseService,private projects: Projects, 
              private clients: Clients, private phases: Phases, public stateService: StateService)  {

  }

  ngOnInit() {
    this.getClients();
    this.getPhases();
  }
  
  addNewProject() {
    let project: Project = new Project();
    project.setProjectName(this.projectName);
    project.setSiteAddress(this.siteAddress);
    project.setDescription(this.description);
    project.setStartDate(new Date(this.startDate));
    project.setClientId(this.clientId);
    project.setPhase(this.phase);
    this.projectService.save(project).subscribe(data => {
        console.log(data);
        //project.setId(data);
        //this.projects.addProject(project);
      this.stateService.go('project');

    }, error => {
      window.alert(error._body);
    });


  }
  
  getPhases(){
    this.phaseService.getPhases(null).subscribe( data => {
      this.availablePhases = this.phases.getPhases();
    }, error => {
      console.log(error._body.toString() + " No phases found");
    });
  }
  
  getClients() {
    this.clientService.getClients(null).subscribe( data => {
      this.availableClients = this.clients.getClients();
    }, error => {
      console.log(error._body.toString() + " No clients found");
    });
  }
  
  goBack() {
    window.history.back();
  }
  
}
