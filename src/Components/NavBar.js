import React from 'react'
import dreamlogo from '../Images/dreamlogo.png'

export default function NavBar() {
    return (
        <>

        <nav className="navbar " role="navigation" aria-label="main navigation" style={{borderBottom:"3px solid blue"}}>
            <div className="navbar-brand ">
                

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item has-text-link">
                    Home
                </a>

                <a className="navbar-item has-text-link">
                    Resources
                </a>
                <a className="navbar-item has-text-link">
                    Support
                </a>
                <a className="navbar-item has-text-link">
                    Company
                </a>
                <a className="navbar-item has-text-link">
                COVID-19
                </a>


                </div>

                <div className="navbar-end">
                    <div className="buttons">
                    <a className="button is-primary">
                        <strong>TRY FOR FREE</strong>
                    </a>
                </div>
                {/* </div> */}
                </div>
            </div>
        </nav>
        <nav className="navbar " role="navigation" aria-label="main navigation" style={{backgroundColor:"#1b1c4d",color:"whitesmoke"}}>
        <div className="columns container ">
            <div className="column mgt-small">
            <img src={dreamlogo} alt="logo"/>

            </div>
            <div className="column mgt-small">
                <h3>The Best of Dreamforce Asia Pacific. Watch On Demand &gt;
                    </h3>
            </div>
        </div>

        </nav>



        </>
    )
}
