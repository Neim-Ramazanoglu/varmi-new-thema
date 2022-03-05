import React from 'react'
import logo from '../Assets/png/Group 327.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="row">
                <div className="col-2">
                    <img src={logo} />
                </div>
                <div className="col-2 offset-5">
                    <span className='varben-text vertical-center'>342,233</span>
                    <span className='text-uppercase ps-2 fw-bold vertical-center' >Varben</span>
                </div>
                <div className="col-2 offset-1">
                    <span className='varben-text vertical-center'>5,342,216</span>
                    <span className='text-uppercase ps-2 fw-bold vertical-center'>Kullanıcı</span>
                </div>
            </div>
            <div className="row" style={{ marginTop: '1.5vw', height: '350px' }}>
                <div className="col-3">
                    <span>
                        Üst Menü
                    </span>
                    <ul className='no-bullets' style={{ marginTop: '1.5vw' }}>
                        <li className='footer-list-item'>
                            Ana Sayfa
                        </li>
                        <li className='footer-list-item'>
                            Mesajlar
                        </li>
                        <li className='footer-list-item'>
                            Profil
                        </li>
                        <li className='footer-list-item'>
                            Varmı Nedir?
                        </li>
                        <li className='footer-list-item'>
                            Kategoriler
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <span>
                        Diğer Menü
                    </span>
                    <ul className='no-bullets' style={{ marginTop: '1.5vw' }}>
                        <li className='footer-list-item'>
                            Sözleşmeler
                        </li>
                        <li className='footer-list-item'>
                            Sık Sorulan Sorular
                        </li>
                        <li className='footer-list-item'>
                            Sorun Bildir
                        </li>
                        <li className='footer-list-item'>
                            Arşiv
                        </li>
                    </ul>
                </div>
                <div className="col-6">
                    <span>
                        Mail Bülteni
                    </span>
                    <ul className='no-bullets' style={{ marginTop: '1.5vw' }}>
                        <li className='footer-list-item'>
                            Mail bültenimize kayıt oldun, fırsatlardan ilk siz haberdar olun.
                        </li>
                        <li className='footer-list-item'>
                            <div className="search-footer-container">
                                <input type="text" className="search-footer-box" placeholder="Mail Adresi" />
                                <button className="search-footer-button">Kayıt Ol</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row ">
                <div className="text-end mb-5">
                    <img className='px-2' src={require('../Assets/png/Group 328.png')} />
                    <img className='px-2' src={require('../Assets/png/Group 329.png')} />
                    <img className='px-2' src={require('../Assets/png/Group 330.png')} />
                    <img className='px-2' src={require('../Assets/png/Group 331.png')} />

                </div>
            </div>
            <div style={{ borderBottom: '2px solid #7D7D7D', opacity: '0.3' }}></div>
            <div className='row' style={{ height: '15vw', marginTop: '1vw' }}>
                <div className="col-6" style={{ color: '#7D7D7D' }}>
                    © 2022 <span style={{ color: '#3AC6AD' }}>Varmı Ticaret A.Ş.</span> - Her Hakkı Saklıdır
                </div>
                <div className="col-6 text-end">Dil: Türkçe</div>
            </div>

        </div>
    )
}

export default Footer