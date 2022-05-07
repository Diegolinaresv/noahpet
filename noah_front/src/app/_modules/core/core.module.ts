import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PawButtonComponent } from 'src/app/_components/paw-button/paw-button.component';
import { NavbarComponent } from 'src/app/_components/navbar/navbar.component';
import { StepperComponent } from 'src/app/_components/stepper/stepper.component';

@NgModule({
  declarations: [PawButtonComponent, NavbarComponent, StepperComponent],
  exports: [PawButtonComponent, NavbarComponent, StepperComponent],
  imports: [CommonModule],
})
export class CoreModule {}
