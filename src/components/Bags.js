import React from 'react'
import { Container, Row } from 'reactstrap'

import alpha from '../assets/img/bags/alpha.png'
import puro from '../assets/img/bags/Puro.png'
import bill from '../assets/img/bags/bill.png'
import iris from '../assets/img/bags/Iris.png'

export default function Bags() {
    return (
        <div className='bags component' id="bags">
            <Container fluid>
                <Row className='m-0 justify-content-center flex-column' style={{ gap: "2vw" }}>
                    <div className='bags-header'>
                        <h1 className='component-header text-center logo-text network-font pb-5'>
                            Bags
                        </h1>
                    </div>
                    <div className='bags-text-content'>
                        <h3 className='bags-text-content cocosharp-font'>
                            The items in the collection are carefully hand drawn and generated randomly.<br />
                            Each one has its own rarity and uniqueness,
                        </h3>
                    </div>
                    <div className='bags-img-wrapper d-flex flex-row m-auto justify-content-center'>
                        <img src={alpha} alt="Alpha" className='bags-img' />
                        <img src={iris} alt="Iris" className='bags-img' />
                        <img src={bill} alt="Bill" className='bags-img' />
                        <img src={puro} alt="Puro" className='bags-img' />
                    </div>
                    <div className=''>
                        <h3 className='bags-text-content cocosharp-font'>
                            the collection also includes 4 one-of-a-kinds, which are the most rare items
                        </h3>
                    </div>
                </Row>
            </Container>
        </div>
    )
}