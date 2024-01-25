import { useState } from 'react';
import './NavMenu.css'
import {styled} from 'styled-components'
  

const StyledMainNav = styled.nav`
width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`

function NavMenu () {

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

    return (
        <StyledMainNav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="./assets/logo/logo.png" alt="logo" />
            </div>
            <div className="nav__burger burger" onClick={toggleVisibility}>
              <span className="burger__line"/>
              <span className="burger__line"/>
              <span className="burger__line"/>
            </div>
            {visible && (
            <div className="nav__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="http://" className="menu__link">Главное </a>
                </li>
                <li className="menu__item">
                  <a href="http://" className="menu__link">Мой плейлист </a>
                </li>
                <li className="menu__item">
                  <a href="../signin.html" className="menu__link">Войти</a>
                </li>
              </ul>
            </div>
            )}
          </StyledMainNav>
    )
}

export default NavMenu;