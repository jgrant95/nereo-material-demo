import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { ContextualToolbarModule } from 'nereo-material';

import { AppComponent } from './app.component';
import { ContextualToolbarDemoComponent } from './contextual-toolbar-demo/contextual-toolbar-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextualToolbarDemoComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
