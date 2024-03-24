import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './TrackList.styles.js';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Track } from '../Track/Track.jsx';
import { useSelector } from 'react-redux';
import { compareAsc, compareDesc } from 'date-fns';

export const TrackList = ({ searchText, isLoading, setIsPlayerVisible, loadingTracksError, playlist, setLoadingTracksError, setIsLoading, selectedAuthors, selectedGenres, selectedSort, categoryId})  => {



      const tracks = useSelector((state) => state.tracks.tracks)

      const filtredCountries = () => {
      let allTracks = tracks

      if (searchText && searchText.split('').length > 0) {
          allTracks = allTracks.filter(
              (track) =>
                  track.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                  track.author
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                  track.album
                      .toLowerCase()
                      .includes(searchText.toLowerCase()),
          )

          setLoadingTracksError('')
      }

      if (selectedAuthors && selectedAuthors.length > 0) {
          allTracks = allTracks.filter((track) =>
              selectedAuthors.includes(track.author),
          )

          setLoadingTracksError('')
      }

      if (selectedGenres && selectedGenres.length > 0) {
          allTracks = allTracks.filter((track) =>
              selectedGenres.includes(track.genre),
          )

          setLoadingTracksError('')
      }

      if (selectedSort && selectedSort === 'Сначала новые') {
          allTracks = [...allTracks].sort((a, b) =>
              compareDesc(new Date(a.release_date), new Date(b.release_date)),
          )
      }

      if (selectedSort && selectedSort === 'Сначала старые') {
          allTracks = [...allTracks].sort((a, b) =>
              compareAsc(new Date(a.release_date), new Date(b.release_date)),
          )
      }

      return allTracks
  }

  const filteredTracks = filtredCountries()

return (
<>
<OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'auto' } }}>
<S.ContentPlaylist>
{loadingTracksError && (
              <S.LoadingTracksError>
                {loadingTracksError}
              </S.LoadingTracksError>
          )}
{ filteredTracks.map((track) => {
              return (
                <Track
                key={track.id}
                track={track}
                setIsPlayerVisible={setIsPlayerVisible}
                isLoading={isLoading}
                playlist={playlist}
                setLoadingTracksError={setLoadingTracksError}
                setIsLoading={setIsLoading}
                categoryId={categoryId}
            />
             )})}
            </S.ContentPlaylist>
            </OverlayScrollbarsComponent>
            </>
)}

