import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Page03 from "./Components/Categories/Page03";
import Page45 from "./Components/Categories/Page45";
import Page67 from "./Components/Categories/Page67";
import AdminPage from "./Components/AdminPage/AdminPage";
import VideoPage from "./Components/VideoPage";
import LoginSignup from "./Components/LoginSignup";
import FavoritesList from "./Components/FavoritesList";
import Protected from "./Components/Protected";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Playlist from "./Components/Playlist";

function App() {
    const [data, setData] = useState([]);
    const [shownData, setShownData] = useState([]);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/videos`)
            .then((response) => {
                setData(response.data);
                setShownData(response.data);
            })
            .catch((err) => alert(err));

        axios
            .get(`http://localhost:4000/users/profile`, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className='wrapper'>
            <div className='header'>
                <Header data={data} setData={setShownData} user={user} setUser={setUser} loading={loading} />
            </div>
            <Routes>
                <Route path='/' element={<Homepage data={shownData} user={user} setUser={setUser} />} />
                <Route path='/about' element={<About />} />
                <Route path='/auth/signup' element={<LoginSignup setUser={setUser} />} />
                <Route path='/auth/logout' element={<Homepage data={shownData} user={user} setUser={setUser} />} />
                <Route path='/profile' element={<Protected user={user} data={shownData} />}>
                    <Route index element={<Profile loading={loading} setUser={setUser} />} />
                    <Route path='favorites' element={<FavoritesList user={user} />} />
                    <Route path='playlists' element={<Playlist />} />
                </Route>
                <Route path='/preschool' element={<Page03 data={shownData} />} />
                <Route path='/grade-k' element={<Page45 data={shownData} />} />
                <Route path='/grade-1' element={<Page67 data={shownData} />} />
                <Route path='/upload_video' element={<AdminPage />} />
                <Route path='/player/:id' element={<VideoPage user={user} />} />
            </Routes>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
