import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
export default function Sections(props) {
    return (
        <div>
            <div className="row d-flex justify-content-center my-3">
                <span className="text-white h3 ml-3 font-weight-bolder titulos">{props.title}</span>
            </div>
            <div className="row mt-1 justify-content-center">
                
                {props.array.map(artist => (
                    <div className="col-lg-3 col-sm-6 col-9" key={artist.id}>
                        <Link to={`/${props.name}/${artist.id}`} ><Cards element = {artist} /></Link>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
