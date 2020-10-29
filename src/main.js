import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//import Amplify, * as AmplifyModules from 'aws-amplify'
//import { AmplifyPlugin } from 'aws-amplify-vue'

import "@aws-amplify/ui-vue";
import Amplify from "@aws-amplify/core";
import API from "@aws-amplify/api";
import { Auth } from "@aws-amplify/auth";
import awsconfig from "./aws-exports";
import vuetify from "@/plugins/vuetify";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

API.configure(awsconfig);

API.configure({
  API: {
    endpoints: [
      {
        name: "MiaB_1",
        endpoint: "https://ck03afn91l.execute-api.us-east-1.amazonaws.com/test",
        region: "us-east-1",
      },
    ],
  },
});

//Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

/* Custom configuration of AWS resources can be done here.
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

        // REQUIRED - Amazon Cognito Region
        region: 'XX-XXXX-X',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'XX-XXXX-X',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'XX-XXXX-X_abcd1234',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
            sameSite: "strict" | "lax",
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            secure: true
        },

        // OPTIONAL - customized storage object
        storage: MyStorage,

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        clientMetadata: { myCustomKey: 'myCustomValue' },

         // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'your_cognito_domain',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});

// You can get the current config object
const currentConfig = Auth.configure();
*/
