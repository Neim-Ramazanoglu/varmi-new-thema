import React, { useState } from 'react'
import styles from '../Assets/css/style.css'
import { Link, withRouter } from 'react-router-dom';
import OffcanvasMenu from 'react-offcanvas-menu-component';
function Header({ location }) {


    const [toggle, setToggle] = useState(false)
    return (
        <nav className=" navbar sticky-top navbar-expand-lg navbar-light topbar " style={{ height: '102px' }}>
            <div className='of col-xs-1'>
                <OffcanvasMenu
                    Link={Link}
                    location={location}
                    config={{
                        push: false,
                    }}
                    menu={[
                        { text: 'Ana Sayfa', link: '/' },
                        { text: 'Mesjalar', link: '/1' },
                        { text: 'Profil', link: '/2' },
                        { text: 'Varmı Nedir?', link: '/3' },
                        { text: 'Kategoriler', link: '/4' },
                        { text: 'Arama', link: '/5' },
                        { text: 'Bize Ulaşın', link: '/6' },
                    ]}
                    header={ // you can add logo to the header for example
                        <img src={require('../Assets/png/varmı-logo.png')} />
                    }
                />

            </div>

            <div className="col-xs-3 col-lg-1 col-xl-1 me-5" style={{ marginLeft: '3.5%' }}>
                <img src={require('../Assets/png/varmı-logo.png')} />
            </div>


            <div className='col-xs-3 col-md-4 col-lg-3 col-xl-3 content2'>
                <span href="#" style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <img src={require('../Assets/png/archive.png')} style={{ height: '22.5px', width: '27.5px' }} />
                    <span style={{ marginLeft: '0.78vw', fontSize: '13px', color: '#21947f', display: 'inline-block', backgroundColor: 'white', borderRadius: '5px', padding: '5px', cursor: 'pointer' }}>
                        Hizmet İlanı Oluştur
                    </span>
                </span>
                <a className='ms-3' href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
                        <g id="Group_127" data-name="Group 127" transform="translate(-476 -28)">
                            <g id="Group_126" data-name="Group 126">
                                <circle id="Ellipse_18" data-name="Ellipse 18" cx="16" cy="16" r="16" transform="translate(476 28)" fill="#fff" />
                                <g id="notification-solid" transform="translate(481.95 34.225)">
                                    <path id="Path_55" data-name="Path 55" d="M17.59,14.634l-.166-.146a7.011,7.011,0,0,1-1.225-1.43,6.162,6.162,0,0,1-.659-2.347V8.3a5.274,5.274,0,0,0-4.606-5.245V2.426a.651.651,0,1,0-1.3,0v.639A5.274,5.274,0,0,0,5.08,8.3v2.41a6.162,6.162,0,0,1-.659,2.347,7.026,7.026,0,0,1-1.205,1.43l-.166.146V16.01H17.59Z" transform="translate(0 0)" fill="#3ac7ae" />
                                    <path id="Path_56" data-name="Path 56" d="M15.32,32a1.293,1.293,0,0,0,2.562,0Z" transform="translate(-6.283 -15.478)" fill="#3ac7ae" />
                                </g>
                            </g>
                            <text id="_2" data-name="2" transform="translate(489 48)" fill="#fff" fontSize="10" fontFamily="OpenSans-Semibold, Open Sans" fontWeight="600"><tspan x="0" y="0">2</tspan></text>
                        </g>
                    </svg>
                </a>
            </div>
            {/* <button className={"navbar-toggler " + (toggle === true ? 'collapsed' : '')} onClick={() => { setToggle(!toggle) }} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={(toggle === true ? 'true' : 'false')} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className={"col-lg-4 col-xl-5 justify-content-center collapse navbar-collapse " + (toggle === true ? 'show' : '')} id="navbarSupportedContent" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" >
                        <a className="nav-link text-uppercase" href="#">ana sayfa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">mesajlar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#" >profil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">varmı nedir?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">kategoriler</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase d-none d-xxl-block" href="#" >arama</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#" >bize ulaşın</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-xl-block col-2" >
                <div className="float-end">
                    <button type="button" className="button " >Türkçe</button>
                    <button type="button" className="button  ms-3 me-3" >English</button>
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