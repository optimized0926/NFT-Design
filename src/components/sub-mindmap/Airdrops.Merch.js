import React from 'react'

import logo from '../../assets/img/mindmap/airdrops_merch/Logo-new.png'

export default function AirdropsMerch() {
    return (
        <div className='sub-component w-100 p-5 position-relative'>
            <div className='sub-component-text'>
                <h1 className='sub-component-text-header text-left'>
                    <b>AIRDROPS & MERCH</b>
                </h1>
            </div>
            <div className='sub-component-text sub-component-text-content' style={{letterSpacing: "-1px"}}>
                <p>
                    <b>Flash Drops and Giveways</b><br />
                    the first to interract, the one that wins. Keep<br />
                    an eye on our social media accounts u dont wanna miss.<br />
                    Various  giveaways will be announced in our twitter<br />
                    account so stay tuned<br />
                    <b>Airdrops <span className='bg-red'>Progressing</span></b><br />
                    2.222 Bag up holders will recive a  unique collectible<br />
                    from the coming collection<br />
                    <b>Merch <span className='bg-red'>Exploring</span></b><br />
                    We already have the experience of creating<br />
                    high quality merch, we will be offering our holders<br />
                    a unique merch store soon<br />
                </p>
            </div>
            <img src={logo} alt="Metaverse" className='sub-component-logo position-absolute airdrops-logo' />
        </div>
    )
}
