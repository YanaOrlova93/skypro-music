import { useState } from "react";
import { AuthorList } from "../PopupMenuList/AuthorList.jsx";
import { YearList } from "../PopupMenuList/YearList.jsx";
import { GenreList } from "../PopupMenuList/GenreList.jsx";
import React from "react";
import * as S from "./PopupMenuButtons.styles.js";

// export const FilterButtons = () => {
//   const [filterActive, setFilterActive] = useState(null);
//   const toggleFilter = (nameFilter) => {
//     if (filterActive === nameFilter) {
//       setFilterActive(null);
//       return;
//     }
//     setFilterActive(nameFilter);
//   };
//   return (
//     <S.CenterblockFilter>
//       <S.FilterTitle>Искать по:</S.FilterTitle>
//       <S.FilterContent className="filter__content">
//         <S.FilterButton
//         $isActive={filterActive === "author"}
//         onClick={() => toggleFilter("author")}
//         //   className={`filter__button button-author _btn-text ${
//         //     filterActive === "author" ? "active-filter-button" : ""
//         //   }`}
//         //   onClick={() => toggleFilter("author")}
//         >
//           исполнителю
//         </S.FilterButton>
//         {filterActive === "author" && <AuthorList />}
//       </S.FilterContent>
//       <S.FilterContent className="filter__content">
//         <S.FilterButton
//         $isActive={filterActive === "year"}
//         onClick={() => toggleFilter("year")}
//         //   className={`filter__button button-year _btn-text ${
//         //     filterActive === "year" ? "active-filter-button" : ""
//         //   }`}
//         //   onClick={() => toggleFilter("year")}
//         >
//           году выпуска
//         </S.FilterButton>
//         {filterActive === "year" && <YearList />}
//       </S.FilterContent>
//       <S.FilterContent className="filter__content">
//         <S.FilterButton
//         $isActive={filterActive === "genre"}
//         onClick={() => toggleFilter("genre")}
//         //   className={`filter__button button-genre _btn-text ${
//         //     filterActive === "genre" ? "active-filter-button" : ""
//         //   }`}
//         //   onClick={() => toggleFilter("genre")}
//         >
//           жанру
//         </S.FilterButton>
//         {filterActive === "genre" && <GenreList />}
//       </S.FilterContent>
//     </S.CenterblockFilter>
//   );
// };
export const FilterButtons = () => {
  const [activeAuthor, setActiveAuthor] = useState(false)
  const [activeYear, setActiveYear] = useState(false)
  const [activeGenre, setActiveGenre] = useState(false)

  const [visibleAuthor, setVisibleAuthor] = useState(false)
  const [visibleYear, setVisibleYear] = useState(false)
  const [visibleGenre, setVisibleGenre] = useState(false)

  const clickOnAuthorFilter = () => {
      setActiveAuthor(!activeAuthor)
      setActiveYear(false)
      setActiveGenre(false)

      setVisibleAuthor(!visibleAuthor)
      setVisibleYear(false)
      setVisibleGenre(false)
  }
  const clickOnYearFilter = () => {
      setActiveAuthor(false)
      setActiveYear(!activeYear)
      setActiveGenre(false)

      setVisibleYear(!visibleYear)
      setVisibleAuthor(false)
      setVisibleGenre(false)
  }
  const clickOnGenreFilter = () => {
      setActiveAuthor(false)
      setActiveYear(false)
      setActiveGenre(!activeGenre)

      setVisibleGenre(!visibleGenre)
      setVisibleAuthor(false)
      setVisibleYear(false)
  }

  return (
      <S.CenterblockFilter>
           <S.FilterTitle>Искать по:</S.FilterTitle>
           <S.FilterContent className="filter__content">
              <S.FilterButton
                  $isActive={activeAuthor}
                  onClick={clickOnAuthorFilter}
              >
                  исполнителю
              </S.FilterButton>
              {visibleAuthor && <AuthorList />}
          </S.FilterContent>
          <S.FilterContent className="filter__content">
              <S.FilterButton
                  $isActive={activeYear}
                  onClick={clickOnYearFilter}
              >
                  году выпуска
              </S.FilterButton>
              {visibleYear && <YearList />}
          </S.FilterContent>
          <S.FilterContent className="filter__content">
              <S.FilterButton
                 $isActive={activeGenre}
                  onClick={clickOnGenreFilter}
              >
                  жанру
              </S.FilterButton>
              {visibleGenre && <GenreList />}
          </S.FilterContent>
      </S.CenterblockFilter>
  )
}