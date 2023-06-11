import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterLinkWithHref, RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule
  ],
  exports: [
    NavBarComponent]
})
export class CoreModule {
}
