import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.scss';
function NavBar() {
    const [toggle, setToggle] = useState(true);
    const navCollapsed = toggle ? 'collapse' : '';
    const handleMenu = () => {
        setToggle(!toggle);
    };
    return (
        <div className="NavBar">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                        <img src={process.env.PUBLIC_URL+"/images/logo.png"} className="NavBar__Logo" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenu}>
                        <span className="navbar-toggler-icon">
                            <MenuIcon />
                        </span>
                    </button>

                    <div className={`${navCollapsed} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#no-action">Houses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#no-action">Hotels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#no-action">Apartments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#no-action">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
