import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <nav>
        <Link to='/'>
            <h1 className="app-heading">
                Members-only app
            </h1>
        </Link>
    </nav>
)
