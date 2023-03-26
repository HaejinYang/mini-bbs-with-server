import './global.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostViewEachPage from "./components/page/PostViewEachPage";
import HomePage from "./components/page/HomePage";
import NavBar from "./components/nav/NavBar";
import PostWritePage from "./components/page/PostWritePage";
import PostViewAllPage from "./components/page/PostViewAllPage";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/post">
                    <Route path=":id" element={<PostViewEachPage/>}></Route>
                    <Route path="write" element={<PostWritePage/>}></Route>
                    <Route path="all" element={<PostViewAllPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
