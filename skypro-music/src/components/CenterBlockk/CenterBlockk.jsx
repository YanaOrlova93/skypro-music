
import React from 'react';
import { FilterButtons } from '../PopupMenuButtons/PopupMenuButtons.jsx';
import * as S from './CenterBlockk.styles.js';
import { TrackList } from '../TrackList/TrackList.jsx';




export const CenterBlockk = ( tracks, isLoading, setIsPlayerVisible, loadingTracksError, setActiveTrack,) => {
    return (
<S.MainCenterBlock>
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
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterButtons />
            <S.CenterblockContent>
              <S.ContentTitle className="playlist-title">
                <S.PlayListTitleCol1>Трек</S.PlayListTitleCol1>
                <S.PlayListTitleCol2>ИСПОЛНИТЕЛЬ</S.PlayListTitleCol2>
                <S.PlayListTitleCol3>АЛЬБОМ</S.PlayListTitleCol3>
                <S.PlayListTitleCol4>
                  <S.PlayListTitleSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </S.PlayListTitleSvg>
                </S.PlayListTitleCol4>
              </S.ContentTitle>
              {TrackList(
                    tracks,
                    isLoading,
                    setIsPlayerVisible,
                    loadingTracksError,
                    setActiveTrack,
  
                )}
            </S.CenterblockContent>
          </S.MainCenterBlock>
    )
}