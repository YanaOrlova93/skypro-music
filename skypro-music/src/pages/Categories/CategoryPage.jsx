import * as S from './CategoryPage.styles.js';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import { useParams } from 'react-router-dom';
import { Categories } from '../../constant.jsx';
import { NavMenu } from '../../components/NavMenu/NavMenu.jsx';
import { TrackList } from '../../components/TrackList/TrackList.jsx';
import { SideBar } from '../../components/SideBar/SideBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPlaylist } from '../../Api.jsx';
import { setCategoryId, setTracks } from '../../store/slices.jsx';
import React from 'react';

export const CategoryPage = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
    playlist,
    setPlaylist,
}) => {
    const params = useParams()
    const category = Categories.find(
        (category) => category.id === Number(params.id),
    )
    const categoryId = category.id

    const title = `${category.title}`
    const dispatch = useDispatch()
    const tracks = useSelector((state) => state.tracks.tracks)

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        setPlaylist('category')
        dispatch(setCategoryId({ categoryId }))
        getPlaylist(categoryId)
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
    }, [setLoadingTracksError, dispatch, setIsLoading, categoryId, setPlaylist])

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
                                    <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
                                </S.SearchSvg>
                                <S.SearchText
                                    type="search"
                                    placeholder="Поиск"
                                    name="search"
                                    onChange={(event) =>
                                        setSearchText(event.target.value)
                                    }
                                />
                            </S.CenterblockSearch>
                            <S.CenterblockHeading>{title}</S.CenterblockHeading>
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
                                            <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
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
                                    categoryId,
                                    searchText,
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