import { Routes, Route } from "react-router-dom";
import { Login } from './pages/SignInn/SignInn.jsx';
import { SignUpp } from './pages/SignUpp/SignUpp.jsx';
import { MainPage } from './pages/main/main.jsx';
import { NotFoundPage } from './pages/NotFound/NotFound.jsx';
import { MyTracksPage } from './pages/myTrack/myTrack.jsx';
import { PlaylistPage } from './pages/playlistPage/playlistPage.jsx';
import { Protection } from './components/Protection/Protection.jsx';
import React from 'react';


export const AppRoutes = ({user}) => {
    return(
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/SignUpp" element={<SignUpp />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route element={<Protection isAllowed={Boolean(user)} />}>
                <Route path="/favorites" element={<MyTracksPage />}></Route>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/category/:id" element={<PlaylistPage />}></Route>
            </Route>
        </Routes>
    )}