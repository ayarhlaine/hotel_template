import React from 'react'
import './NavBar.scss';
function NavBar() {
    return (
        <div className="NavBar">
            <div className="container">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#">
                        <img src="/images/logo.png" className="NavBar__Logo" alt=""/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Houses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hotels</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Apartments</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
