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

declare var jQuery:any;

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
              private clients: Clients, private phases: Phases)  {

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
    project.setStartDate(this.startDate);
    project.setClientId(this.clientId);
    project.setPhase(this.phase);
    this.projectService.save(project).subscribe(data => {
        console.log(data);
        project.setId(data);
        this.projects.addProject(project);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });


  }
  
  getPhases(){
    this.phaseService.getPhases(null).subscribe( data => {
      this.availablePhases = this.phases.getPhases();
    }, error => {
      window.alert(error._body);
    });
  }
  
  getClients() {
    this.clientService.getClients(null).subscribe( data => {
      this.availableClients = this.clients.getClients();
    }, error => {
      window.alert(error._body);
    });
  }
}
