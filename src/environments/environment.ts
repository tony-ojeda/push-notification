// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * copy and paste your firebase config in firebase console
 * Authentication > Web Setub
 */
export const environment = {
  production: false,
  configFirebase: {
    apiKey: "AIzaSyD6aUX-aNBUhl-QWSnFMqp3ckP0Z68lkkY",
    authDomain: "portal-cliente-34efc.firebaseapp.com",
    projectId: "portal-cliente-34efc",
    storageBucket: "portal-cliente-34efc.appspot.com",
    messagingSenderId: "919149134268",
    databaseURL: "https://portal-cliente-34efc.firebaseio.com",
    appId: "1:919149134268:web:a853e7a01a99e015236bb9",
    measurementId: "G-4NGWB80SZ3"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
