import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject, Observable } from 'rxjs'
import { MessagePayload } from './notification-interfaces';

@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(
    private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        console.log('data _messaging: ', _messaging);
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   */
  requestPermission() {
    console.log('pre entre request')
    return new Promise(async (resolve, reject) => {
      console.log('enter request')
      this.angularFireMessaging.requestToken.subscribe(
        (token) => {
          console.log('data token is', token)
          resolve(token);
        },
        (err) => {
          console.error('Unable to get permission to notify.', err);
          reject(new Error('Unable to get permission to notify.'))
        }
      );
    })
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    return this.angularFireMessaging.messages;
    // return new Observable<MessagePayload>(observe => {
    //   this.angularFireMessaging.messages.subscribe( payload => {
    //       // console.log("new message received. ", payload);
    //       // this.currentMessage.next(payload);
    //       // observe.next(payload);
    //     })
    // })
  }
}
