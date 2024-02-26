import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer.jsx";
import { NavMen } from "../../components/NavMen/NavMen.jsx";
import { CenterBlockk } from "../../components/CenterBlockk/CenterBlockk.jsx";
import { SideBar } from "../../components/SideBar/SideBar.jsx";
import React from "react";
import { GlobalStyle } from "../../components/Global.styles/Global.styles.js";
import * as S from "./main.styles.js";
// import { useEffect, useState } from 'react';
// import { getAllTracks } from '../../Api.jsx';

export const MainPage = ({
  tracks,
  isLoading,
  setIsPlayerVisible,
  setActiveTrack,
  loadingTracksError,
}) => {
  // const [tracks, setTracks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [loadingTracksError, setLoadingTracksError] = useState(false);
  // const [isPlayerVisible, setIsPlayerVisible] = useState(false)

  // useEffect (() => {
  //   getAllTracks()
  //     .then((response) => {
  //       setTracks(response)
  //     })
  //     .catch((error) => {
  //       setLoadingTracksError(error.message)
  //     })
  //     .finally(() => setIsLoading(false))
  // },[]);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMen />
            <CenterBlockk
              tracks={tracks}
              isLoading={isLoading}
              loadingTracksError={loadingTracksError}
              // isPlayerVisible={isPlayerVisible}
              setIsPlayerVisible={setIsPlayerVisible}
              setActiveTrack={setActiveTrack}
            />
            <SideBar />
          </S.Main>
          {/* <AudioPlayer 
         /> */}
          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
