import React from 'react'
import analytics from "../Images/logo/analytics-circle.png";
import commerce from "../Images/logo/commerce-circle.png";
import einstein from "../Images/logo/einstein-ai-circle.png";
import employees from "../Images/logo/employees-circle.png";
import industries from "../Images/logo/industries-circle.png";
import integration from "../Images/logo/integration-circle.png";
import learning from "../Images/logo/learning-circle.png";
import marketing from "../Images/logo/marketing-circle.png";
import partners from "../Images/logo/partners-circle.png";
import platform from "../Images/logo/platform-circle.png";
import service from "../Images/logo/service-circle.png";
import slack from "../Images/logo/slack.png";
import success from "../Images/logo/success-circle.png";
import truth from "../Images/logo/truth-circle.png";
import sales from "../Images/logo/sales-circle.png";



export default function TempFive() {
    return (
        <>
            <div className="columns is-desktop">
                <div className="column container">
                    <h1>Explore the complete Customer 360.</h1>
                </div>
                <div className="column">
                    <p>
                        Find the right mix of solutions for any team in any industry.We'all help your teams come together,serve customers betters,ans grow your business<button className="button is-info">WATCH DEMOS</button>

                    </p>
                </div>
                
            </div>

            <div className="columns is-desktop">
                <div className="column">
                    <img src={sales} alt="" srcset="" />
                    <h4>SALES</h4>
                </div>
                <div className="column">
                    <img src={service} alt="" srcset="" />
                    <h4>SERVICE</h4>
                </div>
                <div className="column">
                    <img src={marketing} alt="" srcset="" />
                    <h4>MARKETING</h4>
                </div>
                <div className="column">
                    <img src={commerce} alt="" srcset="" />
                    <h4>COMMERCE</h4>
                </div>
                <div className="column">
                    <img src={analytics} alt="" srcset="" />
                    <h4>ANALYTICS</h4>
                </div>
                <div className="column">
                    <img src={integration} alt="" srcset="" />
                    <h4>INTEGRATION</h4>
                </div>            

            </div>
            <div className="columns is-desktop">
                <div className="column">
                    <img src={slack} alt="" srcset="" />
                    <h4>SLACK</h4>
                </div>
                <div className="column">
                    <img src={platform} alt="" srcset="" />
                    <h4>PLATFORM</h4>
                </div>
                <div className="column">
                    <img src={industries} alt="" srcset="" />
                    <h4>INDUSTRIES</h4>
                </div>
                <div className="column">
                    <img src={learning} alt="" srcset="" />
                    <h4>LEARNING</h4>
                </div>
                <div className="column">
                    <img src={employees} alt="" srcset="" />
                    <h4>EMPLOYEES</h4>
                </div>
                <div className="column">
                    <img src={partners} alt="" srcset="" />
                    <h4>PARTNERS</h4>
                </div>
            </div>

            <div className="columns is-desktop">
                <div className="column ">
                    <img src={success} alt="" srcset="" />
                    <h4>SUCCESS</h4>
                </div>
                <div className="column ">
                    <img src={einstein} alt="" srcset="" />
                    <h4>EINSTEIN AI</h4>
                </div>
                <div className="column">
                    <img src={truth} alt="" srcset=""  style={{textAlign:'center'}}/>
                    <h4>TRUTH</h4>
                </div>          

            </div>
            
        </>

    )
}
