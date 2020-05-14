import React from 'react'
import Logo from './leftbar/Logo'
import Menu from './leftbar/Menu'
import Playlists from './leftbar/Playlists'
import { useLocation } from 'react-router-dom'
export default function Leftbar() {
    let location = useLocation()
    return (
        <nav className="d-lg-block navigation sidebar-padding">
        <div className="sidebar-sticky">
            <Logo />
            <Menu class={location.pathname}/>
            <Playlists />
        </div>
     </nav>
    )
}
