import React from 'react'

export default function Title(props) {
    return (
        <div className="container" style={{borderBottom : '1px solid black'}}>
            <div className="row align-items-center mb-3">
                <div className="col-5 col-xl-3 mt-4">
                    <img src="/img/none.PNG" id="playlist-img"/>
                </div>
                <div className="col-6 col-sm-7 col-xl-9 mt-4 ml-1 ml-sm-0">
                    <span className="text-white" style={{fontWeight: 'bold'}}>PLAYLIST</span>
                    <h1 className="text-white" style={{fontWeight:'bolder',textTransform: 'uppercase', fontSize: '5vw'}} >{props.playlist.title}</h1>
                    <span className="text-white" style={{fontWeight: 'bold'}}>{props.user.name}</span>
                </div>
            </div>
        </div>
    )
}
