import React from 'react'

import logo from '../../assets/img/mindmap/community_teaming/Logo-new.png'
import alien from '../../assets/img/mindmap/community_teaming/alien.png'
import arty from '../../assets/img/mindmap/community_teaming/arty.png'
import blockchain_whale from '../../assets/img/mindmap/community_teaming/blockchain-whale.png'
import highroller2 from '../../assets/img/mindmap/community_teaming/highroller2.png'
import streetboi from '../../assets/img/mindmap/community_teaming/streetboi.png'

export default function CommunityTeaming() {
    return (
        <div className='sub-component w-100 p-5 position-relative'>
            <div className='sub-component-text'>
                <h1 className='sub-component-text-header text-left'>
                    <b>COMMUNITY & TEAMING</b>
                </h1>
            </div>
            <div className='sub-component-text sub-component-text-content'>
                <p>
                    - Sometimes your circle decreases in size but increases in value.<br />
                    In order to make it easier for the community to connect and get to know one another,<br />
                    we have chosen to reduce the number of holders, community is always first.<br />
                    - Our first priority is to make you feel comfortable within the community.<br />
                    We created the concept of teams where you can hang out with people<br />
                    who share the same interests and skills as you<br />
                    to relax, create, and have fun together<br />
                    - More about the teams system :<br />
                </p>
            </div>
            <div className='text-left d-flex justify-content-between community-teaming-img-wrapper'>
                <img src={alien} alt="Alien" className='community-teaming-img' />
                <img src={arty} alt="Arty" className='community-teaming-img'/>
                <img src={blockchain_whale} alt="Blockchain-Whale" className='community-teaming-img' />
                <img src={highroller2} alt="Highroller2" className='community-teaming-img' />
                <img src={streetboi} alt="Streetboi" className='community-teaming-img' />
            </div>
            <img src={logo} alt="Community & Teaming Logo" className='sub-component-logo position-absolute' style={{width: "35vw"}} />
        </div>
    )
}