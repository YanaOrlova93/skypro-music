import Skeleton from 'react-loading-skeleton'
import './Sidebar.css'
import { useEffect, useState } from 'react'


function Sidebar () {
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }, [])

    if(isLoading) {
      
      return (
        <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="assets/icon/sprite.svg#logout"> </use>
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item">
                  <Skeleton
                    width={250}
                    height={150}
                    count={3}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                </div>
              </div>
            </div>
        </div>
      )
    }
    return (
        <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="assets/icon/sprite.svg#logout"> </use>
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item">
                  <a className="sidebar__link" href="http://">
                    <img
                      className="sidebar__img"
                      src="assets/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="http://">
                    <img
                      className="sidebar__img"
                      src="assets/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="http://">
                    <img
                      className="sidebar__img"
                      src="assets/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Sidebar;