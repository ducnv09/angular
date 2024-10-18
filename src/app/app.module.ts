import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { ClassBindingComponent } from './class-binding/class-binding.component';
import { ProgressBarComponent } from './input-binding/progress-bar/progress-bar.component';
import { AuthorDetailComponent } from './output-binding/author/author-detail/author-detail.component';
import { AuthorListComponent } from './output-binding/author/author-list/author-list.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ToggleComponent } from './two-way-binding/toggle/toggle.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ToggleV1Component } from './view-child/toggle-v1/toggle-v1.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexComponent } from './typescript/flex.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ToggleV2Component } from './content-projection/toggle-v2/toggle-v2.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { TabGroupComponent } from './tabs/tab-group/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group/tab-bs-group.component';
import { NgRouterComponent } from './ng-router/ng-router.component';
import { HomeComponent } from './ng-router/home/home.component';
import { ChildHomeComponent } from './ng-router/home/child-home/child-home.component';
import { ArticleDetailComponent } from './ng-router/article-detail/article-detail.component';
import { RouterFeatureModuleComponent } from './router-feature-module/router-feature-module.component';
import { FeatureArticleModule } from './router-feature-module/feature-article.module';
import { RouterLazyLoadingComponent } from './router-lazy-loading/router-lazy-loading.component';
import { LazyHomeComponent } from './router-lazy-loading/lazy-home/lazy-home.component';
import { LazyArticleModule } from './router-lazy-loading/lazy-article/lazy-article.module';
import { RouterGuardComponent } from './router-guard/router-guard.component';
import { GuardHomeComponent } from './router-guard/guard-home/guard-home.component';
import { GuardArticleModule } from './router-guard/guard-article/guard-article.module';
import { FormComponent } from './form/form.component';
import { SignInComponent } from './form/sign-in/sign-in.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SignInRfComponent } from './form/sign-in-rf/sign-in-rf.component';
import { RegisterComponent } from './form/register/register.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { CounterComponent } from './content-child/counter/counter.component';
import { TabContentDirective } from './tabs/tab-panel/tab-content.directive';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { FormatAddressPipe } from './angular-pipe/format-pipe.pipe';
import { AdultPipe } from './angular-pipe/adult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ClassBindingComponent,
    ProgressBarComponent,
    AuthorDetailComponent,
    AuthorListComponent,
    TwoWayBindingComponent,
    ToggleComponent,
    ViewChildComponent,
    ToggleV1Component,
    FlexComponent,
    ContentProjectionComponent,
    ToggleV2Component,
    NgTemplateComponent,
    TabsComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponent,
    NgRouterComponent,
    HomeComponent,
    ChildHomeComponent,
    ArticleDetailComponent,
    RouterFeatureModuleComponent,
    RouterLazyLoadingComponent,
    LazyHomeComponent,
    RouterGuardComponent,
    GuardHomeComponent,
    FormComponent,
    SignInComponent,
    SignInRfComponent,
    RegisterComponent,
    ContentChildComponent,
    CounterComponent,
    TabContentDirective,
    AngularPipeComponent,
    FormatAddressPipe,
    AdultPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    FeatureArticleModule,
    // LazyArticleModule,
    GuardArticleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
