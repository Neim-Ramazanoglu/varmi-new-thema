import React from 'react'
import apple from '../../Assets/svg/apple.svg'
import comment from '../../Assets/svg/Path1.svg'

function Users() {
    return (
        <div>
            <div className='text-center fw-bold fs-2 mt-5 mb-5'>
                Kullanıcılarımız ne diyor?
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3 col-xl-2 col-12 ">
                    <div className="users-card py-3">
                        <div className="flex-container space-between px-4 mt-3">
                            <div className="fs-6 fw-bold">
                                Keyfini çıkarmak bu kadar
                                kolay olmadı
                            </div>
                            <div>
                                <img src={apple} style={{ width: '1.5vmax' }} />
                            </div>
                        </div>
                        <div className='px-4 text-muted' style={{ fontSize: '0.75rem' }}>sonerbaburoglu</div>
                        <div className='px-4 mt-4 line-clamp-comment' style={{ fontSize: '0.95rem' }}>
                            Hem üreticiye hem de hizmet/ürün arayanı buluşturan, mesafe ve konuma göre ürün seçenekleri filtreleyen
                            ve mağduriyet yaratmayan ilk ve tek platform. Firma yetkilileri de oldukça ilgili.
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-xl-2 col-12">
                    <div className="users-card py-3">
                        <div className="flex-container space-between px-4 mt-3">
                            <div className="fs-6 fw-bold">
                                Dayanışma Ruhu
                            </div>
                            <div>
                                <img src={apple} style={{ width: '1.5vmax' }} />
                            </div>
                        </div>
                        <div className='px-4 text-muted' style={{ fontSize: '0.75rem' }}>Yiğitnuri39</div>
                        <div className='px-4 mt-4 line-clamp-comment' style={{ fontSize: '0.95rem' }}>
                            Günlük hayattaki bir çok işimizi pratikçe halledebileceğimiz güzel bir uygulama. Güzel düşünülmüş,
                            zamanla herkesin bilip kullandığı bir uygulama olacak!
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-xl-2 col-12">
                    <div className="users-card py-3">
                        <div className="flex-container space-between px-4 mt-3">
                            <div className="fs-6 fw-bold">
                                sade, güzel ve işlevsel👍🏻
                            </div>
                            <div>
                                <img src={apple} style={{ width: '1.5vmax' }} />
                            </div>
                        </div>
                        <div className='px-4 text-muted' style={{ fontSize: '0.75rem' }}>Attiii25</div>
                        <div className='px-4 mt-4 line-clamp-comment' style={{ fontSize: '0.95rem' }}>
                            Amacına yönelik basit ve şık bir arayüzü var. Temsilcileri çok ilgili bir sıkıntı olduğunda yanıt
                            alabileceğiniz konuya hakim birisinin olması çok güzel 👌🏻
                        </div>
                    </div>
                </div>


            </div>
            <div className='comment'>
                <img src={comment} />
                <span style={{ color: '#33bea4', paddingLeft: '15px', fontSize: '16px' }}>Tüm Yorumları Gör</span>
            </div>
        </div>
    )
}

export default Users