import React from 'react'
import '../assets/Signup.scss';

function Footer() {
    return (
        <div>
            <div className="container-fluid background ">
                <div class="main footer">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <img className="logo img-responsive" src="logo.png" />
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="nav navbar-nav ml-auto anchore">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">How Fanconovo Works?</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> Terms Of Use</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> Contact Us</a>
                                </li>

                            </ul>

                        </div>
                    </nav>
                </div>
                <p>@ 2021 Fonconovo</p>
            </div>
        </div>
    )
}
export default Footer