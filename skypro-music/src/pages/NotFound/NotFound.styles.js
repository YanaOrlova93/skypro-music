import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
        width: 100%;
        min-height: 100%;
        overflow: hidden;
        background-color: #383838;
    `

export const Container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`

export const Main = styled.main`
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`

export const MainNav = styled.div`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`

 export const NavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`

 export const LogoImg = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
`

 export const NavBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`

 export const BurgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
`

 export const NavMenu = styled.div`
    display: block;
    visibility: visible;
`

 export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
`

 export const MenuItem = styled.div`
    padding: 5px 0;
    margin-bottom: 16px;
`

 export const MenuLink = styled(Link)`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

export const MainCenterBlock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
    -ms-flex-positive: 3;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`

export const CenterblockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
    margin-bottom: 51px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`

export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #ffffff;
    fill: transparent;
`

export const SearchText = styled.input`
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &::-webkit-input-placeholder {
      background-color: transparent;
      color: #ffffff;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    &::-ms-input-placeholder {
      background-color: transparent;
      color: #ffffff;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    &::placeholder {
      background-color: transparent;
      color: #ffffff;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
`

export const MainSidebar = styled.div`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
`

export const SidebarIcon = styled.div`
    width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
    cursor: pointer;
`

export const TitelNotfound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 356px;
`

export const TitelNotfoundErrorText = styled.h1`
    font-family: StratosSkyeng;
    font-size: 160px;
    font-style: normal;
    font-weight: 400;
    line-height: 168px;
`

export const TitelNotfoundErrorInformation = styled.h2`
    font-family: StratosSkyeng;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    display: flex;
    padding-top: 3px;
`

export const TitelNotfoundInfo = styled.h3`
    color: #4E4E4E;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
    padding-top: 19px;
    padding-bottom: 36px;
`

export const NotfoundButton = styled.button`
    border-radius: 6px;
    background: var(--palette-purple-90, #580EA2);
    width: 278px;
    height: 52px;
    flex-shrink: 0;
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
`

export const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`

export const BarContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`

export const BarPlayerProgress = styled.div`
    width: 100%;
    height: 5px;
    background: #2e2e2e;
`

export const BarPlayerBlock = styled.div`
    height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`

export const BarPlayer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`

export const PlayerControls = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 27px 0 31px;
`

export const BtnPrev = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 23px;
    cursor: pointer;
`

export const PlayerBtnPrevSvg = styled.svg`
    width: 15px;
    height: 14px;
`

export const PlayerBtnPlay = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 23px;
    cursor: pointer;
`

export const PlayerBtnPlaySvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
`

export const PlayerBtnNext = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 28px;
    fill: #a53939;
    cursor: pointer;
`

export const PlayerBtnNextSvg = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
`

export const PlayerBtnRepeat = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
`

export const PlayerBtnRepeatSvg = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    
`

export const PlayerBtnShuffle = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
`

export const PlayerBtnShuffleSvg = styled.svg`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`

export const PlayerTrackPlay = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
`

export const TrackPlayContain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`

export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-area: image;
`

export const TrackPlaySvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`

export const TrackPlayAuthor = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
`

export const TrackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
`

export const TrackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
`

export const TrackPlayLikeDis = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 26%;
`

export const TrackPlayLike = styled.div`
    padding: 5px;
    cursor: pointer;
`

export const TrackPlayLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`

export const TrackPlayDislike = styled.div`
    padding: 5px;
    margin-left: 28.5px;
    cursor: pointer;
`

export const TrackPlayDislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`

export const BarVolumeBlock = styled.div`
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: end;
`

export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`

export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
    ;
`

export const VolumeProgress = styled.div`
    width: 109px;
`

export const VolumeProgressLine = styled.input`
    width: 109px;
    cursor: pointer;
`