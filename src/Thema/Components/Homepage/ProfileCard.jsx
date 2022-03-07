import React from 'react'
import stars from '../../Assets/png/stars.svg'
import icons from '../../Assets/png/Group-105.svg'
import location from '../../Assets/png/location.svg'
import payment from '../../Assets/png/payment.svg'
import verify from '../../Assets/png/verified.svg'
import certificate from '../../Assets/png/certificate.svg'
import truck from '../../Assets/png/truck.svg'
function ProfileCard() {
    const List = [
        {
            id: '1'
        },
        {
            id: '2'
        },
        {
            id: '3'
        },
        {
            id: '4'
        },
        {
            id: '5'
        },
        {
            id: '6'
        },
        {
            id: '7'
        },
        {
            id: '8'
        },
    ]

    return (
        <div className='row'>
            {List.map((profile, index) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={profile.id}>
                    <div className="p-card-header">
                        <img className="p-card-img" alt="User image" src={require('../../Assets/png/1.png')} />
                    </div>
                    <div className="p-card-body mt-2 pt-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 right-rating" style={{ marginTop: '1vmax' }}>
                                    <img src={stars} /><br />
                                    <span style={{ color: '#92929D', fontSize: '10px' }}>54 Yorum</span>
                                </div>
                                <div className="col-2 offset-1 right-rating" style={{ position: 'relative' }}>
                                    <img className='flex-item' style={{ bottom: '0', position: 'absolute', left: '0' }} src={payment} />
                                    <img className='flex-item' style={{ bottom: '0', position: 'absolute', right: 'auto', left: 'auto' }} src={verify} />
                                    <img className='flex-item' style={{ bottom: '0', position: 'absolute', right: '0' }} src={certificate} />
                                </div>
                                <div className="col-4 offset-1 right-rating" style={{ marginTop: '1vmax' }}>
                                    <img src={location} className='mb-1' />
                                    <span className='text-uppercase ms-1' style={{ color: '#3ac6ad', fontSize: '19px', fontWeight: 'bold' }}>620mt</span>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 right-rating" style={{ marginTop: '1vmax' }}>
                                    <span style={{ color: '#92929D', fontSize: '11px' }}>Cevaplama Hızı</span><br />
                                    <span style={{ color: '#92929D', fontSize: '10px', fontWeight: 'bold' }}>10 dk</span>
                                </div>
                                <div className="col-4 right-rating" style={{ marginTop: '1vmax' }}>
                                    <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Mehmet</span><br />
                                    <img src={truck} className='me-1' />
                                    <span style={{ color: '#92929D', fontSize: '12px', fontWeight: '' }}>Taşıma&Kurye</span>
                                </div>
                                <div className="col-4 right-rating" style={{ marginTop: '1vmax' }}>
                                    <span style={{ color: '#92929D', fontSize: '11px' }}>İş Tamamlama Oranı</span><br />
                                    <span style={{ color: '#92929D', fontSize: '10px', fontWeight: 'bold' }}>%94</span>
                                </div>
                            </div>


                            <div className="p-card-text line-clamp" >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>


                            <div className="row">
                                <button type="button" className="btn btn-success col-8 offset-2" style={{ borderRadius: '10px', backgroundColor: '#3AC6AD', marginBottom: '20px', border: 'none', height: '2.5vmax' }}>Mesaj At</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>

    )
}

export default ProfileCard