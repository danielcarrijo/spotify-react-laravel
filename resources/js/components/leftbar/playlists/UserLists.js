import React, { Component } from 'react'

export class UserLists extends Component {
    render() {
        return (
            <ul style={playlist} className="mt-3" id="playlistscroll">
                <li style={li} className="nav-item">
                    This is Dilsinho
                </li>
                <li style={li} className="nav-item">
                    Top Brasil
                </li>
            </ul>
        )
    }
}

export default UserLists

const playlist = {
    background: 'black',
    overflowY: 'scroll',
    marginTop : '0px',
    listStyle : 'none'
}

const li = {
    color: '#cecece'
}
