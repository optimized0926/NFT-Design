import React from 'react'

import logo from '../../assets/img/mindmap/metaverse/Logo-new.png'

export default function Metaverse() {
    return (
        <div className='sub-component w-100 p-5 position-relative'>
            <div className='sub-component-text'>
                <h1 className='sub-component-text-header text-left'>
                    <b>METAVERSE</b>
                </h1>
            </div>
            <div className='sub-component-text sub-component-text-content'  style={{letterSpacing: "-1px"}}>
                <p>
                    in our way to finish the adventure, we will be lost<br/>
                    in the metaverse trying to find the crib.<br/>
                    As the digital world develops, we will follow along.<br/>
                    We are always open to new ideas and updates<br/>

                    <b>Art and music festivals <span className='bg-red'>Progressing</span></b><br/>
                    your BAGUP will be your ticket to virtual art and music<br/>
                    festivals, artists from our community will have the chances<br/>
                    to expose their art and shine<br/>

                    <b>The Crib <span className='bg-red'>Exploring</span></b><br/>
                    all gang members meet<br/>
                    at the crib which is their favorite virtual<br/>
                    place in the metaverse.<br/>
                </p>
            </div>
            <img src={logo} alt="Metaverse" className='sub-component-logo position-absolute metaverse-logo' />

        </div>
    )
}