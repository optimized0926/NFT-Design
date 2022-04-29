import React from 'react'
import { Container, Row } from 'reactstrap'

export default function Faq() {
    return (
        <div className='faq component' id="faq">
            <Container fluid>
                <Row className='justify-content-center flex-column' style={{gap: "1vw", paddingBottom: "6vw"}}>
                    <div>
                        <h1 className='component-header text-center logo-text network-font pb-5'>
                            Faq
                        </h1>
                    </div>
                    <div>
                        <h1 className='component-text-header'>
                            What is Bagup gang ?
                        </h1>
                        <p className='component-text-content'>
                            a limited quantity collection of 2.222 unique etheruem NFT’s<br />
                            carefully handdrawn and programmatically generated, each NFT gives a<br />
                            membership access to the gang<br />
                        </p>
                    </div>
                    <div>
                        <h1 className='component-text-header'>
                            Utility from holding a bagup NFT
                        </h1>
                        <p className='component-text-content'>
                            - As a team, we are striving towards the same goal, and you will<br />
                            be a vital part of the team<br />
                            -This nft will give you memebership acces to a super multi-talented community<br />
                            -2.222 Holders will claim one free NFT from our next  project<br />
                            -BagUP is your ticket to a wide variety of events and experiences<br />
                            we will be launching soon<br />
                            - Acces to private Raffles, giveaways, and airdrops<br />
                            - 50% discount to start your own NFT project<br />
                        </p>
                    </div>
                    <div>
                        <h1 className='component-text-header'>
                            What is the realise date and mint price ?
                        </h1>
                        <p className='component-text-content'>
                            X
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}