import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Vision from './sub-mindmap/Vision'
import CommunityTeaming from './sub-mindmap/Community.Teaming'
import Metaverse from './sub-mindmap/Metaverse'

import logo from '../assets/img/mindmap/Mindmap.png'
import vision from '../assets/img/mindmap/Vision.png'
import airdrops_merch from '../assets/img/mindmap/Airdrops_merch.png'
import community_testing from '../assets/img/mindmap/Community_teaming.png'
import metaverse from '../assets/img/mindmap/Metaverse.png'
import investmentkey from '../assets/img/mindmap/Key.png'
import AirdropsMerch from './sub-mindmap/Airdrops.Merch'
import InvestmentKey from './sub-mindmap/Investment.Key'

export default function Mindmap() {
    return (
        <>
            <div className='component mindmap pt-2' id="mindmap">
                <Container fluid>
                    <Row className='m-0'>
                        <img src={logo} alt="MindMap-Logo" className='mindmap-logo' />
                    </Row>
                    <Row className='m-0'>
                        <Col md="6" className='flex-column d-flex justify-content-between mindmap-img'>
                            <img src={vision} alt="Vision" className='mindmap-img' />
                            <img src={airdrops_merch} alt="Airdrops & Merch" className='mindmap-img' />
                            <img src={metaverse} alt="Metaverse" className='mindmap-img' />
                        </Col>
                        <Col md="6" className='flex-column d-flex mindmap-img mindmap-img-right'>
                            <img src={community_testing} alt="Community & Testing" className='mindmap-img' />
                            <img src={investmentkey} alt="Investment Key" className='mindmap-img' />
                        </Col>
                    </Row>

                    {/*---------- SUB COMPONENT ----------- */}

                    <Row className='m-0 sub-component-wrapper'>
                        <Vision />
                        <CommunityTeaming />
                        <Metaverse />
                        <AirdropsMerch />
                        <InvestmentKey />
                    </Row>
                </Container>
            </div>
        </>
    )
}