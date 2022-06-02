import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, Main, RegisterPage } from '../pages'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/' element={<Main />} />
        </Routes>
    )
}

export default MainRoutes