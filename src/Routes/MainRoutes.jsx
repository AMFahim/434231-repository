import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../Pages/Home/Home';
const Home = lazy(() => import("../Pages/Home/Home"))

const MainRoutes = () => {
    return (
        <Suspense fallback={"Loading.."}>
            <Routes >
                <Route path='/' element={<Home />} />
            </Routes>
        </Suspense>

    );
};

export default MainRoutes;