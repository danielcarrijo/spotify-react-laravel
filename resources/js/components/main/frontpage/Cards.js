import React from 'react'

export default function Cards(props) {
    return (
        <div className="card rounded mt-1" style={{background : "#505050"}}>
            <div className="card-body d-flex justify-content-center">
                <img src={`/img/${props.element.img}`} className="img img-fluid"/>
            </div>
            <div className="card-footer">
                <span className="text-white text2"> Os grandes sucessos de {props.element.name!=undefined ? props.element.name : props.element.title} e muito mais</span>
            </div>
        </div>
    )
}
