import React from "react";
import * as S from "./AuthorList.styles.js";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const YearList = () => {
  return (
    <S.PopupList>
      <OverlayScrollbarsComponent>
        <S.BlockScroll>
          <S.PopupItem>1991</S.PopupItem>
          <S.PopupItem>1992</S.PopupItem>
          <S.PopupItem>1993</S.PopupItem>
          <S.PopupItem>1994</S.PopupItem>
          <S.PopupItem>1995</S.PopupItem>
          <S.PopupItem>1996</S.PopupItem>
        </S.BlockScroll>
      </OverlayScrollbarsComponent>
    </S.PopupList>
  );
};
