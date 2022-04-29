import React from 'react'

import logo from '../../assets/img/mindmap/vision/Logo-new.png'

export default function Vision() {
    return (
        <div className='sub-component w-100 p-5 position-relative'>
            <div className='sub-component-text'>
                <h1 className='sub-component-text-header text-left'>
                    <b>VISION</b>
                </h1>
            </div>
            <div className='sub-component-text sub-component-text-content'>
                <p>
                    It's just you! with a <b>BAG UP</b><br />
                    BagUP gang members are taggers of the metaverse, they are in<br />
                    an adventure to leave their tags all over the world.<br />
                    Using dope bags to cover up, they keep their<br />
                    identities a secret in order to not get caught and bagged up!<br />
                    Their adventure together will led them to get to know each other<br /><br />
                    <b>
                        Ready to take this adventure ?<br />
                        get your baggie to have a membership access to the gang
                    </b>
                </p>
            </div>

            <img src={logo} alt="Vision Logo" className="vision-logo position-absolute" />
        </div>
    )
}