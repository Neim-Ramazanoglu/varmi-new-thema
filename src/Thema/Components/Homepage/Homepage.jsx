import React from 'react'
import style from '../../Assets/css/style.css'
import Category from './Category'
import NoVarben from './NoVarben'
import ProfileCard from './ProfileCard'
function Homepage() {
    return (
        <div className='main'>
            <div className="search-wrapper">
                <div className="search-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.46vw" height="1.46vw" viewBox="0 0 28.207 28.207">
                        <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(0.5 0.5)">
                            <path id="Path_11" data-name="Path 11" d="M28.5,16.5a12,12,0,1,1-12-12,12,12,0,0,1,12,12Z" transform="translate(-4.5 -4.5)" fill="none" stroke="#3BC9B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                            <path id="Path_12" data-name="Path 12" d="M31.5,31.5l-6.525-6.525" transform="translate(-4.5 -4.5)" fill="none" stroke="#3BC9B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                        </g>
                    </svg>
                    <input className='search-input' placeholder='Ara'></input>
                </div>
            </div>
            <Category />
            <ProfileCard />
            <NoVarben />
        </div>
    )
}

export default Homepage