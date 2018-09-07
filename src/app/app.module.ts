import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayerService } from './services/player.service';


import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuadroComponent } from './components/cuadro/cuadro.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { JardinesComponent } from './components/jardines/jardines.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PitchersComponent } from './components/pitchers/pitchers.component';
import { RegistreseComponent } from './components/registrese/registrese.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadroComponent,
    FooterComponent,
    HomeComponent,
    IngresarComponent,
    JardinesComponent,
    MenubarComponent,
    NosotrosComponent,
    NoticiasComponent,
    PitchersComponent,
    RegistreseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
   
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
