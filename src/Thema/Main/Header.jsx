import React, { useState } from 'react'


function Header({ location, landing }) {


    const [toggle, setToggle] = useState(false)
    return (
        <nav className=" navbar sticky-top navbar-expand-lg navbar-light topbar " style={{ height: '102px' }}>
            <div className="offcanvas offcanvas-start w-25 d-lg-none " tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
                <div className="offcanvas-header" style={{ backgroundColor: '#3AC6AD' }}>
                    <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas"></h6>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body px-0" style={{ backgroundColor: '#3AC6AD' }}>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-truncate">
                                <span className="text-uppercase" href="#">ana sayfa</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
                                <span className="text-uppercase" href="#">mesajlar</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-truncate">
                                <span className="text-uppercase" href="#">profil</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-truncate">
                                <span className="text-uppercase" href="#">varmı nedir?</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
                                <span className="text-uppercase" href="#">kategoriler</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-truncate">
                                <span className="text-uppercase" href="#">arama</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-truncate">
                                <span className="text-uppercase" href="#">bize ulaşın</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className='of col-xs-1'>
                <button className="btn float-end" style={{ border: 'none', color: 'white' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                    Menu
                </button>
            </div>
            <div className="col-xs-3 col-lg-1 col-xl-1 me-5" style={{ marginLeft: '3.5%' }}>
                <img src={require('../Assets/png/varmı-logo.png')} />
            </div>
            <div className='col-xs-4 col-md-4 col-lg-4 col-xl-3 content2'>
                <span href="#" style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <img src={require('../Assets/png/archive.png')} style={{ height: '22.5px', width: '27.5px' }} />
                    <span style={{ marginLeft: '0.78vw', fontSize: '13px', color: '#21947f', display: 'inline-block', backgroundColor: 'white', borderRadius: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>
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
            <div className={"col-lg-3 col-xl-3 justify-content-center collapse navbar-collapse " + (toggle === true ? 'show' : '')} id="navbarSupportedContent" >
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
                        <a className="nav-link text-uppercase d-none d-xxl-block" href="#">kategoriler</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase d-none d-xxl-block" href="#" >arama</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#" >bize ulaşın</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-xl-block col-xl-3 col-2" >
                <div className="float-end">
                    <button type="button" className="button " >Türkçe</button>
                    <button type="button" className="button  ms-3 me-3" >English</button>
                    <button type="button" className="button me-3" onClick={landing} >Giriş Yap</button>

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