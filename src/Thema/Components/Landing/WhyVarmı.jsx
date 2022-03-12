import React from 'react'
import dash from '../../Assets/svg/dash.svg'
import plus from '../../Assets/svg/plus.svg'
import verify from '../../Assets/svg/verify.svg'
import avatar from '../../Assets/svg/avatar.svg'
import arrow from '../../Assets/svg/line-alt-svgrepo-com.svg'
import deneme from '../../Assets/svg/deneme.svg'
function WhyVarmı() {
    return (
        <div className='why-varmı'>
            <div className="row ">
                <div className="col-md-5 col-12" style={{ margin: 'auto 0', textAlign: 'center' }}>
                    <img src={require('../../Assets/png/phone-play.png')} className='why-phone' />
                </div>
                <div className="col-md-3 col-12" style={{ margin: 'auto 0', textAlign: 'center' }}>
                    <div className="row">
                        <div className="col-md-7 col-12 fw-bold why-header" >
                            Neden VARMI?
                        </div>
                        <div className="col-3 d-none d-lg-block" style={{ lineHeight: '1.5' }}>
                            <img src={deneme} style={{ width: '10vmax', transform: 'rotate(-45deg)', marginLeft: '-20px' }} />
                            <img src={deneme} style={{ width: '10vmax', transform: 'rotate(-15deg)' }} />
                            <img src={deneme} style={{ width: '10vmax', transform: 'rotate(15deg)' }} />
                            <img src={deneme} style={{ width: '10vmax', transform: 'rotate(40deg)', marginLeft: '-15px' }} />

                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12" style={{ margin: 'auto ' }} >
                    {/* <div className=' fw-bold mb-5 fs-3 why-varmı-header' >
                        Neden VARMI?
                    </div> */}
                    <div className='why-varmı-card col-md-9 col-11'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={dash} className='why-varmı-img' />
                            </div>
                            <div className='col-8 why-text'>
                                <div className='fw-bold fs-4 mt-1'>
                                    Hızlı
                                </div>
                                <div className='why-varmı-text text-muted mt-2'>
                                    Öncelikle hizmet bulmak için en hızlısıyız.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-md-9 col-11'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={plus} className='why-varmı-img' />
                            </div>
                            <div className='col-8 why-text'>
                                <div className='fw-bold fs-4 mt-1'>
                                    Kolay
                                </div>
                                <div className='why-varmı-text text-muted mt-2'>
                                    Ayrıca hizmet ilanı vermek çok kolay.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-md-9 col-11'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={verify} className='why-varmı-img' />
                            </div>
                            <div className='col-8 why-text'>
                                <div className='fw-bold fs-4 mt-1'>
                                    Kaliteli
                                </div>
                                <div className='why-varmı-text text-muted mt-2'>
                                    Ayrıca hizmet ilanı vermek çok kolay.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-md-9 col-11'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={avatar} className='why-varmı-img' />
                            </div>
                            <div className='col-8 why-text'>
                                <div className='fw-bold fs-4 mt-1'>
                                    Güvenilir
                                </div>
                                <div className='why-varmı-text text-muted mt-2'>
                                    Nazik ve saygılı insanları platformda barındırıyoruz!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-4 d-none d-lg-block">
                    <img src={require('../../Assets/png/locationlar.png')} className='why-phone-vertical' />
                </div> */}
            </div>
        </div>
    )
}

export default WhyVarmı