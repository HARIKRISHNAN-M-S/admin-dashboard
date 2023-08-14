import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeComponent } from './employee/employee.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'',redirectTo:'dashboard',pathMatch:'full'},
{path:'employee',component:EmployeeComponent},
{path:'gallery',component:GalleryComponent},
{path:'contact',component:ContactComponent},
{ path:'leads',component:LeadsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
