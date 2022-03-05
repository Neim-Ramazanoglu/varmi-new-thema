import React from 'react'
import star from '../../Assets/png/filled-star.svg'
function ProfileCard() {
    return (
        <div className="profile-card">
            <div className="col-3">
                <div class="p-card-header">
                    <img class="p-card-img" alt="User image" src={require('../../Assets/png/1.png')} />
                </div>
                <div className="p-card-body">
                    <div className="row">
                        <div className="col-5 left-rating">
                            <img src={star} />
                        </div>
                        <div className="col-5 offset-2 right-rating">selam</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard