import React from 'react'
import img1 from "../Images/crm.png";
import img2 from "../Images/gsb.png";
import img3 from "../Images/sf.png";

export default function TempTwo() {
    return (
            <>
                <div>
                    <h1>Learn what Salesforce can do for you.</h1>

            

                    <div className="columns">
                        {/* one of three */}
                        
                        <div className="column  container">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={img1} alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">John Smith</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris. 
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/* two of three */}
                        <div className="column mgt-small">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={img2} alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">John Smith</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris. 
                                        </div>
                                    </div>
                                </div>
                        
                        </div>
                        {/* three of three */}

                        <div className="column mgt-small">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={img3} alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">John Smith</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris. 
                                        </div>
                                    </div>
                                </div>

                        
                        </div>
                    </div>
                </div>

                
            
        </>
    )
}
