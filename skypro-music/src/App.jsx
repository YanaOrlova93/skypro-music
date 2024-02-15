

import React from 'react';
import { GlobalStyle } from './components/Global.styles/Global.styles.js';
import * as S from './App.styles.js';
import { AppRoutes } from './routes.jsx'


import { useEffect, useState } from 'react';
import { getAllTracks } from './Api.jsx';
import {AudioPlayer} from './components/AudioPlayer/AudioPlayer';




export const App = () => {


const [tracks, setTracks] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [isPlayerVisible, setIsPlayerVisible] = useState(false)
  const [loadingTracksError, setLoadingTracksError] = useState(false);
  const [activeTrack, setActiveTrack] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false)

  useEffect (() => {
    setIsLoading(true)
    getAllTracks()
      .then((response) => {
        setTracks(response)
        setIsLoading(false)
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
        <AppRoutes 
          user={localStorage.getItem('user')}
          tracks={tracks}
          setTracks={setTracks}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isPlayerVisible={isPlayerVisible}
          setIsPlayerVisible={setIsPlayerVisible}
          loadingTracksError={loadingTracksError}
          setActiveTrack={setActiveTrack}
        />
        {AudioPlayer({ isPlayerVisible, isLoading, activeTrack,})}
      </S.Container>
    </S.Wrapper>
    </>
  );
}

