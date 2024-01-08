import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    SearchboxComponent,
    NavbarComponent,
    CarouselComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    SearchboxComponent,
    NavbarComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
