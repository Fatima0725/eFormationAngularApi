import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FormationsComponent } from './formations/formations.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './form/inscription/inscription.component';
import { InscriptionEtudiantComponent } from './form/inscription-etudiant/inscription-etudiant.component';
import { InscriptionFormateurComponent } from './form/inscription-formateur/inscription-formateur.component';
import { ConnexionComponent } from './form/connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './connexion/admin/admin.component';
import { FormateurComponent } from './connexion/formateur/formateur.component';
import { ApprenantComponent } from './connexion/apprenant/apprenant.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  //{path:'', component: HomeComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'inscriptionE', component:InscriptionEtudiantComponent},
  {path: 'inscriptionF', component:InscriptionFormateurComponent},
  {path: 'home', component:HomeComponent},
  {path: 'connexion', component:ConnexionComponent},
  {path: 'workspaceAdmin', component:AdminComponent},
  {path: 'workspaceFormateur', component:FormateurComponent},
  {path: 'workspaceApprenant', component:ApprenantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
