import React from "react";
import * as S from "./AuthorList.styles.js";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const GenreList = ({ tracks, selectedGenres, setSelectedGenres }) => {
  let genres = tracks
      .map((track) => {
          return { id: track.id, genre: track.genre }
      })
      .filter(
          (value, index, self) =>
              self.findIndex((item) => item.genre === value.genre) === index,
      )

  const clickOnGenre = (genre) => {
      if (selectedGenres.includes(genre)) {
          const genres = selectedGenres.filter((selectedGenre) => {
              return selectedGenre !== genre
          })
          setSelectedGenres(genres) 
      } else {
          setSelectedGenres([...selectedGenres, genre])
      }
  }
  
  return (
      <S.PopupList>
        <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'auto'}}}>
          <S.BlockScroll>
            {genres.map((genre) => {
            return (
              <S.PopupItem key={genre.id}
                $isActive={selectedGenres.includes(genre.genre)}
                onClick={() => {clickOnGenre(genre.genre)}}>{genre.genre}
              </S.PopupItem>
          )})}
          </S.BlockScroll>
        </OverlayScrollbarsComponent>
      </S.PopupList>
  )}