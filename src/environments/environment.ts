// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  amplify: {
    Auth: {
      // REQUIRED - Amazon Cognito Region
      region: 'eu-west-1',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'eu-west-1_ML6tTDRhl',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '4h7q47a5i3leiihna1gdk0s22s',

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      // mandatorySignIn: false,

      // OPTIONAL - Configuration for cookie storage
      // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
      // cookieStorage: {
      //   // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      //   domain: '.yourdomain.com',
      //   // OPTIONAL - Cookie path
      //   path: '/',
      //   // OPTIONAL - Cookie expiration in days
      //   expires: 365,
      //   // OPTIONAL - Cookie secure flag
      //   // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      //   secure: true
      // },

      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
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
