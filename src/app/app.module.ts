import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { FormationsComponent } from './formations/formations.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './form/inscription/inscription.component';
import { ConnexionComponent } from './form/connexion/connexion.component';
import { InscriptionEtudiantComponent } from './form/inscription-etudiant/inscription-etudiant.component';
import { InscriptionFormateurComponent } from './form/inscription-formateur/inscription-formateur.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './connexion/admin/admin.component';
import { ApprenantComponent } from './connexion/apprenant/apprenant.component';
import { FormateurComponent } from './connexion/formateur/formateur.component';
import { PaysComponent } from './form/pays/pays.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path:'body', component: BodyComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'inscriptionE', component:InscriptionEtudiantComponent},
  {path: 'inscriptionF', component:InscriptionFormateurComponent},
  {path: 'home', component:HomeComponent},
  {path: 'connexion', component:ConnexionComponent},
  {path: 'workspaceAdmin',component:AdminComponent},
  {path: 'workspaceFormateur', component:FormateurComponent},
  {path: 'workspaceApprenant', component:ApprenantComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    FormationsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    InscriptionComponent,
    ConnexionComponent,
    InscriptionEtudiantComponent,
    InscriptionFormateurComponent,
    HomeComponent,
    AdminComponent,
    ApprenantComponent,
    FormateurComponent,
    PaysComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
