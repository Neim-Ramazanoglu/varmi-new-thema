import React from 'react'
import paymentSteps from '../../Assets/svg/odeme.svg'
function PaymentSteps() {
    return (
        <div className='payment-steps '  >
            <div style={{ fontSize: '3vmax', fontWeight: 'bold' }}>
                Ödeme Adımları
            </div>
            <img src={paymentSteps} className='payment-svg' />
        </div>
    )
}

export default PaymentSteps