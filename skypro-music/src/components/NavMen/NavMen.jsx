import { useState } from 'react';
import * as S from './NavMen.styles.js';
import React from 'react';

export const NavMen = () => {
  
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  
  
    return(
        <S.MainNav>
            <S.NavLogo>
              <S.LogoImg className="_btn" src="img/logo.png" alt="logo" />
            </S.NavLogo>
            <S.NavBurger className="_btn" onClick={toggleVisibility}>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
            </S.NavBurger>
            {visible && (
            <S.NavMenu>
              <S.MenuList>
                <S.MenuItem>
                  <S.MenuLink href="#">Главное</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink href="#">Мой плейлист</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink href="../signin.html">Войти</S.MenuLink>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>
            )}
          </S.MainNav>  
    )
}