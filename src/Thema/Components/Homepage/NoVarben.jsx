import React from 'react'

function NoVarben() {
    return (
        <div className="no-varben-textarea mb-5">
            <img src={require('../../Assets/png/varbe.png')} className='varben-icon' />
            <div className="no-varben-text">
                Şu an için bulunduğun konuma yakın bu kadar varben bulunuyor.
                Binlerce varbenden sadece sana en yakınları gösteriyoruz.
            </div>
        </div>
    )
}

export default NoVarben