import React, { useState } from 'react'

const Menu = () => {

    const [flag, setFlag] = useState(true);

    const onClick = () => {
        const menus = document.querySelector('.menus');
        const menuItem = document.querySelectorAll('.menuItem');

        for (let i of menuItem) {

            if (flag) {
                setFlag(!flag);
                i.style.opacity = '1'
                menus.style.height = '23rem'
            }
            else {
                setFlag(!flag);
                i.style.opacity = '0'
                menus.style.height = '3.2rem'
            }

        }

    }

    return (
        <>
            <div className="menus">
                <div className="col-md-10 col-12 menus1">
                    <div className="line_2">
                    </div>
                    <div className='menuIcon'>
                        <img src="../images/home.png" alt="menuIcon" />
                    </div>
                    <div className="line_2"></div>
                    <h4 className="menuItem">Home</h4>
                    <div className="line_2"></div>
                    <h4 className="menuItem">About</h4>
                    <div className="line_2"></div>
                    <h4 className="menuItem">Contact</h4>
                    <div className="line_2"></div>
                    <h4 className="menuItem">Queries</h4>
                    <div className="line_2"></div>
                    <h4 className="menuItem">Help</h4>
                    <div className="line_2"></div>
                    <h4 className="menuItem">More...</h4>
                    <div className="line_2"></div>

                    <div className="hamburger" onClick={onClick}>
                        <div className="hm_line"></div>
                        <div className="hm_line"></div>
                        <div className="hm_line"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Menu;