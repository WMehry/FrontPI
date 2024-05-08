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
        // Map to store total investment needs for each category
        const investmentNeedMap = new Map<string, number>();
        const totalInvestmentMap = new Map<string, number>();

        // Extract categories and sum up the investment needs and total raising investment
        projects.forEach(project => {
          if (investmentNeedMap.has(project.categoryProject)) {
            investmentNeedMap.set(
              project.categoryProject,
              investmentNeedMap.get(project.categoryProject)! +
                project.investNeed
            );
            totalInvestmentMap.set(
              project.categoryProject,
              totalInvestmentMap.get(project.categoryProject)! +
                project.total_raising_investment
            );
          } else {
            investmentNeedMap.set(project.categoryProject, project.investNeed);
            totalInvestmentMap.set(project.categoryProject, project.total_raising_investment);
          }
        });

        // Find the category with the highest sum of investment needs
        let maxInvestmentSum = 0;
        investmentNeedMap.forEach((investmentSum) => {
          if (investmentSum > maxInvestmentSum) {
            maxInvestmentSum = investmentSum;
          }
        });

        // Get canvas element for chart
        const ctx = document.getElementById('categoryChart') as HTMLCanvasElement;
        if (ctx) {
          // Create chart using Chart.js
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: Array.from(investmentNeedMap.keys()),
              datasets: [
                {
                  label: 'Total Raising Investment',
                  data: Array.from(totalInvestmentMap.values()),
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
                {
                  label: 'Total Investment Need',
                  data: Array.from(investmentNeedMap.values()),
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  max: maxInvestmentSum, // Set the maximum value for the y-axis
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
