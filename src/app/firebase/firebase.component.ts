import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../shared/messaging.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  message;

  constructor(private messagingService: MessagingService) {
    messagingService.requestPermission().then(token => {
      console.log('token firebase: ', token);
    })
   }

  ngOnInit() {

    this.messagingService.receiveMessage().subscribe(payload => {
      console.log('Message firebase: ', payload)
    })
    // this.message = this.messagingService.currentMessage
    // console.log('data firebase is: ', this.message)
  }
}
