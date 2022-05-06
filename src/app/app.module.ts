import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { MessagingService } from './shared/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { FirebaseComponent } from './firebase/firebase.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideoconsultationComponent } from './videoconsultation/videoconsultation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    PageNotFoundComponent,
    VideoconsultationComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.configFirebase),
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
