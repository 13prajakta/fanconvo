import React from 'react'

function Nav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <img className="logo img-responsive" src="logo.png" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav ml-auto anchore">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Signup</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Nav