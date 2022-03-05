import React from 'react'

function NoVarben() {
    return (
        <div className="col-7 offset-3">
            <div className="no-varben-textarea">
                <img src={require('../../Assets/png/varbe.png')} className='varben-icon' />
                <div className="no-varben-text">
                    Şu an için bulunduğun konuma yakın bu kadar varben bulunuyor.
                    Binlerce varbenden sadece sana en yakınları gösteriyoruz.
                </div>
            </div>
        </div>
    )
}

export default NoVarben