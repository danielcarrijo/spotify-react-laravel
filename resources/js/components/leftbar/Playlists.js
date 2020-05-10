import React from 'react'
import UserLists from './playlists/UserLists'
import StandardLists from './playlists/StandardLists'

export default function Playlists() {
    return (
        <div>
            <StandardLists />
            <UserLists />
        </div>
    )
}
