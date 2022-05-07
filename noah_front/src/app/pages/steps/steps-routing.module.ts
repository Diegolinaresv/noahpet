import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyDonePetsGuard } from 'src/app/guards/empty-done-pets.guard';
import { EmptyClientGuard } from 'src/app/guards/empty-client.guard';
import { EmptyPetGuard } from 'src/app/guards/empty-pet.guard';
import { FilledClientGuard } from 'src/app/guards/filled-client.guard';
import { ConditionFormComponent } from './childs/condition-form/condition-form.component';
import { FinishInformationComponent } from './childs/finish-information/finish-information.component';
import { FoodPlanComponent } from './childs/food-plan/food-plan.component';
import { MeFormComponent } from './childs/me-form/me-form.component';
import { MedicalConditionFormComponent } from './childs/medical-condition-form/medical-condition-form.component';
import { PetFoodComponent } from './childs/pet-food/pet-food.component';
import { UserInfoComponent } from './childs/user-info/user-info.component';
import { StepsComponent } from './steps.component';

const routes: Routes = [
  {
    path: '',
    component: StepsComponent,
    children: [
      {
        path: 'me',
        component: MeFormComponent,
        canActivate: [FilledClientGuard],
      },
      {
        path: 'condition',
        component: ConditionFormComponent,
        canActivate: [EmptyClientGuard],
      },
      {
        path: 'medical-condition',
        component: MedicalConditionFormComponent,
        canActivate: [EmptyClientGuard, EmptyPetGuard],
      },
      {
        path: 'finish-information',
        component: FinishInformationComponent,
        canActivate: [EmptyClientGuard, EmptyPetGuard],
      },
      {
        path: 'pet-food',
        component: PetFoodComponent,
        canActivate: [EmptyClientGuard, EmptyDonePetsGuard],
      },
      {
        path: 'food-plan',
        component: FoodPlanComponent,
        canActivate: [EmptyClientGuard, EmptyDonePetsGuard],
      },
      {
        path: 'user-info',
        component: UserInfoComponent,
        canActivate: [EmptyClientGuard, EmptyDonePetsGuard],
      },
      { path: '', pathMatch: 'full', redirectTo: 'me' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsRoutingModule {}
