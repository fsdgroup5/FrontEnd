import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHallComponent } from './edit-hall/edit-hall.component';
import { HallComponent } from './hall/hall.component';
import { NewhallComponent } from './newhall/newhall.component';

const routes: Routes = [
  {path:'AddHall',component:NewhallComponent},
  {path:'update',component:EditHallComponent},
  {path:'',component:HallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
