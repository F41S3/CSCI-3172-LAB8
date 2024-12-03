import Header from '../element/Header'
import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/styles.css'


export default function() {
    return (
        <div>
            <Header/>
            <h2>Dashboard</h2>
        </div>
    )
}