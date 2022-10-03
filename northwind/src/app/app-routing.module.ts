import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
    {path:"", pathMatch:"full", component:TodoComponent},
    {path:"todos", component:TodoComponent},
    {path:"todos/category/:userId", component:TodoComponent},
    {path:"todos/add", component:ProductAddComponent, canActivate:[LoginGuard]},
    {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
