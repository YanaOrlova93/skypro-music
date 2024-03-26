import { useState } from 'react';
import { AuthorList } from '../PopupMenuList/AuthorList.jsx';
import { DateList } from '../PopupMenuList/DateList.jsx';
import { GenreList } from '../PopupMenuList/GenreList.jsx';
import React from 'react';
import * as S from './PopupMenuButtons.styles.js';

export const FilterButtons = ({ selectedAuthors, tracks, setSelectedAuthors, selectedGenres, setSelectedGenres, selectedSort, setSelectedSort}) => {

    const [isActiveAuthorButton, setIsActiveAuthorButton] = useState(false)
    const [isActiveDateButton, setIsActiveDateButton] = useState(false)
    const [isActiveGenreButton, setIsActiveGenreButton] = useState(false)

    const [activeAuthor, setActiveAuthor] = useState(false)
    const [activeDate, setActiveDate] = useState(false)
    const [activeGenre, setActiveGenre] = useState(false)

    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleDate, setVisibleDate] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)

    const clickOnAuthorFilter = () => {
        setIsActiveAuthorButton(!isActiveAuthorButton)
        setIsActiveDateButton(false)
        setIsActiveGenreButton(false)

        setActiveAuthor(!activeAuthor)
        setActiveDate(false)
        setActiveGenre(false)

        setVisibleAuthor(!visibleAuthor)
        setVisibleDate(false)
        setVisibleGenre(false)
    }
    const clickOnDateFilter = () => {
        setIsActiveAuthorButton(false)
        setIsActiveDateButton(!isActiveDateButton)
        setIsActiveGenreButton(false)

        setActiveAuthor(false)
        setActiveDate(!activeDate)
        setActiveGenre(false)

        setVisibleDate(!visibleDate)
        setVisibleAuthor(false)
        setVisibleGenre(false)
    }
    const clickOnGenreFilter = () => {
        setIsActiveAuthorButton(false)
        setIsActiveDateButton(false)
        setIsActiveGenreButton(!isActiveGenreButton)

        setActiveAuthor(false)
        setActiveDate(false)
        setActiveGenre(!activeGenre)

        setVisibleGenre(!visibleGenre)
        setVisibleAuthor(false)
        setVisibleDate(false)
    }

    return (
        <S.CenterblockFilter>
             <S.FilterTitle>Искать по:</S.FilterTitle>
             <S.FilterContent>
             {selectedAuthors.length > 0 && (
                        <S.FilterCounter>
                            {selectedAuthors.length}
                        </S.FilterCounter>
                    )}
                <S.FilterButton
                    $isActive={isActiveAuthorButton}
                    onClick={clickOnAuthorFilter}
                >
                    исполнителю
                </S.FilterButton>
                {visibleAuthor && AuthorList({
                            tracks,
                            selectedAuthors,
                            setSelectedAuthors,
                        })}
            </S.FilterContent>
            <S.FilterContent>
                <S.FilterButton
                    $isActive={isActiveDateButton}
                    onClick={clickOnDateFilter}
                >
                    году выпуска
                </S.FilterButton>
                {visibleDate && DateList({
                            selectedSort,
                            setSelectedSort,
                        })}
            </S.FilterContent>
            <S.FilterContent>
            {selectedGenres.length > 0 && (
                        <S.FilterCounter>
                            {selectedGenres.length}
                        </S.FilterCounter>
                    )}
                <S.FilterButton
                   $isActive={isActiveGenreButton}
                    onClick={clickOnGenreFilter}
                >
                    жанру
                </S.FilterButton>
                {visibleGenre && GenreList({
                            tracks,
                            selectedGenres,
                            setSelectedGenres,
                        })}
            </S.FilterContent>
        </S.CenterblockFilter>
    )
}