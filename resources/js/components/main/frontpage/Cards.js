import React from 'react'

export default function Cards(props) {
    return (
        <div className="card rounded mt-1" style={{background : "#505050"}}>
            <div className="card-body d-flex justify-content-center">
            {props.element.name!=undefined ? <img src={`/img/${props.element.img}`} className="img img-fluid"/> : <img src={`/img/none.PNG`} className="img img-fluid"/>}
            <span className="text white">{props.name == "gender" ? props.element.name : '' }</span>
            </div>
            <div className="card-footer">
                <span className="text-white text2"> {props.element.name!=undefined ?'Os grandes sucessos de ' + props.element.name + ' e muito mais' : 'Curta o som da playlist ' + props.element.title} </span>
            </div>
        </div>
    )
}
