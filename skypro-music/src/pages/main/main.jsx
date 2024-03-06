// import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer.jsx";
// import { NavMenu } from "../../components/NavMenu/NavMenu.jsx";
// import { CenterBlockk } from "../../components/CenterBlockk/CenterBlockk.jsx";
// import { SideBar } from "../../components/SideBar/SideBar.jsx";
// import React from "react";
// import { GlobalStyle } from "../../components/Global.styles/Global.styles.js";
// import * as S from "./main.styles.js";
// // import { useEffect, useState } from 'react';
// // import { getAllTracks } from '../../Api.jsx';

// export const MainPage = ({
//   tracks,
//   isLoading,
//   setIsPlayerVisible,
//   setActiveTrack,
//   loadingTracksError,
// }) => {
//   // const [tracks, setTracks] = useState([]);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [loadingTracksError, setLoadingTracksError] = useState(false);
//   // const [isPlayerVisible, setIsPlayerVisible] = useState(false)

//   // useEffect (() => {
//   //   getAllTracks()
//   //     .then((response) => {
//   //       setTracks(response)
//   //     })
//   //     .catch((error) => {
//   //       setLoadingTracksError(error.message)
//   //     })
//   //     .finally(() => setIsLoading(false))
//   // },[]);

//   return (
//     <>
//       <GlobalStyle />
//       <S.Wrapper>
//         <S.Container>
//           <S.Main>
//             <NavMenu />
//             <CenterBlockk
//               tracks={tracks}
//               isLoading={isLoading}
//               loadingTracksError={loadingTracksError}
//               // isPlayerVisible={isPlayerVisible}
//               setIsPlayerVisible={setIsPlayerVisible}
//               setActiveTrack={setActiveTrack}
//             />
//             <SideBar />
//           </S.Main>
//           {/* <AudioPlayer 
//          /> */}
//           <footer></footer>
//         </S.Container>
//       </S.Wrapper>
//     </>
//   );
// };

import { NavMenu } from '../../components/NavMenu/NavMenu.jsx';
import { SideBar } from '../../components/SideBar/SideBar.jsx';
import { FilterButtons } from '../../components/PopupMenuButtons/PopupMenuButtons.jsx';
import { TrackList } from '../../components/TrackList/TrackList.jsx';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setTracks } from '../../store/slices.jsx';
import { getAllTracks } from '../../Api.jsx';
import React from 'react';

export const MainPage = ({
  isLoading,
  setIsPlayerVisible,
  loadingTracksError,
  setIsLoading,
  setLoadingTracksError,
  playlist,
  setPlaylist,
}) => {
  const tracks = useSelector((state) => state.tracks.tracks)
  const dispatch = useDispatch()

  useEffect(() => {
    setPlaylist && setPlaylist('main')
      getAllTracks()
          .then((tracks) => {
              dispatch(setTracks({ tracks }))
          })
          .then(() => {
            setLoadingTracksError && setLoadingTracksError('')
              setIsLoading(false)
          })
          .catch((error) => {
              console.log(error)
          })
  }, [dispatch, setLoadingTracksError, setIsLoading, setPlaylist])

  return (
      <>
          <GlobalStyle />
          <S.Wrapper>
              <S.Container>
                  <S.Main>
                      {NavMenu({ setIsPlayerVisible })}
                      <S.MainCenterblock>
                          <S.CenterblockSearch>
                              <S.SearchSvg>
                                  <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                              </S.SearchSvg>
                              <S.SearchText
                                  type="search"
                                  placeholder="Поиск"
                                  name="search"
                              />
                          </S.CenterblockSearch>
                          <S.CenterblockHeading>Треки</S.CenterblockHeading>
                          {FilterButtons({
                              tracks,
                              
                          })}
                          <S.CenterblockContent>
                              <S.ContentTitle>
                                  <S.PlaylistTitleTrack>
                                      Трек
                                  </S.PlaylistTitleTrack>
                                  <S.PlaylistTitleAuthor>
                                      ИСПОЛНИТЕЛЬ
                                  </S.PlaylistTitleAuthor>
                                  <S.PlaylistTitleAlbum>
                                      АЛЬБОМ
                                  </S.PlaylistTitleAlbum>
                                  <S.PlaylistTitleImage>
                                      <S.PlaylistTitleSvg alt="time">
                                          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                                      </S.PlaylistTitleSvg>
                                  </S.PlaylistTitleImage>
                              </S.ContentTitle>
                              {TrackList({
                                  isLoading,
                                  setIsPlayerVisible,
                                  loadingTracksError,
                                  setIsLoading,
                                  setLoadingTracksError,
                                  playlist,
                                  
                                  tracks,
                                  
                              })}
                          </S.CenterblockContent>
                      </S.MainCenterblock>
                      {SideBar({ isLoading, setIsPlayerVisible })}
                  </S.Main>
              </S.Container>
          </S.Wrapper>
      </>
  )
}