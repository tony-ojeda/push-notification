import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoconsultationComponent } from './videoconsultation/videoconsultation.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'videoconsultation/:linksala', component: VideoconsultationComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: '',
    redirectTo: 'videoconsultation/:linksala',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/