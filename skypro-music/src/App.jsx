import { AudioPlayer } from './components/AudioPlayer/AudioPlayer.jsx';
import {NavMenu} from './components/NavMenu/NavMenu.jsx';
import {CenterBlock} from './components/CenterBlock/CenterBlock.jsx';
import {SideBar} from './components/SideBar/SideBar.jsx';
import React from 'react';
import { GlobalStyle } from './components/Global.styles/Global.styles.js'
import * as S from './App.styles.js'

export const App = () => {
  return (
  <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Main>
       <NavMenu />
          <CenterBlock />
          <SideBar />
        </S.Main>
        <AudioPlayer />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
  );
}
