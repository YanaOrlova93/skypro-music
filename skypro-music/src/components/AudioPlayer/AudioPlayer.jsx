import './audioPlayer.css';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';




function AudioPlayer ()  {
  const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }, [])

    return (
        <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress" />
            <div className="bar__player-block">
              <div className="bar__player player">
                <div className="player__controls">
                  <div className="player__btn-prev">
                    <svg className="player__btn-prev-svg" alt="prev">
                      <use xlinkHref="assets/icon/sprite.svg#icon-prev" /> 
                    </svg>
                  </div>
                  <div className="player__btn-play _btn">
                    <svg className="player__btn-play-svg" alt="play">
                      <use xlinkHref="assets/icon/sprite.svg#icon-play" />
                    </svg>
                  </div>
                  <div className="player__btn-next">
                    <svg className="player__btn-next-svg" alt="next">
                      <use xlinkHref="assets/icon/sprite.svg#icon-next" />
                    </svg>
                  </div>
                  <div className="player__btn-repeat _btn-icon">
                    <svg className="player__btn-repeat-svg" alt="repeat">
                      <use xlinkHref="assets/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div className="player__btn-shuffle _btn-icon">
                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                      <use xlinkHref="assets/icon/sprite.svg#icon-shuffle" />
                    </svg>
                  </div>
                </div>

                <div className="player__track-play track-play">
                  <div className="track-play__contain">
                    <div className="track-play__image">

                    {isLoading ? (
                              <Skeleton
                                width={55}
                                height={55}
                                baseColor="#202020"
                                highlightColor="#444"
                              />
                      ) : (

                      <svg className="track-play__svg" alt="music">
                        <use xlinkHref="assets/icon/sprite.svg#icon-note" />
                      </svg>
                        )}  
                    </div>
                    <div className="track-play__author">
                    {isLoading ? (
                              <Skeleton
                                width={90}
                                baseColor="#202020"
                                highlightColor="#444"
                              />
                      ) : (
                      <a className="track-play__author-link" href="http://"
                        >Ты та...</a>
                      )}
                    </div>
                    <div className="track-play__album">
                    {isLoading ? (
                                <Skeleton
                                   width={90}
                                   baseColor="#202020"
                                   highlightColor="#444"
                                />
                      ) : (
                      <a className="track-play__album-link" href="http://">Баста</a>
                      )}
                    </div>
                  </div>

                  <div className="track-play__like-dis">
                    <div className="track-play__like _btn-icon">
                      <svg className="track-play__like-svg" alt="like">
                        <use xlinkHref="assets/icon/sprite.svg#icon-like" />
                      </svg>
                    </div>
                    <div className="track-play__dislike _btn-icon">
                      <svg className="track-play__dislike-svg" alt="dislike">
                        <use xlinkHref="assets/icon/sprite.svg#icon-dislike" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bar__volume-block volume">
                <div className="volume__content">
                  <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                      <use xlinkHref="assets/icon/sprite.svg#icon-volume" />
                    </svg>
                  </div>
                  <div className="volume__progress _btn">
                    <input
                      className="volume__progress-line _btn"
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default AudioPlayer;