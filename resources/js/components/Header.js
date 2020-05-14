import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import Searchbar from './search/Searchbar'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function Header(props) {
    const logout = () =>{
        axios.get('api/logout').then(response => {
            Cookies.remove('spotify.jwt')
            Cookies.remove('spotify.user')
            location.reload()
        })
    }

    const handleBack = () => {
        window.history.back()
    }

    const handleForward = () => {
        window.history.forward()
    }
    let path = useLocation();
    return (
       <div className="bg-dark p-2">
           <div className="row">
               <div className="col-4">
                    <i className="fas fa-chevron-left mr-4 text-white ml-2" onClick={handleBack}></i>
                    <i className="fas fa-chevron-right text-white" onClick={handleForward}></i> 
               </div>
               <div className="col-4">
                   {path.pathname == '/buscar' ? <Searchbar handleSearch={props.handleSearch}/> : ''}
               </div>
               <div className="col-4 d-flex justify-content-end">
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
                        {JSON.parse(Cookies.get('spotify.user')).name}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <span className="dropdown-item" onClick={logout}>Logout</span>
                    </div>
                    </div>
                   }    
               </div>
           </div>
       </div>
    )
}
