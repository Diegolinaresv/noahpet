import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  localStep: number = 0;

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    this.stepperService.getStep().subscribe((step) => (this.localStep = step));
  }
}
