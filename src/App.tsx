import { styled } from '@stitches/react';

import { View } from './components/View';
import { Header } from './layouts/Header';
import { Main } from './layouts/Main';
import { Routes } from './routes';

export function App() {
  return (
    <View
      column
      full
    >
      <Header />
      <Main
        column
        full
        style={{ overflow: 'hidden' }}
      >
        <MainContent>
          <Routes />
        </MainContent>
      </Main>
      <Footer>{APP_VERSION}</Footer>
    </View>
  );
}

const MainContent = styled('div', {
  height: '100%',
  position: 'relative',
  width: '100%',
});

const Footer = styled('footer', {
  bottom: 0,
  fontSize: 12,
  position: 'fixed',
  right: 0,
});
