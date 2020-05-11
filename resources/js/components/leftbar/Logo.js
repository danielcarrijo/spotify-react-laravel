import React from 'react'

export default function Logo() {
    return (
        <ul className="nav flex-column my-3">
            <li className="nav-item">
                <div className="row">
                    <div className="col-3 mt-1">
                        <img src="/img/icone.png" className="ml-3"  width="50px"/>
                    </div>
                    <div className="col-9 mt-2">
                        <span style={title}>Spotify</span>
                    </div>
                </div>
                
            </li>
        </ul>
    )
}
const title = {
    fontSize: '20pt',
    color : 'white',
    fontWeight: 'bolder'
}