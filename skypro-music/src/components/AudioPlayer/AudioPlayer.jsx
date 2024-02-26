import React, { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './AudioPlayer.styles.js';
import { ConvertTime, FunctionMissing } from '../../Helpers.jsx';

export const AudioPlayer = ({ isPlayerVisible, isLoading, activeTrack}) => {

const [isPlay, setIsPlay] = useState(true)
const [isLoop, setIsLoop] = useState(false)

const [currentTime, setCurrentTime] = useState(0);



const progressRef = useRef(null)
const audioRef = useRef()
const duration = audioRef.current ? audioRef.current.duration : 0


const play = () => {
audioRef.current.play()
setIsPlay(true)
}

const pause = () => {
  audioRef.current.pause()
  setIsPlay(false)
  }

const togglePlay = isPlay ? pause : play

const changeVolume= (value)=>{
audioRef.current.volume=value/100
}
const changeProgress= (event)=>{
const newTime = event.target.value;
audioRef.current.currentTime = newTime;
setCurrentTime(newTime);
};
  
    return (
      isPlayerVisible && (
        //  <>
        
        
<S.Bar>

<audio
                   controls="controls"
                    src={activeTrack.track_file}
                    ref={audioRef}
                    autoPlay
                    loop={isLoop}
                    onTimeUpdate={() => {
                        setCurrentTime(audioRef.current.currentTime)
                        
                    }}
                ></audio>
                <S.TrackTime>
                  {duration && ConvertTime(currentTime)} / {duration && ConvertTime(duration)}
                </S.TrackTime>


          <S.BarContent>
            <S.BarPlayerProgress 
            ref={progressRef}
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              step={0.01}
              // onChange={changeProgress}
              onChange={() => {
                setCurrentTime(progressRef.current.value)
                audioRef.current.currentTime =
                    progressRef.current.value
            }}
              // onChange={(event)=>changeProgress(event.target.value)}
              // onChange={(a) => {
              //   progressRef.current.currentTime = a.target.value;
              // }}
              $color="#ff0000" /> 
               
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.BtnPrev>
                    <S.PlayerBtnPrevSvg 
                    alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.BtnPrev>
                  <S.PlayerBtnPlay onClick={togglePlay}>
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref= {`img/icon/sprite.svg#${isPlay ? "icon-pause" : "icon-play"}`}></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat onClick={()=> setIsLoop(!isLoop)} >
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
                    onChange={(event)=>changeVolume(event.target.value)}
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