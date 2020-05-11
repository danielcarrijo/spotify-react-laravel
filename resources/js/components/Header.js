import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Header(props) {
    const logout = () =>{
        axios.get('api/logout').then(response => {
            Cookies.remove('spotify.jwt')
            Cookies.remove('spotify.user')
            location.reload()
        })
    }
    return (
       <div className="bg-dark p-2">
           <div className="row">
               <div className="col-4">
                    <i className="fas fa-chevron-left mr-4 text-white ml-2"></i>
                    <i className="fas fa-chevron-right text-white"></i> 
               </div>
               <div className="col-8 d-flex justify-content-end">
                   {Cookies.get('spotify.jwt') == null?
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Entrar
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/login">Login</Link>
                            <a className="dropdown-item" href="#">Another action</a>
                            <span className="dropdown-item" onClick={logout}>Logout</span>
                        </div>
                        </div>
                        
                   : 
                   <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <span className="dropdown-item" onClick={logout}>Logout</span>
                    </div>
                    </div>
                   }    
               </div>
           </div>
       </div>
    )
}
