import React from 'react'

export default function Title(props) {
    return (
        <div style={{backgroundImage: props.gender.img!= undefined ? "url('/api/gender/img/"+props.gender.img+"')" : "black"}}>
            <div style={{background: 'rgba(0,0,0,.5)'}}>
                <div className="container pt-5 text-border-black" style={{borderBottom : '1px solid black'}}>
                    <div className="row align-items-end mb-3">
                        <div className="col-12 mt-4 pt-5 ml-1 ml-sm-0">
                            <h1 className="text-white" style={{fontWeight:'bolder',textTransform: 'uppercase', fontSize: '5vw'}} >{props.gender.name}</h1>
                            <span className="text-white" style={{fontWeight: 'bold'}}>GÊNERO</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
