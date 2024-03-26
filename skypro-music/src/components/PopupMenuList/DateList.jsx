import React from "react";
import * as S from "./AuthorList.styles.js";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const DateList = ({ selectedSort, setSelectedSort }) => {

  const defaultTracks = 'По умолчанию'
  const descTracks = 'Сначала новые'
  const ascTracks = 'Сначала старые'

  return (
      <S.PopupList>
      <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'auto' }}}>
          <S.BlockScroll>
          <S.PopupItem $isActive={selectedSort.includes(defaultTracks)}
              onClick={() => {
              setSelectedSort(defaultTracks)}}>{defaultTracks}
          </S.PopupItem>
          <S.PopupItem $isActive={selectedSort.includes(ascTracks)}
              onClick={() => {
              setSelectedSort(ascTracks)}}>{ascTracks}
          </S.PopupItem>
          <S.PopupItem $isActive={selectedSort.includes(descTracks)}
              onClick={() => {
              setSelectedSort(descTracks)}}>{descTracks}
          </S.PopupItem>
          </S.BlockScroll>
      </OverlayScrollbarsComponent>
      </S.PopupList>
  )
}