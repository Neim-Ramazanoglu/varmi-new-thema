import React from 'react'
import LandingCard from './LandingCard'
import PaymentSteps from './PaymentSteps'

function Landing() {
    return (
        <div>
            <img src={require('../../Assets/png/Oval.png')} className='oval-bg' />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <img src={require('../../Assets/png/Group 325.png')} className='elipse-bg' />
            </div>
            <div className="flex-container space-between">
                <img src={require('../../Assets/png/Group 159.png')} style={{ marginLeft: '1vmax', width: '10vmax' }} />
                <button type="button" className="btn btn-success" style={{ backgroundColor: '#3AC6AD', border: 'none', marginRight: '1vmax', padding: '5px 30px' }}>
                    Kayıt Ol
                </button>
            </div>
            <div className="search-wrapper" style={{ marginTop: '23vmax' }}>

                <div className="landing-search">
                    <img src={require('../../Assets/png/Icon feather-search.png')} style={{ width: '3vmax' }} />
                    <input className='landing-search-input' placeholder='Ara'></input>
                </div>

            </div>
            <div className="flex-container space-between" style={{ marginTop: '22vmax' }}>
                <div style={{ marginLeft: '10vmax', marginTop: '4vmax' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '28px' }}>
                        VARMI hayatınıza ne katar?
                    </div>
                    <div className='card-sub-text col-lg-8 col-12'>
                        Şehirlerde birbirimize çok yakın mesafelerde yaşıyoruz değil mi ama yine de birbirimizi tanımıyoruz…
                        Halbuki hepimizin birbirimize fayda sağlayacağımız yeteneklerimiz ya da imkanlarımız var ancak
                        duvarlar ardında saklı kalmış beceriler bunlar. Ve ihtiyaçlarımızı karşılayarak hayatımıza konfor katabilecek
                        kişiler bu duvarların ardındalar. Bize çok yakın olsalar da  bir o kadar ulaşması zorlar …
                        İşte VARMI tam burada bizlerin yardımına koşuyor. VARMI ile bu kişileri görebiliyor ve doğrudan mesaj atarak
                        ihtiyacımız olan hizmeti alabiliyoruz.
                        VARMI’da bulunan hizmetler birçok açıdan hayatlarımıza katkı sunuyor.
                        Ev temizliği, usta, oyun ablası, masaj, bahçevan, özel ders gibi internet üzerinden bulmaya zaten hızla
                        alıştığımız hizmetlerin yanısıra VARMI daha da ileri giderek hayatlarımızda ki birçok detaya dokunabiliyor.

                    </div>
                    <div className='watch-text' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.282" height="15.772" viewBox="0 0 13.282 15.772">
                            <path id="Path" d="M13.109,7.574.509.047a.326.326,0,0,0-.34,0A.362.362,0,0,0,0,.359V15.413a.362.362,0,0,0,.169.31.326.326,0,0,0,.34,0L13.109,8.2a.368.368,0,0,0,0-.624Z" transform="translate(0 0)" fill="#33bea4" />
                        </svg>&nbsp;
                        <span>Tanıtım Filmini İzle</span>
                    </div>
                </div>
                <div className='col-lg-4 col-12 d-none d-lg-block'>
                    <img src={require('../../Assets/png/Group 161.png')} className='card-phone-img ' />
                </div>
            </div>
            <LandingCard />
            <img src={require('../../Assets/png/varb999e.png')} style={{ float: 'right', width: '25vmax', marginTop: '30vmax' }} />
            <PaymentSteps />
        </div >
    )
}

export default Landing