// import { Routes, Route } from "react-router-dom";
// import { Login } from './pages/SignIn/SignIn.jsx';
// import { SignUp } from './pages/SignUp/SignUp.jsx';
// import { MainPage } from './pages/main/main.jsx';
// import { NotFoundPage } from './pages/NotFound/NotFound.jsx';
// import { MyTracksPage } from './pages/myTrack/myTrack.jsx';
// import { PlaylistPage } from './pages/playlistPage/playlistPage.jsx';
// import { Protection } from './components/Protection/Protection.jsx';
// import React from 'react';


// export const AppRoutes = ({user, tracks, setTracks, isLoading, setIsLoading, isPlayerVisible, setIsPlayerVisible,
//     loadingTracksError, setActiveTrack}) => {
//     return(
//         <Routes>
//             <Route path="/login" element={<Login />}></Route>
//             <Route path="/SignUp" element={<SignUp />}></Route>
//             <Route path="*" element={<NotFoundPage />}></Route>
//             <Route element={<Protection isAllowed={Boolean(user)} />}>
//                 <Route path="/favorites" element={<MyTracksPage />}></Route>
//                 <Route path="/" element={
//                 <MainPage 
//                      tracks={tracks}
//                     setTracks={setTracks}
//                     isLoading={isLoading}
//                     setIsLoading={setIsLoading}
//                     isPlayerVisible={isPlayerVisible}
//                     setIsPlayerVisible={setIsPlayerVisible}
//                     loadingTracksError={loadingTracksError}
//                     setActiveTrack={setActiveTrack}
//                     />
//                     }
//                     ></Route>
//                 <Route path="/category/:id" element={<PlaylistPage />}></Route>
//             </Route>
//         </Routes>
//     )}

import { Routes, Route } from "react-router-dom";
import { Login } from './pages/SignIn/SignIn.jsx';
import { SignUp } from './pages/SignUp/SignUp.jsx';
import { MainPage } from './pages/main/main.jsx';
import { NotFoundPage } from './pages/NotFound/NotFound.jsx';
import { MyTracksPage } from './pages/myTrack/myTrack.jsx';
import { PlaylistPage } from './pages/playlistPage/playlistPage.jsx';
import { Protection } from './components/Protection/Protection.jsx';
import React from 'react';

export const AppRoutes = ({ user, isLoading, setIsLoading,  setIsPlayerVisible, loadingTracksError, setLoadingTracksError,  playlist, setPlaylist }) => {
    return(
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route element={<Protection isAllowed={Boolean(user)} />}>
                <Route
                    path="/favorites"
                    element={
                        <MyTracksPage
                            isLoading={isLoading}
                            setIsPlayerVisible={setIsPlayerVisible}
                            loadingTracksError={loadingTracksError}
                            setIsLoading={setIsLoading}
                            setLoadingTracksError={setLoadingTracksError}
                            playlist={playlist}
                            setPlaylist={setPlaylist}
                        />
                    }
                ></Route>
                <Route
                    path="/"
                    element={
                        <MainPage
                        isLoading={isLoading}
                        setIsPlayerVisible={setIsPlayerVisible}
                        loadingTracksError={loadingTracksError}
                        setIsLoading={setIsLoading}
                        setLoadingTracksError={setLoadingTracksError}
                        playlist={playlist}
                        setPlaylist={setPlaylist}
                        />
                    }
                ></Route>
                <Route path="/category/:id" element={<PlaylistPage />}></Route>
            </Route>
        </Routes>
    )}