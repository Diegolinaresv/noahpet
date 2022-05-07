import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { MeFormComponent } from './childs/me-form/me-form.component';
import { ConditionFormComponent } from './childs/condition-form/condition-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicalConditionFormComponent } from './childs/medical-condition-form/medical-condition-form.component';
import { FinishInformationComponent } from './childs/finish-information/finish-information.component';
import { PetFoodComponent } from './childs/pet-food/pet-food.component';
import { FoodPlanComponent } from './childs/food-plan/food-plan.component';
import { UserInfoComponent } from './childs/user-info/user-info.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from 'src/app/_modules/core/core.module';

@NgModule({
  declarations: [
    StepsComponent,
    MeFormComponent,
    ConditionFormComponent,
    MedicalConditionFormComponent,
    FinishInformationComponent,
    PetFoodComponent,
    FoodPlanComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepsRoutingModule,
    NgSelectModule,
    NgbModule,
    CoreModule,
  ],
})
export class StepsModule {}
