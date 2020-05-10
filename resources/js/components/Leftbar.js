import React from 'react'
import Logo from './leftbar/Logo'
import Menu from './leftbar/Menu'
import Playlists from './leftbar/Playlists'

export default function Leftbar() {
    return (
        <nav className="d-lg-block navigation sidebar-padding">
        <div className="sidebar-sticky">
            <Logo />
            <Menu class="buscar"/>
            <Playlists />
        </div>
     </nav>
    )
}
