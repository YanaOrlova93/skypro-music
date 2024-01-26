import React from 'react';
import * as S from './SignUp.slyles.js';
import { GlobalStyle } from '../../Global.styles.js'

export const SignUp = () => {
    return(
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerEnter >
          <S.ModalBlock>
            <S.ModalFormLogin action="#">
              <a href="../">
                <S.ModalLogo>
                  <img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </a>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter>
                <a href="../index.html">Войти</a>
              </S.ModalBtnEnter>
              <S.ModalBtnEnter>
                <a href="signup.html">Зарегистрироваться</a>
              </S.ModalBtnEnter>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </>
    )
  }