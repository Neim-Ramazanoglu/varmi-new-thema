import React from 'react'
import logo from '../../Assets/png/Group 327.png'
import green from '../../Assets/svg/green-modern3.svg'
function LandingFooter() {
    return (
        <div className='landing-footer'>
            <img src={require('../../Assets/png/Mask Group 2.png')} style={{ width: '25vmax' }} />

            <div style={{ textAlign: 'center', color: 'white' }}>
                <div className='fs-1 fw-bold'>
                    Hemen İndir!
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
                <div className="row" style={{ marginTop: '4vw', color: 'white' }}>
                    <div className="col-md-3 col-6 mt-5">
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
                    <div className="col-md-3 col-6 mt-5">
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
                    <div className="col-md-6 col-12 mt-5">
                        <span>
                            Mail Bülteni
                        </span>
                        <ul className='no-bullets' style={{ marginTop: '1.5vw' }}>
                            <li className='footer-list-item mb-2' style={{ color: 'white' }}>
                                Mail bültenimize kayıt oldun, fırsatlardan ilk siz haberdar olun.
                            </li>
                            <li className='footer-list-item'>
                                <div className="search-footer-container col-9">
                                    <input type="text" className="search-footer-box" placeholder="Mail Adresi" />
                                    <button className="search-footer-button" style={{ backgroundColor: '#F6D058' }}>Kayıt Ol</button>
                                </div>
                            </li>
                            <li>
                                <div className=" col-10  mt-5 ">
                                    <div className="row ">
                                        <div className="col-md-5 offset-md-0 col-10 offset-2">
                                            <div className="row landing-footer-card " >
                                                <div className="col-6">
                                                    <div style={{ color: 'rgb(246, 208, 88)', fontSize: '24px', fontWeight: 'bold' }}>
                                                        342,512
                                                    </div>
                                                    <div style={{ color: 'grey', fontSize: '14px' }}>
                                                        Varben
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <img src={require('../../Assets/png/varbe.png')} className='varbe-img-footer' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 offset-md-1 col-10 offset-2">
                                            <div className="row landing-footer-card" >
                                                <div className="col-6">
                                                    <div style={{ color: 'rgb(246, 208, 88)', fontSize: '24px', fontWeight: 'bold' }}>
                                                        5,342,216
                                                    </div>
                                                    <div style={{ color: 'grey', fontSize: '14px' }}>
                                                        Kullanıcı
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className=''>
                                                        <img src={green} className='varbe-img-footer2' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className='col-3 mb-3 mt-5'>
                    <img src={logo} />
                </div>
                <div className="text-end col-9" style={{ margin: 'auto 0' }}>
                    <img className='px-2' src={require('../../Assets/png/facebook-white.png')} />
                    <img className='px-2' src={require('../../Assets/png/instagram-white.png')} />
                    <img className='px-2' src={require('../../Assets/png/twitter-white.png')} />
                    <img className='px-2' src={require('../../Assets/png/youtube-white.png')} />
                </div>
            </div>
            <div style={{ borderBottom: '2px solid white', opacity: '0.3' }}></div>
            <div className='row' style={{ marginTop: '1vw' }}>
                <div className="col-6" style={{ color: 'white' }}>
                    © 2022 <span style={{ color: 'white' }}>Varmı Ticaret A.Ş.</span> - Her Hakkı Saklıdır
                </div>
                <div className="col-6 text-end" style={{ color: 'white' }}>Dil: Türkçe</div>
            </div>
        </div>
    )
}

export default LandingFooter