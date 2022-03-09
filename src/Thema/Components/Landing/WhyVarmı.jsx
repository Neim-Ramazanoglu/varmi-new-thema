import React from 'react'

function WhyVarmı() {
    return (
        <div className='why-varmı'>
            <div className="row justify-content-center">
                <div className="col-4 d-none d-lg-block">
                    <img src={require('../../Assets/png/locationlar.png')} style={{ width: '20vmax' }} />
                </div>
                <div className="col-md-4 col-12"  >
                    <div className=' fw-bold mb-5 fs-3 why-varmı-header' >
                        Neden VARMI?
                    </div>
                    <div className='why-varmı-card col-9'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={require('../../Assets/png/dash.png')} className='why-varmı-img' />
                            </div>
                            <div className='why-varmı-text col-8'>
                                Öncelikle hizmet bulmak için en hızlısıyız.
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-9'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={require('../../Assets/png/plus.png')} className='why-varmı-img' />
                            </div>
                            <div className='why-varmı-text col-8'>
                                Ayrıca hizmet ilanı vermek çok kolay.
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-9'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={require('../../Assets/png/verify.png')} className='why-varmı-img' />
                            </div>
                            <div className='why-varmı-text col-8'>
                                Şeffaf yapısı ile kaliteli hizmete ulaşması için müşteriye birçok seçenek sunuluyor.
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-9'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={require('../../Assets/png/avatar.png')} className='why-varmı-img' />
                            </div>
                            <div className='why-varmı-text col-8'>
                                Hizmet verenler ile doğrudan temas kurabilirsiniz.

                            </div>
                        </div>
                    </div>
                    <div style={{ color: '#34BEA5', marginTop: '15px' }} className='why-sub-text'>
                        <span className='fw-bold '>Nazik ve saygılı</span> insanları platformda barındırıyoruz!
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <img src={require('../../Assets/png/phone-play.png')} className='why-phone' />
                </div>
            </div>
        </div>
    )
}

export default WhyVarmı