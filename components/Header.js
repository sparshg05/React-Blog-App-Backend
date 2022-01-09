import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <>
            <h1 className="text-center mt-3 bolder">The Siren</h1>
            <div>
                <ul className="d-flex justify-content-center list-unstyled">
                    <li ><Link className="nav-link" to="/">Home</Link></li>
                    <li ><Link className="nav-link" to="/bollywood">Bollywood</Link></li>
                    <li ><Link className="nav-link" to="/technology">Technology</Link></li>
                    <li ><Link className="nav-link" to="/hollywood">Hollywood</Link></li>
                    <li ><Link className="nav-link" to="/fitness">Fitness</Link></li>
                    <li ><Link className="nav-link" to="/food">Food</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header;