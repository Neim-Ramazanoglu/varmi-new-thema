import React from 'react'
import stars from '../../Assets/svg/stars.svg'
import icons from '../../Assets/svg/Group-105.svg'
import location from '../../Assets/svg/location.svg'
import payment from '../../Assets/svg/payment.svg'
import verify from '../../Assets/svg/verified.svg'
import certificate from '../../Assets/svg/certificate.svg'
import truck from '../../Assets/svg/truck.svg'
import message from '../../Assets/svg/message-svgrepo-com.svg'
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
        <div className='row ' style={{ marginTop: '4rem' }}>
            {List.map((profile, index) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={profile.id}>
                    <div className="p-card-header">
                        <div className='p-img-wrapper' >
                            <img src={verify} style={{ position: 'absolute', width: '1vmax', right: '0', bottom: '0', marginRight: '0.5vmax' }} />
                            <img className="p-card-img" alt="User image" src={require('../../Assets/png/1.png')} />
                        </div>
                    </div>
                    <div className="p-card-body mt-2 pt-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 right-rating" style={{ marginTop: '1vmax' }}>
                                    <img src={stars} /><br />
                                    <span style={{ color: '#92929D', fontSize: '10px' }}>54 Yorum</span>
                                </div>
                                <div className="col-3  " style={{ position: 'relative' }}>
                                    <span className='middle-rating' data-title="Cevaplama Hızı">10 dk</span>
                                </div>
                                <div className="col-4 offset-1 right-rating" style={{ marginTop: '1vmax' }}>
                                    <img src={location} className='mb-1' /><br />
                                    <span className='text-uppercase ' style={{ color: '#3ac6ad', fontSize: '1.2vmax', fontWeight: 'bold' }}> 620mt</span>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-8 right-rating" style={{ marginTop: '1vmax' }}>
                                    <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Mehmet Avcı</span><br />
                                    <img src={certificate} />
                                    <span style={{ color: '#92929D', fontSize: '12px', fontWeight: '' }}>Taşıma&Kurye</span>
                                </div>
                                <div className="col-4 right-rating" style={{ marginTop: '1vmax' }}>
                                    <span style={{ color: '#92929D', fontSize: '11px' }}>İş Bitirme Oranı</span><br />
                                    <span style={{ color: '#f5d757', fontSize: '16px', fontWeight: 'bold' }}>%94</span>
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
                                <button type="button" className="btn btn-success col-8 offset-2" style={{ borderRadius: '10px', backgroundColor: '#3AC6AD', marginBottom: '20px', border: 'none' }}>
                                    <img src={message} className='me-2' style={{ marginBottom: '2px' }} />
                                    Mesaj At
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>

    )
}

export default ProfileCard