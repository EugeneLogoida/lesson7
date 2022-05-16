import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { BlogComponent } from './blog/blog.component';

BlogComponent

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'blog'},
  {path: 'blog', component: BlogComponent},
  {path: 'admin/blogs', component: AdminblogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
