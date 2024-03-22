import React from "react";
import * as S from "./AuthorList.styles.js";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const AuthorList = ({ tracks, selectedAuthors, setSelectedAuthors }) => {
  let authors = tracks
      .map((track) => {
          return { id: track.id, author: track.author }
      })
      .filter(
          (value, index, self) =>
              self.findIndex((item) => item.author === value.author) ===
              index,
      )

  const clickOnAuthor = (author) => {
      if (selectedAuthors.includes(author)) {
          const authors = selectedAuthors.filter((selectedAuthor) => {
              return selectedAuthor !== author 
              
          })

          setSelectedAuthors(authors)
      } else {
          setSelectedAuthors([...selectedAuthors, author])
      }
  }

  return (
      <S.PopupList>
          <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'auto' } }}>
            <S.BlockScroll>
          {authors.map((author) => {
              return (
          <S.PopupItem key={author.id}
                      onClick={() => {
                          clickOnAuthor(author.author)
                      }}
                      $isActive={selectedAuthors.includes(author.author)}>{author.author}
          </S.PopupItem>
           )})}
          </S.BlockScroll>
        </OverlayScrollbarsComponent>
      </S.PopupList>
  )}    