import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ToggleThemeComponent } from './shared/components/toggle-theme/toggle-theme.component';
import { IconGalleryModule } from './features/icon-gallery/icon-gallery.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    SidebarComponent,
    ToggleThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconGalleryModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
