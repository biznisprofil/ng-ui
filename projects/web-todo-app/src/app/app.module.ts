import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PrimaryButtonModule } from 'projects/primary-button/src/lib/primary-button.module';
import { ReactComponentWrapperComponent } from 'projects/react-components/counter-component/ReactComponentWrapper';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ReactComponentWrapperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrimaryButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
