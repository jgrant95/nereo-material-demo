import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatTableModule, MatCheckboxModule, MatCardModule, MatSlideToggleModule, MatListModule } from '@angular/material';
import { ContextualToolbarModule, BannerModule, BackdropModule } from 'nereo-material';

import { AppComponent } from './app.component';
import { ContextualToolbarDemoComponent } from './contextual-toolbar-demo/contextual-toolbar-demo.component';
import { HomeComponent } from './home/home.component';
import { BannerDemoComponent } from './banner-demo/banner-demo.component';
import { BackdropDemoComponent } from './backdrop-demo/backdrop-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextualToolbarDemoComponent,
    HomeComponent,
    BannerDemoComponent,
    BackdropDemoComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ContextualToolbarModule,
    BannerModule,
    BackdropModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contextual-toolbar',
        component: ContextualToolbarDemoComponent
      },
      {
        path: 'banner',
        component: BannerDemoComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
