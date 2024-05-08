// abonnementhome.component.ts

import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/Project/project';
import { ProjectService } from '../services/project.service';
import { InvestmentService } from '../services/investment.service';
import { Investment } from '../Models/Investment/investment';

@Component({
  selector: 'app-abonnementhome',
  templateUrl: './abonnementhome.component.html',
  styleUrls: ['./abonnementhome.component.css']
})
export class AbonnementhomeComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  showInvestmentPopup = false;
  actionCount = 0;
  selectedIdProject: string | undefined;
  idInvestment: number | undefined;

  constructor(
    private projectService: ProjectService,
    private investmentService: InvestmentService
  ) { }
  ngOnInit(): void {
    this.loadProjects();
    // Initialize selectedIdProject here if necessary
    // Example: this.selectedIdProject = this.projects[0]?.id; // Assign the first project's ID
    this.selectedIdProject = ''; // Initialize with an empty string
    this.idInvestment = 0; // Initialize idInvestment to 0
}

  
  

  loadProjects(): void {
    this.projectService.getAllProject().subscribe(
      data => {
        this.projects = data;
        console.log('Offers:', this.projects);
      },
      error => {
        console.error('Error fetching offers:', error);
      }
    );
  }

  submitInvestmentForm(): void {
    console.log('selectedIdProject:', this.selectedIdProject);
    console.log('actionCount:', this.actionCount);
  
    // Convert selectedIdProject to a number
    const projectId = Number(this.selectedIdProject);
  
    if (!isNaN(projectId) && typeof this.idInvestment === 'number') {
      // Proceed with form submission
      // Create an instance of the Investment class
      const investment = new Investment();
      investment.nbr_action = this.actionCount;
      investment.date_inevt = new Date(); // You can replace this with the actual date you want to set

      // Call the investment service to add the investment
      this.investmentService.addInvestment(investment, investment.nbr_action, projectId).subscribe(
        () => {
          // Investment added successfully
          console.log('Investment added successfully');
          // Optionally, you can reload the projects list or perform any other action
          this.loadProjects();
        },
        error => {
          console.error('Error adding investment:', error);
        }
      );
    } else {
      console.error('Invalid investment data');
    }
}



  
  
  
  openInvestmentModal(project: Project): void {
    this.selectedProject = project;
    // Assign selectedIdProject based on the selected project
    if (project) {
      this.selectedIdProject = String(project.idProject); // Assuming idProject represents the project's ID
    } else {
      // Clear selectedIdProject if no project is selected
      this.selectedIdProject = undefined;
    }
  }
  
}
