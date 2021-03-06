import React from 'react'
import LandingCard from './LandingCard'
import PaymentSteps from './PaymentSteps'
import Users from './Users'
import WhyVarmı from './WhyVarmı'
import pin from '../../Assets/svg/pin.svg'
import sen from '../../Assets/svg/SEN_BURADASIN6.svg'
import sen1 from '../../Assets/svg/SEN_BURADASIN1.svg'

function Landing() {
    return (
        <div>
            <img src={require('../../Assets/png/Oval.png')} className='oval-bg' />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <img src={require('../../Assets/png/Group 325.png')} className='elipse-bg' />
                <img src={pin} className='pin' />
                <div className='upper-text'>Sen Buradasın</div>
                <div className='lower-text'>Aradığın Hizmetler Yanıbaşında</div>
            </div>
            <div className="search-wrapper-landing" >
                <div className="landing-search">
                    <img src={require('../../Assets/png/Icon feather-search.png')} style={{ width: '3vmax' }} />
                    <input className='landing-search-input' placeholder='Ara'></input>
                </div>
            </div>
            <div className="flex-container space-between" style={{ marginTop: '22vmax' }}>
                <div className='landing-text'>
                    <div className='how-varmı-works'>
                        VARMI Nasıl Çalışır?
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
            <div className='margining'></div>
            <img src={require('../../Assets/png/varb999e.png')} className='varmı-icon d-none d-lg-block' />
            <PaymentSteps />
            <WhyVarmı />
            <Users />
        </div >
    )
}

export default Landing