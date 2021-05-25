import React from 'react'
import './style.css'

function FooterBlock(){
    return (
    <div>
        <div className="footer-clean">
            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 item">
                            <h3> Movie </h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Actors </h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Legacy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3> Edition </h3>
                            <ul>
                                <li><a href="#">Job openings</a></li>
                                <li><a href="#">Employee success</a></li>
                                <li><a href="#">Benefits</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 item social">
                            <a href="#"> <i class="fab fa-facebook"></i> </a>
                            <a href="#"> <i class="fab fa-twitter-square"></i> </a>
                            <a href="#"> <i class="fab fa-snapchat-square"></i> </a>
                            <a href="#"> <i class="fab fa-instagram"></i> </a>
                            <p className="copyright">Company Name © 2018</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    
    )
}
export default FooterBlock