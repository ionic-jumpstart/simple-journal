import { Injectable, Inject } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

import { AppConfigToken, IAppConfig, AppConfig } from './app-config'

@Injectable()
export class UserData {

  constructor(
    @Inject(AppConfigToken) 
    private config  : IAppConfig,
    private events  : Events,
    private storage : Storage
  ) {
  }

  /**
   * Gets current authenticated user token, null if user is not authenticated yet
   * @returns Token of the authenticated user if any, otherwise null
   */
  public getToken() : Observable<string> {
    // Get the token from Storage
    let promise = this.storage.get(this.config.StorageKeys.UserData).then((user) => {
      // Check whether the token is exists
      if (user && user.token) {
        // TODO: validate token from firebase
        return Promise.resolve(user.token);
      }
      else {
        // Token is not exists, user have to reauthenticate
        return Promise.resolve(null);
      }
    }).catch((err) => {
      // TODO: Report the error to firebase
      console.error(err);

      // Return as null indicate user have to reauthenticate
      return Promise.resolve(null);
    });

    // Return as Observable
    return Observable.fromPromise(promise);
  }

  /**
   * Authenticate user with provided username and password.
   * @param email     Email to authenticate
   * @param password  Password to authenticate
   * @returns Authenticated Data if login succeed as Observable object, otherwise error message as Observable object
   */
  public authenticate(email : string, password : string) : Observable<any> {
    // Mock the authentication 
    if (email == email && password == password) {
      // Retrieve the user information
      let data = {
        token : 'abc123',
        email : email,
        name  : 'John Doe',
        phone : '+62 1111 3333 452',
        registerDate : 'November, 2010'
      };

      // Keep the user data inside storage
      this.storage.set(this.config.StorageKeys.UserData, data);

      // Publish event that user has been authenticated successfully
      this.events.publish('user:login', data);

      // Return login information as observable
      return Observable.of(data);
    }
    else {
      // Return an error if authentication failed
      return Observable.throw('Invalid email / password');
    }
  }

  /**
   * Get the profile info of current authenticated user.
   */
  public getProfileInfo() {
    // TODO: What todo? get the data from firebase or lookup from storage?

    // For now, return from storage and mock the rest of data
    let promise = this.storage.get(this.config.StorageKeys.UserData).then((data) => {
      if (data) {
        // TODO: Request the profile statistic and sns
        data.statistic = {
          storyCount : 100,
          photoCount : 80
        };

        data.sns = {
          facebook : {
            uid  : 'facebook123',
            name : 'John Doe'
          },
          twitter  : null
        }

        return Promise.resolve(data);
      }
      else {
        return Promise.resolve(null);
      }
    });

    return Observable.fromPromise(promise);
  }

  /**
   * Logout current authenticated user.
   */
  public logout() : Observable<any> {
    // TODO: Send logout request to the server then remove the user data from storage

    // Remove the user data from the storage
    let promise = this.storage.remove(this.config.StorageKeys.UserData);

    // Publish event that user has been logged out successfully
    this.events.publish('user:logout');

    // Return the operation as Observable
    return Observable.fromPromise(promise);
  }

}
