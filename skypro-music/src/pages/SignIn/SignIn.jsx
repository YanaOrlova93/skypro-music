// import React from 'react';
// import * as S from './SignInn.styles.js';
// import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
// import { useNavigate } from 'react-router-dom';

// export const Login = () => {
//   const navigate = useNavigate()
//   const onClick = () => {
//       localStorage.setItem('user', 'token')
//       navigate('/')
//     }
//     return(
//     <>
//       <GlobalStyle />
//       <S.Wrapper>
//         <S.ContainerEnter>
//           <S.ModalBlock>
//             <S.ModalFormLogin action="#">
//             <S.ModalButtonLink to="/">
//                 <S.ModalLogo>
//                   <img src="../img/logo_modal.png" alt="logo" />
//                 </S.ModalLogo>
//             </S.ModalButtonLink>
//               <S.ModalInputLogin
//                 className="login"
//                 type="text"
//                 name="login"
//                 placeholder="Почта"
//               />
//               <S.ModalInput
//                 className="password"
//                 type="password"
//                 name="password"
//                 placeholder="Пароль"
//               />
//               <S.ModalBtnEnter onClick={onClick}>
//               <S.ModalButtonLink to="/">Войти</S.ModalButtonLink>
//               </S.ModalBtnEnter>
//               <S.ModalBtnSignUp>
//               <S.ModalButtonLink to="/SignUp">Зарегистрироваться</S.ModalButtonLink>
//               </S.ModalBtnSignUp>
//             </S.ModalFormLogin>
//           </S.ModalBlock>
//         </S.ContainerEnter>
//       </S.Wrapper>
//     </>
//     )
//   }

import React from 'react';
import * as S from './SignIn.styles.js';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import { useRef, useState } from 'react';
import { UserContext } from '../../Authorization.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [userData, setUserData] = useContext(UserContext)

    const signInButtonRef = useRef(null)

    async function handleSignIn({ email, password }) {
      if (email === '') {
          setError('Укажите почту')
          return
      }
      if (password === '') {
          setError('Укажите пароль')
          return
      }

      try {
          const response = await fetch(
              'https://skypro-music-api.skyeng.tech/user/login/',
              {
                  method: 'POST',
                  body: JSON.stringify({
                      email: email,
                      password: password,
                  }),
                  headers: {
                      'content-type': 'application/json',
                  },
              },
          )

          if (response.status === 400) {
              setError(
                  'Произошла ошибка с данными. Неверные логин или пароль',
              )
              return
          } else if (response.status === 401) {
              setError('Пользователь с таким email или паролем не найден')
              return
          } else if (response.status === 500) {
              setError('Сервер не отвечает, попробуй позже')
              return
          }

          const data = await response.json()
          setUserData(data)
          setUserData(data.username)
          localStorage.setItem('user', JSON.stringify(userData))
            navigate('/')
      } catch (error) {
          console.log(error)
      }
  }
    return(
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerEnter>
          <S.ModalBlock>
            <S.ModalFormLogin action="#">
            <S.ModalButtonLink to="/">
                <S.ModalLogo>
                  <img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
            </S.ModalButtonLink>
              <S.ModalInputLogin
                className="login"
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
              />
              <S.ModalInput
                className="password"
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              
              <S.ModalBtnEnter  >
              <S.ModalButtonLink  ref={signInButtonRef}
                                onClick={() => {
                                    signInButtonRef.current.disabled = true
                                    handleSignIn({ email, password })
                                }}>Войти</S.ModalButtonLink>
              </S.ModalBtnEnter>
              <S.ModalBtnSignUp>
              <S.ModalButtonLink to="/SignUp">Зарегистрироваться</S.ModalButtonLink>
              </S.ModalBtnSignUp>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </>
    )
  }