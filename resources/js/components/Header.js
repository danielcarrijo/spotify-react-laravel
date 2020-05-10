import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

export default function Header(props) {
    const logout = () =>{
        axios.get('api/logout').then(response => {
            Cookies.remove('spotify.jwt')
            Cookies.remove('spotify.user')
            location.reload()
        })
    }
    return (
       <div className="container-fluid bg-dark p-2">
           <div className="row">
               <div className="col-4">
                    <i className="fas fa-chevron-left mr-4 text-white"></i>
                    <i className="fas fa-chevron-right text-white"></i> 
               </div>
               <div className="col-8 d-flex justify-content-end">
                   {!props.user ?
                        <div>
                            <span className="text-white mr-2">LOGIN</span>
                            <span className="text-white">REGISTER</span>
                            <span className="text-white" onClick={logout}>LOGOUy</span>
                        </div>
                        
                   : 
                        <span>{props.user.name}</span>
                   }    
               </div>
           </div>
       </div>
    )
}
