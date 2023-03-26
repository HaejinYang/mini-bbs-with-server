import './global.css';
import React, {useReducer} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostViewEachPage from "./components/page/PostViewEachPage";
import HomePage from "./components/page/HomePage";
import NavBar from "./components/nav/NavBar";
import {PostType} from "./components/types";
import {CommentType} from "./components/comment/Comment";
import PostReducer from "./components/post/reducer/PostReducer";
import PostContext from './components/post/context/PostContext';
import PostWritePage from "./components/page/PostWritePage";
import PostViewAllPage from "./components/page/PostViewAllPage";

function App() {
    const [postState, postDispatch] = useReducer(PostReducer, {posts: JSON.parse(localStorage.getItem('post')!)});

    const postStore = (post: PostType): void => {
        postDispatch({type: "STORE", post});
    }
    return (
        <BrowserRouter>
            <NavBar/>
            <PostContext.Provider value={{posts: postState.posts, store: postStore}}>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/post">
                        <Route path=":id" element={<PostViewEachPage/>}></Route>
                        <Route path="write" element={<PostWritePage/>}></Route>
                        <Route path="all" element={<PostViewAllPage/>}></Route>
                    </Route>
                </Routes>
            </PostContext.Provider>
        </BrowserRouter>
    );
}

export default App;
