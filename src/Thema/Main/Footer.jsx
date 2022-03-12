import React from 'react'
import logo from '../Assets/png/Group 327.png'
import green from '../Assets/svg/green-modern3.svg'
function Footer() {
    return (
        <div >
            <div className='footer'>
                <div className="row" style={{ marginTop: '1.5vw' }}>
                    <div className="col-md-3 col-6 mt-5">
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
                    <div className="col-md-3 col-6 mt-5">
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
                    <div className="col-md-6 mt-5">
                        <span>
                            Mail Bülteni
                        </span>
                        <ul className='no-bullets' style={{ marginTop: '1.5vw' }}>
                            <li className='footer-list-item'>
                                Mail bültenimize kayıt oldun, fırsatlardan ilk siz haberdar olun.
                            </li>
                            <li className='footer-list-item'>
                                <div className="search-footer-container col-9">
                                    <input type="text" className="search-footer-box" placeholder="Mail Adresi" />
                                    <button className="search-footer-button">Kayıt Ol</button>
                                </div>
                            </li>
                            <li>
                                <div className=" col-10  mt-5 ">
                                    <div className="row ">
                                        <div className="col-md-5 offset-md-0 col-10 offset-2 ">
                                            <div className="row landing-footer-card " style={{ backgroundColor: '#3AC6AD' }} >
                                                <div className="col-6">
                                                    <div style={{ color: 'rgb(246, 208, 88)', fontSize: '24px', fontWeight: 'bold' }}>
                                                        342,512
                                                    </div>
                                                    <div style={{ color: 'white', fontSize: '14px' }}>
                                                        Varben
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <img src={require('../Assets/png/varbe.png')} className='varbe-img-footer' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 offset-md-1 col-10 offset-2">
                                            <div className="row landing-footer-card" style={{ backgroundColor: '#3AC6AD' }}>
                                                <div className="col-6">
                                                    <div style={{ color: 'rgb(246, 208, 88)', fontSize: '24px', fontWeight: 'bold' }}>
                                                        5,342,216
                                                    </div>
                                                    <div style={{ color: 'white', fontSize: '14px' }}>
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
                <div className="text-end mb-5">
                    <img className='px-2' src={require('../Assets/png/Group 328.png')} />
                    <img className='px-2' src={require('../Assets/png/Group 329.png')} />
                    <img className='px-2' src={require('../Assets/png/Group 330.png')} />
                    <img className='px-2' src={require('../Assets/png/Group 331.png')} />

                </div>
            </div>
            <div style={{ borderBottom: '2px solid #7D7D7D', opacity: '0.3' }}></div>
            <div className='row' style={{ height: '5vw', marginTop: '1vw' }}>
                <div className="col-6" style={{ color: '#7D7D7D' }}>
                    © 2022 <span style={{ color: '#3AC6AD' }}>Varmı Ticaret A.Ş.</span> - Her Hakkı Saklıdır
                </div>
                <div className="col-6 text-end">Dil: Türkçe</div>
            </div>
        </div>

    )
}

export default Footer