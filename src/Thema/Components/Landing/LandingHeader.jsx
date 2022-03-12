import React, { useState } from 'react'
import styles from '../../Assets/css/style.css'
import { Link, withRouter } from 'react-router-dom';
import OffcanvasMenu from 'react-offcanvas-menu-component';


function Header({ location, onChange }) {


    const [toggle, setToggle] = useState(false)

    return (
        <nav className=" navbar navbar-expand-lg navbar-light topbar px-5" >
            <div className="col-xs-4 col-lg-4 col-xl-4" >
                <img src={require('../../Assets/png/varmı-logo.png')} className='landing-header-logo' />
            </div>


            <div className='col-xs-4 col-lg-4 col-xl-4 d-none d-md-block' style={{ textAlign: "center" }}>
                <span style={{ fontSize: '1vmax', color: '#21947f', display: 'inline-block', backgroundColor: 'white', borderRadius: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>
                    Hizmet Verenler
                </span>
            </div>
            {/* <button className={"navbar-toggler " + (toggle === true ? 'collapsed' : '')} onClick={() => { setToggle(!toggle) }} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={(toggle === true ? 'true' : 'false')} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="col-xs-4 col-lg-4 col-xl-4 " >
                <div className="float-end">
                    <button type="button" className="btn btn-light ms-3 me-3" style={{ fontSize: '1vmax', borderRadius: '25px' }}>Kayıt Ol</button>
                    <button type="button" className="btn btn-light" style={{ fontSize: '1vmax', borderRadius: '25px' }} onClick={onChange} >Giriş Yap</button>
                </div>

            </div>


        </nav>
    )
}

export default Header
export const LoadingIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g id="Group_127" data-name="Group 127" transform="translate(-476 -28)">
                <g id="Group_126" data-name="Group 126">
                    <circle id="Ellipse_18" data-name="Ellipse 18" cx="16" cy="16" r="16" transform="translate(476 28)" fill="#fff" />
                    <g id="notification-solid" transform="translate(481.95 34.225)">
                        <path id="Path_55" data-name="Path 55" d="M17.59,14.634l-.166-.146a7.011,7.011,0,0,1-1.225-1.43,6.162,6.162,0,0,1-.659-2.347V8.3a5.274,5.274,0,0,0-4.606-5.245V2.426a.651.651,0,1,0-1.3,0v.639A5.274,5.274,0,0,0,5.08,8.3v2.41a6.162,6.162,0,0,1-.659,2.347,7.026,7.026,0,0,1-1.205,1.43l-.166.146V16.01H17.59Z" transform="translate(0 0)" fill="#3ac7ae" />
                        <path id="Path_56" data-name="Path 56" d="M15.32,32a1.293,1.293,0,0,0,2.562,0Z" transform="translate(-6.283 -15.478)" fill="#3ac7ae" />
                    </g>
                </g>
                <text id="_2" data-name="2" transform="translate(489 48)" fill="#fff" font-size="10" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">2</tspan></text>
            </g>
        </svg>

    )
}