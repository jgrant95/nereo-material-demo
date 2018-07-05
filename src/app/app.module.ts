import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatTableModule, MatCheckboxModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import { ContextualToolbarModule } from 'nereo-material';

import { AppComponent } from './app.component';
import { ContextualToolbarDemoComponent } from './contextual-toolbar-demo/contextual-toolbar-demo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextualToolbarDemoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContextualToolbarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatSlideToggleModule,
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
