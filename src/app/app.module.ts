import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthenticationGuard } from './guard/authentication.guard';
import { NotificationModule } from './notification.module';
import { NotificationService } from './service/notification.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminInterfaceComponent } from './admin/admin-interface/admin-interface.component';

import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { BadgeModule } from "primeng/badge";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ChartModule } from "primeng/chart";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ChipsModule } from "primeng/chips";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ColorPickerModule } from "primeng/colorpicker";
import { ContextMenuModule } from "primeng/contextmenu";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { FieldsetModule } from "primeng/fieldset";
import { FileUploadModule } from "primeng/fileupload";
import { FullCalendarModule } from "primeng/fullcalendar";
import { GalleriaModule } from "primeng/galleria";
import { InplaceModule } from "primeng/inplace";
import { InputMaskModule } from "primeng/inputmask";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from "primeng/knob";
import { LightboxModule } from "primeng/lightbox";
import { ListboxModule } from "primeng/listbox";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { OrganizationChartModule } from "primeng/organizationchart";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PasswordModule } from "primeng/password";
import { PickListModule } from "primeng/picklist";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ScrollTopModule } from "primeng/scrolltop";
import { SelectButtonModule } from "primeng/selectbutton";
import { SidebarModule } from "primeng/sidebar";
import { SkeletonModule } from "primeng/skeleton";
import { SlideMenuModule } from "primeng/slidemenu";
import { SliderModule } from "primeng/slider";
import { SplitButtonModule } from "primeng/splitbutton";
import { SplitterModule } from "primeng/splitter";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TagModule } from "primeng/tag";
import { TerminalModule } from "primeng/terminal";
import { TieredMenuModule } from "primeng/tieredmenu";
import { TimelineModule } from "primeng/timeline";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from "primeng/tree";
import { TreeTableModule } from "primeng/treetable";
import { VirtualScrollerModule } from "primeng/virtualscroller";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { AdminRightMenuComponent } from './admin/admin-right-menu/admin-right-menu.component';
import {AppMenuitemComponent} from './admin/admin-menu/app.menuitem.component';
import {AdminTopBarComponent} from './admin/admin-top-bar/admin-top-bar.component';
import {AdmincollaborateurComponent} from './admin/admincollaborateur/admincollaborateur.component';
import {CommandeCreateComponent} from './admin/commandes/commande-create/commande-create.component';
import {InterventionEditComponent} from './admin/commandes/commande-edit/commande-edit.component';
import {CommandeListComponent} from './admin/commandes/commande-list/commande-list.component';
import {CommandeViewComponent} from './admin/commandes/commande-view/commande-view.component';
import {InterventionConseilComponent} from './admin/commandes/intervention-conseil/intervention-conseil.component';
import {InterventionInfoComponent} from './admin/commandes/intervention-info/intervention-info.component';
import {InterventionMembreEquipComponent} from './admin/commandes/intervention-membre-equip/intervention-membre-equip.component';
import {InterventionStockComponent} from './admin/commandes/intervention-stock/intervention-stock.component';
import {SearchInterventionComponent} from './admin/commandes/search-intervention/search-intervention.component';
import {CommandesComponent} from './admin/commandes/commandes.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MenuService} from './service/app.menu.service';
import {StockComponent} from './admin/stock/stock.component';
import {DemandeCongeViewComponent} from './chef-equipe/chef-equipe-demandeConge/demande-conge-view/demande-conge-view.component';
import {DashboardComponent} from './chef-equipe/dashboard/dashboard.component';
import {DashbordComponent} from './collaborateur/dashbord/dashbord.component';
import {CollaborateurComponent} from './collaborateur/collaborateur.component';
import {SuiviListComponent} from './chef-equipe/chef-suivi/suivi-list/suivi-list.component';
import {ChefSuiviComponent} from './chef-equipe/chef-suivi/chef-suivi.component';
import {ChefEquipeTacheListComponent} from './chef-equipe/chef-tache/chef-equipe-tache-list/chef-equipe-tache-list.component';
import {ChefEquipeTacheCreateComponent} from './chef-equipe/chef-tache/chef-equipe-tache-create/chef-equipe-tache-create.component';
import {ChefTacheComponent} from './chef-equipe/chef-tache/chef-tache.component';
import {DemandeCongeCreateComponent} from './chef-equipe/chef-equipe-demandeConge/demande-conge-create/demande-conge-create.component';
import {DemandeCongeListComponent} from './chef-equipe/chef-equipe-demandeConge/demande-conge-list/demande-conge-list.component';
import {MembreEquipeComponent} from './admin/equipes/membre-equipe/membre-equipe.component';
import {CollaborateurCreateComponent} from './collaborateur/collaborateur-create/collaborateur-create.component';
import {CollaborateurListComponent} from './collaborateur/collaborateur-list/collaborateur-list.component';
import {ChefEquipeMenuItemComponent} from './chef-equipe/chef-equipe-menu/chef-equipe-menu-item/chef-equipe-menu-item.component';
import {ChefEquipeRightMenuComponent} from './chef-equipe/chef-equipe-right-menu/chef-equipe-right-menu.component';
import {ChefEquipeTopBarComponent} from './chef-equipe/chef-equipe-top-bar/chef-equipe-top-bar.component';
import {ChefEquipeMainComponent} from './chef-equipe/chef-equipe-main/chef-equipe-main.component';
import {ChefEquipeMenuComponent} from './chef-equipe/chef-equipe-menu/chef-equipe-menu.component';
import {ChefEquipeComponent} from './chef-equipe/chef-equipe.component';
import {CollaborateurDemandeCongeComponent} from './collaborateur/collaborateur-demande-conge/collaborateur-demande-conge.component';
import {
  CollaborateurDemandeCongeListComponent
} from './collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-list/collaborateur-demande-conge-list.component';
import {CollaborateurMenuItemComponent} from './collaborateur/collaborateur-menu/collaborateur-menu-item.component';
import {
  CollaborateurDemandeCongeCreateComponent
} from './collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-create/collaborateu-demande-conge-create.component';
import {CollaborateurMenuComponent} from './collaborateur/collaborateur-menu/collaborateur-menu.component';
import {CollaborateurRightMenuComponent} from './collaborateur/collaborateur-right-menu/collaborateur-right-menu.component';
import {CollaborateurTopBarComponent} from './collaborateur/collaborateur-top-bar/collaborateur-top-bar.component';
import {CollaborateurMainComponent} from './collaborateur/collaborateur-main/collaborateur-main.component';
import {HomePageComponent} from './home/home-page/home-page.component';
import {HomeComponent} from './home/home.component';
import {
  CollaborateurDemandeCongeViewComponent
} from './collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-view/collaborateur-demande-conge-view.component';
import {EquipeViewComponent} from './admin/equipes/equipe-view/equipe-view.component';
import {EquipeEditComponent} from './admin/equipes/equipe-edit/equipe-edit.component';
import {EquipeListComponent} from './admin/equipes/equipe-list/equipe-list.component';
import {EquipeCreateComponent} from './admin/equipes/equipe-create/equipe-create.component';
import {EquipesComponent} from './admin/equipes/equipes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminInterfaceComponent,
    AdminMenuComponent,
    AdminRightMenuComponent,
    AppMenuitemComponent,
    AdminTopBarComponent,
    AdmincollaborateurComponent,
    CommandeCreateComponent,
    InterventionEditComponent,
    CommandeListComponent,
    CommandeViewComponent,
    StockComponent,
    InterventionConseilComponent,
    InterventionInfoComponent,
    InterventionMembreEquipComponent,
    InterventionStockComponent,
    SearchInterventionComponent,
    CommandesComponent,




    EquipesComponent,
    EquipeCreateComponent,
    EquipeListComponent,
    EquipeEditComponent,
    EquipeViewComponent,



    CollaborateurDemandeCongeViewComponent,
    HomeComponent,
    HomePageComponent,
    CollaborateurMenuComponent,
    CollaborateurComponent,
    CollaborateurMainComponent,
    CollaborateurTopBarComponent,
    CollaborateurRightMenuComponent,
    CollaborateurMenuComponent,
    CollaborateurDemandeCongeCreateComponent,
    CollaborateurMenuItemComponent,
    CollaborateurDemandeCongeListComponent,
    CollaborateurDemandeCongeComponent,
    ChefEquipeComponent,
    ChefEquipeMenuComponent,
    ChefEquipeMainComponent,
    ChefEquipeTopBarComponent,
    ChefEquipeRightMenuComponent,
    ChefEquipeMenuItemComponent,
    CollaborateurListComponent,
    CollaborateurCreateComponent,
    MembreEquipeComponent,
    DemandeCongeListComponent,
    DemandeCongeCreateComponent,
    ChefTacheComponent,
    ChefEquipeTacheCreateComponent,
    ChefEquipeTacheListComponent,
    ChefSuiviComponent,
    SuiviListComponent,
    CollaborateurComponent,
    DashbordComponent,
    DashboardComponent,
    DemandeCongeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotificationModule,



    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    FullCalendarModule,
    GalleriaModule,
    InplaceModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KnobModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    ScrollPanelModule,
    ScrollTopModule,
    SelectButtonModule,
    SidebarModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SplitButtonModule,
    SplitterModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TimelineModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,
  ],
  providers: [NotificationService, AuthenticationGuard, AuthenticationService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MenuService,
    UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
