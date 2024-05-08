import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/Project/project';
import { ProjectService } from '../services/project.service';
import { InvestmentService } from '../services/investment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup
import { Investment } from '../Models/Investment/investment';

@Component({
  selector: 'app-abonnementhome',
  templateUrl: './abonnementhome.component.html',
  styleUrls: ['./abonnementhome.component.css']
})
export class AbonnementhomeComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  actionCount = 0;
  selectedIdProject: number | undefined;

  // Define investmentForm as a FormGroup property
  investmentForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private investmentService: InvestmentService,
    private formBuilder: FormBuilder // Inject FormBuilder
  ) {
    // Initialize investmentForm in the constructor
    this.investmentForm = this.formBuilder.group({
      actionCount: ['', [Validators.required, Validators.min(1), Validators.max(80)]]
    });
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProject().subscribe(
      data => {
        this.projects = data;
        console.log('Projects:', this.projects);
      },
      error => {
        console.error('Error fetching projects:', error);
      }
    );
  }
  submitInvestmentForm(): void {
    const projectId = this.selectedIdProject;

    if (projectId && this.selectedProject && this.actionCount > 0) {
        // Assuming you have an Investment instance to pass to addInvestment method
        const investment: Investment = {
            // Populate with necessary properties
            idInvestment: 0, // Replace with actual value
            nbr_action: this.actionCount,
            date_inevt: new Date()
            // Add other properties as needed
        };

        this.investmentService.addInvestment(investment, this.actionCount, projectId).subscribe(
            () => {
                console.log('Investment added successfully');
                this.loadProjects();
                this.selectedProject = null;
                this.selectedIdProject = undefined;
                this.actionCount = 0;
                this.investmentForm.reset();
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
    if (project) {
      this.selectedIdProject = project.idProject;
    } else {
      this.selectedIdProject = undefined;
    }
  }
}
