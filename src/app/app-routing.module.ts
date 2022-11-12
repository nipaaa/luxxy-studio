import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutStudioComponent } from './about-studio/about-studio.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:"", component: AppComponent},
{path:"aboutStudio", component: AboutStudioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
