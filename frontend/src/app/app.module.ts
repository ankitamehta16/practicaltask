import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VisitorsComponent } from './visitors/visitors.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DeleteVisitorComponent } from './delete-visitor/delete-visitor.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
                                                        
@NgModule({
  declarations: [
    AppComponent,
    VisitorsComponent,
    AddVisitorComponent,
    DeleteVisitorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
