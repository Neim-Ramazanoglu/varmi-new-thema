import React from 'react'
import logo from '../../Assets/png/Group 327.png'

function LandingFooter() {
    return (
        <div style={{ backgroundColor: '#33bea4' }}>
            <img src={require('../../Assets/png/Mask Group 2.png')} style={{ width: '25vmax' }} />

            <div style={{ textAlign: 'center', color: 'white' }}>
                <div className='fs-1 fw-bold'>
                    Hemen Gönder!
                </div>
                <div className='mt-2 opacity-75 mb-5'>
                    Uygulamamıza App Store ve Play Store üzerinden ulaşabilir, VARMI ailesine katılabilirsin!
                </div>
                <div className="logos mt-3">
                    <img src={require('../../Assets/png/Group 178.png')} className='px-3' />
                    <img src={require('../../Assets/png/Group 180.png')} className='px-3' />

                </div>
            </div>
            <div className='footer'>
                <div className="row">
                    <div className="col-sm-2 col-6 d-none d-xs-block d-sm-block d-md-block d-lg-block d-xl-block">
                        <img src={logo} />
                    </div>
                    <div className="col-sm-2 offset-sm-5 col-6 offset-3 ">
                        <span className='varben-text vertical-center' style={{ color: 'white' }}>342,233</span>
                        <span className='text-uppercase ps-2 fw-bold vertical-center' style={{ color: 'white' }}>Varben</span>
                    </div>
                    <div className="col-sm-2 offset-sm-1 col-6 offset-3">
                        <span className='varben-text vertical-center' style={{ color: 'white' }}>5,342,216</span>
                        <span className='text-uppercase ps-2 fw-bold vertical-center' style={{ color: 'white' }}>Kullanıcı</span>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '1.5vw', height: '350px', color: 'white' }}>
                    <div className="col-md-3 col-6">
                        <span>
                            Üst Menü
                        </span>
                        <ul className='no-bullets' style={{ marginTop: '1.5vw' }}>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Ana Sayfa
                            </li>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Mesajlar
                            </li>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Profil
                            </li>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Varmı Nedir?
                            </li>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Kategoriler
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6">
                        <span>
                            Diğer Menü
                        </span>
                        <ul className='no-bullets' style={{ marginTop: '1.5vw' }}>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Sözleşmeler
                            </li>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Sık Sorulan Sorular
                            </li>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Sorun Bildir
                            </li>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Arşiv
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <span>
                            Mail Bülteni
                        </span>
                        <ul className='no-bullets' style={{ marginTop: '1.5vw' }}>
                            <li className='footer-list-item' style={{ color: 'white' }}>
                                Mail bültenimize kayıt oldun, fırsatlardan ilk siz haberdar olun.
                            </li>
                            <li className='footer-list-item'>
                                <div className="search-footer-container">
                                    <input type="text" className="search-footer-box" placeholder="Mail Adresi" />
                                    <button className="search-footer-button" style={{ backgroundColor: '#F6D058' }}>Kayıt Ol</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row ">
                    <div className="text-end mb-5">
                        <img className='px-2' src={require('../../Assets/png/facebook-white.png')} />
                        <img className='px-2' src={require('../../Assets/png/instagram-white.png')} />
                        <img className='px-2' src={require('../../Assets/png/twitter-white.png')} />
                        <img className='px-2' src={require('../../Assets/png/youtube-white.png')} />

                    </div>
                </div>
                <div style={{ borderBottom: '2px solid white', opacity: '0.3' }}></div>
                <div className='row' style={{ height: '5vw', marginTop: '1vw' }}>
                    <div className="col-6" style={{ color: 'white' }}>
                        © 2022 <span style={{ color: 'white' }}>Varmı Ticaret A.Ş.</span> - Her Hakkı Saklıdır
                    </div>
                    <div className="col-6 text-end" style={{ color: 'white' }}>Dil: Türkçe</div>
                </div>

            </div>
        </div>
    )
}

export default LandingFooter