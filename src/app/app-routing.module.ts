import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CuadroComponent } from './components/cuadro/cuadro.component';
import { JardinesComponent } from './components/jardines/jardines.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PitchersComponent } from './components/pitchers/pitchers.component';
import { RegistreseComponent } from './components/registrese/registrese.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  {path:'home',
    component: HomeComponent},
  
  
  {path:'cuadro',
    component: CuadroComponent},

  { path: 'jardines',
    component: JardinesComponent},
  {path: 'nosotros',
    component: NosotrosComponent},

  {path: 'noticias',
    component: NoticiasComponent,},

  {path: 'pitchers',
    component: PitchersComponent},

  {path: 'registrese',
    component: RegistreseComponent},
  {path: 'ingresar',
    component: IngresarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
