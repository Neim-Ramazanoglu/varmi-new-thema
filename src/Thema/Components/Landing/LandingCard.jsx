import React from 'react'

function LandingCard() {
    return (
        <div className='green-card'>
            <img src={require('../../Assets/png/mask-yellow.png')} style={{ zIndex: '-10', position: 'absolute', width: '20vmax', height: '5vmax', float: 'right', marginLeft: '80vmax' }} />
            <div style={{ height: '1vmax' }}></div>
            <div className="row" >
                <div className="col-6 offset-1"  >
                    <div className="row" style={{ marginTop: '2vmax' }}>
                        <div className="landing-card col-xl-3 col-4">
                            <img src={require('../../Assets/png/1-icon.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1vmax' }}>
                                Evden Ev Yemeği
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                İşten dönerken, yemeğini komşundan alabilirsin.
                            </div>
                        </div>
                        <div className="landing-card col-xl-3 col-4">
                            <img src={require('../../Assets/png/landing-car.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1vmax' }}>
                                Araba Temizliği
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                Araban park halindeyken, mahallenden biri arabanı temizleyebilir.
                            </div>
                        </div>
                        <div className="landing-card col-xl-3 col-4">
                            <img src={require('../../Assets/png/landing-box.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1vmax' }}>
                                Ulaşım / Nakliye
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                Evini taşırken komşunun aracından yararlanabilirsin.
                            </div>
                        </div>
                        <div className="landing-card col-3">
                            <img src={require('../../Assets/png/landing-repair.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1vmax' }}>
                                Yol Yardımı
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                Yolda mı kaldın?
                                Çevrende sana yardım edecek birçok kişi var.
                            </div>
                        </div>
                        <div className="landing-card col-3">
                            <img src={require('../../Assets/png/landing-aid.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1vmax' }}>
                                Sağlık Destek
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                Acil bir durumda
                                yakınındaki doktor ve hemşirelere ulaşabilirsin.
                            </div>
                        </div>
                        <div className="landing-card col-3">
                            <img src={require('../../Assets/png/landing-rent.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '2vmax' }}>
                                Komşudan
                                1         Kiralama
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                Bir günlük kamp için çadır almana gerek yok, komşundan alabilirsin.
                            </div>
                        </div>
                        <div className="landing-card col-3">
                            <img src={require('../../Assets/png/landing-clean.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1vmax' }}>
                                Temizlik / Hijyen
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                Yakınında ütünü yapmak, evini temizlemek isteyen insanlar var.
                            </div>
                        </div>
                        <div className="landing-card col-3">
                            <img src={require('../../Assets/png/landing-animal.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1vmax' }}>
                                Evcil Hayvan Bakımı
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                Sevimli dostlarınızı emanet edebileceğin güvenilir insanlar bulabilirsin.
                            </div>
                        </div>
                        <div className="landing-card col-3">
                            <img src={require('../../Assets/png/landing-maestor.png')} />
                            <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1vmax' }}>
                                Ustalık
                            </div>
                            <div style={{ color: '#696871', marginTop: '1vmax', fontSize: '12px' }}>
                                Çivi çakmayı bile beceremiyorsan, bu kategori tam sana göre.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4" style={{ marginTop: '8vmax' }}>
                    <div style={{ color: 'white', fontSize: '3vmax', fontWeight: 'bold' }}>
                        VARMI hayatınıza bir çok detayda kolaylık getiriyor
                    </div>
                    <div style={{ marginTop: '2vmax', fontSize: '1.2vmax', color: 'white', opacity: '0.7' }}>
                        Emeğini ortaya koyarak hayatınızı kolaylaştımak isteyen binlerce kişi hemen yanıbaşınızda!
                        Ve falcıdan çilingire, kuryeden kişisel bakıma daha birçok hizmet ile VARMI, herkesin becerileri ile
                        çevresine fayda sağladığı bir toplumsal bağ oluşturuyor.
                    </div>
                    <button type="button" className="btn btn-outline-light mt-5">Detaylı Bilgi</button>
                </div>
            </div>
        </div>
    )
}

export default LandingCard