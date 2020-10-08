// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url: 'http://localhost:5000'
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoiZ2Etc2ltdXRlY2giLCJhIjoiY2tia2ppb3F3MHpnaTJybHNneW93ZTV2NyJ9.ScyeFQiAHmpFVHsG1CX3ug',
    style: 'mapbox://styles/ga-simutech/ckbkk30st0nyq1inwbj2pjsj7'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
