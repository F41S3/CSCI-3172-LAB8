import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './element/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Register />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
