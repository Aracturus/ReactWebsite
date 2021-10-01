import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  navBarBorder">
                    <div className="container">
                      
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link text-primary "  href="/">Products</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-primary "  href="/">Resources</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-primary "  href="/">Support</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-primary "  href="/">Company</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-primary "  href="/">COVID-19</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-primary "  href="/">Products</a>
                            </li>                         
                            
                        </ul>
                       
                            <button className="btn btn-success" type="submit">TRY FOR FREE</button>
                        
                        </div>
                    </div>
                </nav>
                <nav class="navbar navbar navbar2" style={{backgroundColor:"#061b33" ,color:"white"}} >
                    <div class="row ">
                        <div class="col-md-4 col-sm-12">
                            logo Image                            
                        </div>
                        <div class="col-md-8 col-sm-12">
                            <b>
                        The Best of Dreamforce Asia pacific. Watch On Demand &gt; </b>
                        </div>
                    </div>
                </nav>
            
        </div>
    )
}
