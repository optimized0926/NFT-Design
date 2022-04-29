import React from 'react'

import logo from '../../assets/img/mindmap/investment/Logo-new.png'

export default function InvestmentKey() {
    return (
        <div className='sub-component w-100 p-5 position-relative'>
            <div className='sub-component-text'>
                <h1 className='sub-component-text-header text-left'>
                    <b>YOUR INVESTMENT KEY</b>
                </h1>
            </div>
            <div className='sub-component-text sub-component-text-content'>
                <p>
                    In collaboration with Omerta geeks,<br/>
                    we would like to announce that BagUP holders who are<br/>
                    interested in starting their own NFT projects can<br/>
                    take advantage of 50% discount on all NFT services,<br/>
                    including art services, website and discord setups and security,<br/>
                    smart contracts, etc..<br/>
                    Check out our discord for more informations<br/>
                </p>
            </div>
            <img src={logo} alt="Investment Key Logo" className='sub-component-logo position-absolute investment-key-logo' />
        </div>
    )
}
