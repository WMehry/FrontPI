import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import Chart from 'chart.js/auto';
import { Observable } from 'rxjs';
import { Project } from 'src/app/Models/Project/project';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-category-analysis',
  templateUrl: './category-analysis.component.html',
})
export class CategoryAnalysisComponent implements OnInit {
  projects!: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjectsData();
  }

  loadProjectsData(): void {
    this.projectService.getAllProject().subscribe(
      (projects: Project[]) => {
        this.projects = of(projects);
        this.renderChart();
      },
      (error: any) => {
        console.error('Error loading projects data:', error);
        // Handle error here, for example, displaying a message to the user
      }
    );
  }

  renderChart(): void {
    // Check if project data is available first
    this.projects.subscribe(
      (projects: Project[]) => {
        // Extract categories and total raising investment from projects
        const categoriesMap = new Map<string, number>();
        projects.forEach(project => {
          if (categoriesMap.has(project.categoryProject)) {
            categoriesMap.set(
              project.categoryProject,
              categoriesMap.get(project.categoryProject)! +
                project.total_raising_investment
            );
          } else {
            categoriesMap.set(
              project.categoryProject,
              project.total_raising_investment
            );
          }
        });

        // Get canvas element for chart
        const ctx = document.getElementById('categoryChart') as HTMLCanvasElement;
        if (ctx) {
          // Create chart using Chart.js
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: Array.from(categoriesMap.keys()),
              datasets: [
                {
                  label: 'Total Raising Investment',
                  data: Array.from(categoriesMap.values()),
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
      },
      (error: any) => {
        console.error('Error loading projects data:', error);
        // Handle error here, for example, displaying a message to the user
      }
    );
  }
}
