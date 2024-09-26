import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './modules/user-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListRealComponent } from './todo-list-real/todo-list-real.component';
import { ShoppingCartInterfaceComponent } from './shopping-cart-interface/Views/shopping-cart-interface.component';
import { ShoppingCartHeaderComponent } from './shopping-cart-interface/Views/shopping-cart-header/shopping-cart-header.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-interface/Views/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartProductListComponent } from './shopping-cart-interface/Views/shopping-cart-product-list/shopping-cart-product-list.component';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

//kanban
import { KanbanComponent } from './kanban/kanban.component';
import { ListComponent } from './kanban/list/list.component';
import { DialogConfirmDeleteComponent } from './kanban/dialog-confirm-delete/dialog-confirm-delete.component';
import { AddNewComponent } from './kanban/add-new/add-new.component'
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DialogConfirmEditComponent } from './kanban/dialog-confirm-edit/dialog-confirm-edit.component';
import { TableTreeComponent } from './table-tree/table-tree.component';

//table-tree
import { FilterSettings, PageService, SortService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { TreeMaterialComponent } from './tree-material/tree-material.component';
import { TableMaterialComponent } from './table-material/table-material.component';
import { TableTreeV2Component } from './table-tree-v2/table-tree-v2.component';
import { TableNestComponent } from './table-nest/table-nest.component';
import { SidebarYoutubeComponent } from './sidebar-youtube/sidebar-youtube.component';
import { CustomSidenavComponent } from './sidebar-youtube/custom-sidenav/custom-sidenav.component';
import { DashboardComponent } from './sidebar-youtube/pages/dashboard/dashboard.component';
import { ContentComponent } from './sidebar-youtube/pages/content/content.component';
import { AnalyticsComponent } from './sidebar-youtube/pages/analytics/analytics.component';
import { CommentsComponent } from './sidebar-youtube/pages/comments/comments.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

registerLocaleData(localeVi, 'vi-VN')


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TodoListComponent,
    TodoListRealComponent,
    ShoppingCartInterfaceComponent,
    ShoppingCartHeaderComponent,
    ShoppingCartSummaryComponent,
    ShoppingCartProductListComponent,
    KanbanComponent,
    ListComponent,
    DialogConfirmDeleteComponent,
    AddNewComponent,
    DialogConfirmEditComponent,
    TableTreeComponent,
    TreeMaterialComponent,
    TableMaterialComponent,
    TableTreeV2Component,
    TableNestComponent,
    SidebarYoutubeComponent,
    CustomSidenavComponent,
    DashboardComponent,
    ContentComponent,
    AnalyticsComponent,
    CommentsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    DragDropModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    TreeGridModule,
    MatTreeModule,
    MatTableModule,
    CdkTreeModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),

    PageService,
    SortService,
    FilterSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
