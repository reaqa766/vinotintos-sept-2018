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
import { PlayersComponent } from './components/players/players.component';
import { PlayersteComponent } from './components/playerste/playerste.component';
import { PitchersteComponent } from './components/playerste/pitcherste/pitcherste.component';
import { Pitchers1Component } from './components/players/pitchers1/pitchers1.component';
import { Playerste1Component } from './components/playerste1/playerste1.component';




const routes: Routes = [
  {path:'home',
    component: HomeComponent},
  
  {path:'players',
    component: PlayersComponent},

  {path:'playerste1',
    component: Playerste1Component},
  
  {path:'pitcherste',
    component: PitchersteComponent},
    
  {path:'pitchers1',
    component: Pitchers1Component},
  
  {path:'playerste',
    component: PlayersteComponent},
  
  
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
