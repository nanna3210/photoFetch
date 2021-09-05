import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {path:'',component:TestComponent},
  // {path:'login',component:HelloWorld}, 
  // {path:'nanna', component:HelloNanna}, 
  // {path:'test', component:TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
