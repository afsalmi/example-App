import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../../structure/constants/constant.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'ng5-breadcrumb';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { MultiDataSet, Color, Label } from "ng2-charts";
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var Ladda: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public currentPageName = null;
  // Doughnut
  public doughnutChartLabels: Label[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales"
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = "doughnut";

  public lineChartData: ChartDataSets[] = [
    { data: [0, 1.9, 2.8, 3.85, 7], label: 'Series A' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(
    public constantService: ConstantService,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
  ) {
  }

  ngOnInit() {
    this.init();
  }


  ngOnDestroy() {

  }

  init() {
    this.currentPageName = 'Dashboard';
    this.breadcrumbService.addFriendlyNameForRouteRegex('\\/dashboard(\\?.*)?$', this.currentPageName);

  }

}
