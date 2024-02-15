import  {AudioPlayer}  from '../../components/AudioPlayer/AudioPlayer.jsx';
import {NavMen} from '../../components/NavMen/NavMen.jsx';
import {CenterBlockk} from '../../components/CenterBlockk/CenterBlockk.jsx';
import {SideBarr} from '../../components/SideBarr/SideBarr.jsx';
import React from 'react';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js';
import { useEffect, useState } from 'react';
import { getAllTracks } from '../../Api.jsx';

export const MainPage = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTracksError, setLoadingTracksError] = useState(false);

  useEffect (() => {
    getAllTracks()
      .then((response) => {
        setTracks(response)
      })
      .catch((error) => {
        setLoadingTracksError(error.message)
      })
      .finally(() => setIsLoading(false))
  },[]);

  return (
  <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Main>
       <NavMen/>
          <CenterBlockk
          tracks={tracks}
          isLoading={isLoading}
          loadingTracksError={loadingTracksError}
           />
          <SideBarr />
        </S.Main>
        <AudioPlayer />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
  );
}
