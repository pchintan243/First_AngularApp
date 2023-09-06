import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { BadgeComponent } from './badge/badge.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { FindComponent } from './find/find.component';
import { FilterComponent } from './filter/filter.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormComponent } from './form/form.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleSearchComponent } from './lifecycle-search/lifecycle-search.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { HostbindingDirective } from './CustomDirective/hostbinding.directive';
import { ClassDirective } from './CustomDirective/class.directive';
import { CardHighlightDirective } from './CustomDirective/card-highlight.directive';
import { CardHighlightComponent } from './card-highlight/card-highlight.component';
import { CustomStyleDirective } from './CustomDirective/custom-style.directive';
import { NgIfDirective } from './CustomDirective/ng-if.directive';
import { CustStructComponent } from './cust-struct/cust-struct.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceTwoComponent } from './service-two/service-two.component';
import { OneService } from './Services/one.service';
import { UserComponent } from './user/user.component';
import { UserService } from './Services/user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { AnotherService } from './Services/another.service';
import { UserDataComponent } from './user-data/user-data.component';
import { DataService } from './Services/data.service';
import { UserShowComponent } from './user-show/user-show.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    SearchComponent,
    BadgeComponent,
    ProductComponent,
    CourseComponent,
    HeaderComponent,
    FindComponent,
    FilterComponent,
    DemoComponent,
    CustomerListComponent,
    FormComponent,
    EncapsulationComponent,
    NgContentComponent,
    LifecycleComponent,
    LifecycleSearchComponent,
    ContentChildComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    HostbindingDirective,
    ClassDirective,
    CardHighlightDirective,
    CardHighlightComponent,
    CustomStyleDirective,
    NgIfDirective,
    CustStructComponent,
    NgSwitchComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    UserComponent,
    AddUserComponent,
    UserDataComponent,
    UserShowComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [OneService, UserService, AnotherService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
