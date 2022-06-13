import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import Display from './pages/Display'
import Register from './pages/Register'
import { Page404 } from './pages/404';

export function PathRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/display" element={<Display/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>

        </>
    )
} 