import { useState } from "react";
import { AuthorList } from "../PopupMenuList/AuthorList.jsx";
import { YearList } from "../PopupMenuList/YearList.jsx";
import { GenreList } from "../PopupMenuList/GenreList.jsx";
import React from "react";
import * as S from "./PopupMenuButtons.styles.js";

export const FilterButtons = () => {
  const [filterActive, setFilterActive] = useState(null);
  const toggleFilter = (nameFilter) => {
    if (filterActive === nameFilter) {
      setFilterActive(null);
      return;
    }
    setFilterActive(nameFilter);
  };
  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterContent className="filter__content">
        <S.FilterButton
        isActive={filterActive === "author"}
        onClick={() => toggleFilter("author")}
        //   className={`filter__button button-author _btn-text ${
        //     filterActive === "author" ? "active-filter-button" : ""
        //   }`}
        //   onClick={() => toggleFilter("author")}
        >
          исполнителю
        </S.FilterButton>
        {filterActive === "author" && <AuthorList />}
      </S.FilterContent>
      <S.FilterContent className="filter__content">
        <S.FilterButton
        isActive={filterActive === "year"}
        onClick={() => toggleFilter("year")}
        //   className={`filter__button button-year _btn-text ${
        //     filterActive === "year" ? "active-filter-button" : ""
        //   }`}
        //   onClick={() => toggleFilter("year")}
        >
          году выпуска
        </S.FilterButton>
        {filterActive === "year" && <YearList />}
      </S.FilterContent>
      <S.FilterContent className="filter__content">
        <S.FilterButton
        isActive={filterActive === "genre"}
        onClick={() => toggleFilter("genre")}
        //   className={`filter__button button-genre _btn-text ${
        //     filterActive === "genre" ? "active-filter-button" : ""
        //   }`}
        //   onClick={() => toggleFilter("genre")}
        >
          жанру
        </S.FilterButton>
        {filterActive === "genre" && <GenreList />}
      </S.FilterContent>
    </S.CenterblockFilter>
  );
};
