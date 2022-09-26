import { HomeComponent } from './template/home/home.component';
import { PcManageComponent } from './template/pc/pc-manage/pc-manage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'pcmanage', component: PcManageComponent},
  {path:'home', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
