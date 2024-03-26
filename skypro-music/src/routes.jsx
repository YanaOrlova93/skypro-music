

import { Routes, Route } from "react-router-dom";
import { Login } from './pages/SignIn/SignIn.jsx';
import { SignUp } from './pages/SignUp/SignUp.jsx';
import { MainPage } from './pages/main/main.jsx';
import { NotFoundPage } from './pages/NotFound/NotFound.jsx';
import { MyTracksPage } from './pages/myTrack/myTrack.jsx';
// import { PlaylistPage } from './pages/playlistPage/playlistPage.jsx';
import { CategoryPage } from './pages/Categories/CategoryPage.jsx'
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
                <Route 
                path="/category/:id"
                 element={
                <CategoryPage
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
            </Route>
        </Routes>
    )}