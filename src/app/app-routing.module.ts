import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { IconDetailPageComponent } from './features/icon-gallery/pages/icon-detail-page/icon-detail-page.component';

const routes: Routes = [

  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        component: HomePageComponent
      },
      {
        path:'flutter',
        component:IconDetailPageComponent
      },
      {
        path:'suint',
        component:IconDetailPageComponent
      },
      {
        path:'**',
        component:ErrorPageComponent
      },
    ],
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
