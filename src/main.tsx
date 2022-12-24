import { PublicClientApplication } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { msalConfig } from './authConfig';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './styles.css';

const pca = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    {/* <MsalProvider instance={pca}>
      <MsalWrapper> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </MsalWrapper>
    </MsalProvider> */}
  </React.StrictMode>
);

function MsalWrapper(props: PropsWithChildren) {
  const { instance, accounts, inProgress } = useMsal();

  if (accounts.length > 0) {
    return <>{props.children}</>;
  } else if (inProgress === 'login') {
    return <div>Login em processo...</div>;
  } else {
    instance.loginRedirect();
    return <div></div>;
  }
}
