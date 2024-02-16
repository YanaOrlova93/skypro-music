import React from 'react';
// import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
// import { Skeleton } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './AudioPlayer.styles.js';

export const AudioPlayer = ({ isPlayerVisible, isLoading, activeTrack}) => {
  // const [isLoading, setIsLoading] = useState(true)
  //   useEffect(() => {
  //       setTimeout(() => {
  //           setIsLoading(false)
  //       }, 3000)
  //   }, [])
console.log(activeTrack);
    return (
      isPlayerVisible && (
        //  <>
        //  <audio
        //            controls="controls"
        //             src={activeTrack.track_file}
        //             ref={audioRef}
        //             autoPlay={true}
        //             onTimeUpdate={() => {
        //                 setCurrentTime(audioRef.current.currentTime)
        //             }}
        //         ></audio>
        //         <S.TrackTime>
        //           {duration && ConvertTime(currentTime)} / {duration && ConvertTime(duration)}
        //         </S.TrackTime>
<S.Bar>
          <S.BarContent>
            <S.BarPlayerProgress></S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.BtnPrev>
                    <S.PlayerBtnPrevSvg alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.BtnPrev>
                  <S.PlayerBtnPlay>
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat>
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle>
                    <S.PlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                    {isLoading ? (
                                        <Skeleton
                                            width={55}
                                            height={55}
                                            baseColor="#202020"
                                            highlightColor="#444"
                                        />
                                    ) : (
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                                    )}
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                    {isLoading ? (
                                        <Skeleton
                                            width={90}
                                            baseColor="#202020"
                                            highlightColor="#444"
                                        />
                                    ) : (
                      <S.TrackPlayAuthorLink href="http://"
                        >{activeTrack.name}</S.TrackPlayAuthorLink>
                      )}
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      {isLoading ? (
                                        <Skeleton
                                            width={90}
                                            baseColor="#202020"
                                            highlightColor="#444"
                                        />
                                    ) : (
                      <S.TrackPlayAlbumLink href="http://">{activeTrack.author}</S.TrackPlayAlbumLink>
                                    )}
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                      <S.TrackPlayLikeSvg alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use
                          xlinkHref="img/icon/sprite.svg#icon-dislike"
                        ></use>
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </S.VolumeSvg>
                  </S.VolumeImage>
                  <S.VolumeProgress>
                    <S.VolumeProgressLine
                      type="range"
                      name="range"
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
      )
    );
}
// export default AudioPlayer;