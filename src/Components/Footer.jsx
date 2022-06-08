import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footerSec">
                <div className="footer1 col-md-10">

                    <div className="foot1_sec">
                        <div className="footIcon">
                            <img src="../images/email.png" alt="email"/>
                        </div>
                        vaishali@gmail.com/vaishali5@gmail.com
                    </div>

                    <div className="foot1_sec">
                        <div className="footIcon">
                            <img src="../images/call.png" alt="call"/>
                        </div>
                        +915763654564

                        <div className="footIcon footI">
                            <img src="../images/whatsapp.png" alt="whatsapp"/>
                        </div>
                        +915768738834
                    </div>

                    <div className="foot1_sec">
                        <div className="footIcon">
                            <img src="../images/facebook.png" alt="facebook"/>
                        </div>
                        <div className="footIcon">
                            <img src="../images/instagram.png" alt="instagram"/>
                        </div>
                        <div className="footIcon">
                            <img src="../images/linkedin.png" alt="linkedin"/>
                        </div>
                    </div>
                </div>

                <hr style={{backgroundColor: "white",height:"1px",width:"100%",margin:"0"}}/>

                <div className="footer2">
Copyright 2021 @ All rights reserved
                </div>

            </footer>
        </>
    )
}

export default Footer