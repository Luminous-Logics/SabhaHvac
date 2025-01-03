import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import PublicLayout from '../layouts/PublicLayout';

const AppRoutes = () => {
    return (
        <Router>
            <PublicLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </PublicLayout>
        </Router>
    );
};

export default AppRoutes;
