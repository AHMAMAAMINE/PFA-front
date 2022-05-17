import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import {AdminInterfaceComponent} from './admin/admin-interface/admin-interface.component';
import {StockComponent} from './admin/stock/stock.component';
import {AdmincollaborateurComponent} from './admin/admincollaborateur/admincollaborateur.component';
import {EquipesComponent} from './admin/equipes/equipes.component';
import {CommandesComponent} from './admin/commandes/commandes.component';
import {ChefEquipeMainComponent} from './chef-equipe/chef-equipe-main/chef-equipe-main.component';
import {DashboardComponent} from './chef-equipe/dashboard/dashboard.component';
import {ChefEquipeTacheListComponent} from './chef-equipe/chef-tache/chef-equipe-tache-list/chef-equipe-tache-list.component';
import {DemandeCongeListComponent} from './chef-equipe/chef-equipe-demandeConge/demande-conge-list/demande-conge-list.component';
import {CollaborateurListComponent} from './collaborateur/collaborateur-list/collaborateur-list.component';
import {CollaborateurMainComponent} from './collaborateur/collaborateur-main/collaborateur-main.component';
import {DashbordComponent} from './collaborateur/dashbord/dashbord.component';
import {CollaborateurDemandeCongeComponent} from './collaborateur/collaborateur-demande-conge/collaborateur-demande-conge.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/management', component: UserComponent, canActivate: [AuthenticationGuard]},
  {path: 'admin/static', component: StockComponent, canActivate: [AuthenticationGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'chef-equipe',
    component: ChefEquipeMainComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'chef-equipe-conge', component: DemandeCongeListComponent},
      {
        path: 'chef-equipe-tache',
        component: ChefEquipeTacheListComponent,
      },
      {path: 'collaborateur', component: CollaborateurListComponent}

    ],

  },
  {
    path: 'admin',
    component: AdminInterfaceComponent,
    children: [
      // { path: "", component: DashboardDemoComponent },
      {path: '', component: StockComponent},
      {path: 'view/commande', component: CommandesComponent},
      {path: 'view/equipes', component: EquipesComponent},

      {
        path: 'view/admin-collaborateur',
        component: AdmincollaborateurComponent,
      },
    ],
  },
  {
    path: 'collaborateur',
    component: CollaborateurMainComponent,
    children: [
      {path: '', component: DashbordComponent},
      {
        path: 'collaborateur/demande/conge',
        component: CollaborateurDemandeCongeComponent,
      },
    ],
  },

  {path: 'error', component: AppErrorComponent},
  {path: '404', component: AppNotfoundComponent},
  {path: '**', redirectTo: '/404'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
