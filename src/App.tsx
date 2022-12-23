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
        style={{ overflow: 'hidden' }}
        full
      >
        <MainContent>
          <Routes />
        </MainContent>
      </Main>
    </View>
  );
}

const MainContent = styled('div', {
  height: '100%',
  position: 'relative',
  width: '100%',
});
