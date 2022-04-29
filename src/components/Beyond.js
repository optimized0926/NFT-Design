import React from 'react'

import bear from '../assets/img/beyond/Bear.png'
import bull from '../assets/img/beyond/Bull.png'
import cup from '../assets/img/beyond/Doodle-cup.png'
import diamond from '../assets/img/beyond/Doodle-diamond.png'

import alexlitpng from '../assets/img/beyond/beyond-sub/alexlitpng.png'
import sublogo from '../assets/img/beyond/sub/Logo.png'
import methusa from '../assets/img/beyond/beyond-sub/methusa.png'
import mmpmg from '../assets/img/beyond/beyond-sub/mmpmg.png'
import pngcyber from '../assets/img/beyond/beyond-sub/pngcyber.png'


export default function Beyond() {
    return (
        <div className='beyond' id="beyond">
            <div className='main-beyond'>
                <div className='text-center beyond-text-wrapper pb-5'>
                    <h1 className='text-center logo-text network-font'>Beyond</h1>
                    <h1 className='beyond-text-header cocosharp-font pt-3'>
                        FOR THE COMMUNITY, BY THE COMMUNITY
                    </h1>
                    <h3 className='beyond-text-content cocosharp-font'>
                        a metaberse brand made up of people<br />
                        from various specializations including<br />
                        blockchain and crypto experts, traders, devs<br />
                        graphic designers, artists, marketers, managers,<br />
                        and collectors all uniting together to build a<br />
                        strong web3 brand that creates dope projects.<br />
                        BagUp gang is a limited collection of <b>2,222</b> avatars that gives you<br />
                        access to be part of beyond, you will be able to enter exclusive<br />
                        events and festivals, receive airdrops, access to<br />
                        private giveaways and raffles,<br />
                        make votes for beyond decisions and more...
                    </h3>
                    <br />
                    <h2 className='beyond-text-footer network-font mb-0'>
                        {/* BEYOND&nbsp; IS&nbsp; BUILT&nbsp; AND&nbsp; OWNED&nbsp; BY&nbsp; THE&nbsp; COMMUNITY */}
                        beyond&nbsp; is&nbsp; built&nbsp; and&nbsp; owned&nbsp; by&nbsp; the&nbsp; community
                    </h2>
                </div>
                {/* <div className='display-flex justify-content-evenly'> */}
                <img src={diamond} className='main-beyond-img diamond' alt="diamond" />
                <img src={bear} className='main-beyond-img bear' alt="bear" />
                {/* </div> */}
                <img src={bull} className='main-beyond-img bull' alt="bull" />
                <img src={cup} className='main-beyond-img cup' alt="cup" />
            </div>

            {/* SUB BEYOND */}
            <div className='sub-beyond'>
                {/* <SubLogo /> */}
                {/* <Container fluid> */}
                {/* <Row> */}
                <div>
                    <img src={sublogo} className="sub-logo pt-5" alt="sub-logo" />
                </div>
                <div className='position-relative sub-beyond-img-wrapper'>
                    {/* <div> */}
                        <img src={alexlitpng} className="sub-beyond-img alexlitpng" alt="alexlitpng" />
                    {/* </div>
                    <div> */}
                        <img src={mmpmg} className="sub-beyond-img mmpmg" alt="mmpmg" />
                    {/* </div>
                    <div> */}
                        <img src={pngcyber} className="sub-beyond-img pngcyber" alt="pngcyber" />
                    {/* </div>
                    <div> */}
                        <img src={methusa} className="sub-beyond-img methusa" alt="methusa" />
                    {/* </div> */}
                </div>
                {/* </Row> */}
                {/* </Container> */}
            </div>
        </div>
    )
}