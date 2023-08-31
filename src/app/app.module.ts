import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HighlightTaskDirective } from './directives/highlight-task.directive';
import { DisableDoneButtonDirective } from './directives/disable-done-button.directive';
import { TaskFilterPipe } from './task-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    TaskListComponent,
    AddTaskComponent,
    HighlightTaskDirective,
    DisableDoneButtonDirective,
    TaskFilterPipe,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
