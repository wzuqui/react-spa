import {
  Configuration,
  LogLevel
} from '@azure/msal-browser';

// prettier-ignore
export const msalConfig: Configuration = {
  auth: {
    clientId: 'df4c545f-1cd6-43d6-857b-2598c0dbaeca',
    authority: 'https://login.microsoftonline.com/organizations',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ['User.Read'],
};

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
  graphPhotoEndpoint:
    'https://graph.microsoft.com/v1.0/me/photos/48x48/$value',
};
