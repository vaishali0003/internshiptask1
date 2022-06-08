import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header d-flex justify-content-center">
                <div className="header1 col-md-10 col-12">
                    <div className="left_head">
                        <div className="call_sec">
                            <img src="../images/call.png" alt="icon" className="headIcon_1" />
                            <p>+915672837833 /</p>
                            <img src="../images/whatsapp.png" alt="icon" className="headIcon_1 headI" />
                            <p>+915672837833 </p>
                            <div className="line">
                            </div>
                        </div>

                        <div className="email_sec">
                        <img src="../images/email.png" alt="icon" className="headIcon_1" />
                            <p>+Email:info23@gmail.com / xytsfgdr@gmail.com </p>
                        </div>
                    </div>

                    <div className="right_head">
                        <img src="../images/question.png" alt="icon" className='headIcon_1' />
                        <p className='p1'>Have any questions?</p>

                        <div className="social_media">
                            <img src="../images/facebook.png" alt="icon" className="headIcon_2" />
                            <img src="../images/instagram.png" alt="icon" className="headIcon_2" />
                            <img src="../images/linkedin.png" alt="icon" className="headIcon_2 headI" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header