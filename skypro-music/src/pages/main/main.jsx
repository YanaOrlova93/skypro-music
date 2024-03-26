
import { NavMenu } from '../../components/NavMenu/NavMenu.jsx';
import { SideBar } from '../../components/SideBar/SideBar.jsx';
import { FilterButtons } from '../../components/PopupMenuButtons/PopupMenuButtons.jsx';
import { TrackList } from '../../components/TrackList/TrackList.jsx';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setTracks } from '../../store/slices.jsx';
import { getAllTracks } from '../../Api.jsx';
import React from 'react';


export const MainPage = ({ isLoading, setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
    playlist,
    setPlaylist}) => {
  
      const tracks = useSelector((state) => state.tracks.tracks)
      const dispatch = useDispatch()
    
      const [searchText, setSearchText] = useState('')
      const [selectedAuthors, setSelectedAuthors] = useState([])
      const [selectedGenres, setSelectedGenres] = useState([])
      const [selectedSort, setSelectedSort] = useState('По умолчанию')
      
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
                                    onChange={(event) => setSearchText(event.target.value)}
                                />
                            </S.CenterblockSearch>
                            <S.CenterblockHeading>Треки</S.CenterblockHeading>
                            {FilterButtons({
                                tracks,
                                selectedAuthors,
                                  setSelectedAuthors,
                                  selectedGenres,
                                  setSelectedGenres,
                                  selectedSort,
                                  setSelectedSort,
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
                                    searchText,
                                    selectedAuthors,
                                    selectedGenres,
                                    selectedSort,
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