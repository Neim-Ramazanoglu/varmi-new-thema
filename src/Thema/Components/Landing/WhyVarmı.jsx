import React from 'react'

function WhyVarmı() {
    return (
        <div className='why-varmı'>
            <div className="row">
                <div className="col-4">
                    <img src={require('../../Assets/png/locationlar.png')} style={{ width: '20vmax' }} />
                </div>
                <div className="col-4"  >
                    <div className=' fw-bold mb-5 fs-3'>
                        Neden VARMI?
                    </div>
                    <div className='why-varmı-card col-9'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={require('../../Assets/png/dash.png')} style={{ width: '3.7vmax' }} />
                            </div>
                            <div className='why-varmı-text col-8'>
                                Öncelikle hizmet bulmak için en hızlısıyız.
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-9'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={require('../../Assets/png/dash.png')} style={{ width: '3.7vmax' }} />
                            </div>
                            <div className='why-varmı-text col-8'>
                                Öncelikle hizmet bulmak için en hızlısıyız.
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-9'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={require('../../Assets/png/dash.png')} style={{ width: '3.7vmax' }} />
                            </div>
                            <div className='why-varmı-text col-8'>
                                Öncelikle hizmet bulmak için en hızlısıyız.
                            </div>
                        </div>
                    </div>
                    <div className='why-varmı-card col-9'>
                        <div className="row">
                            <div className='why-varmı-img-wrapper col-4'>
                                <img src={require('../../Assets/png/dash.png')} style={{ width: '3.7vmax' }} />
                            </div>
                            <div className='why-varmı-text col-8'>
                                Öncelikle hizmet bulmak için en hızlısıyız.
                            </div>
                        </div>
                    </div>
                    <div style={{ color: '#34BEA5' }}>
                        <span className='fw-bold'>Nazik ve saygılı</span> insanları platformda barındırıyoruz!
                    </div>
                </div>
                <div className="col-4">
                    <img src={require('../../Assets/png/phone-play.png')} />
                </div>
            </div>
        </div>
    )
}

export default WhyVarmı