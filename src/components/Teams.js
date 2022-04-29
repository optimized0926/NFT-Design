import React from 'react'
import { Container, Row } from 'reactstrap'



import drawing_up_left from '../assets/img/teams/Drawing_Up_left.png'
import drawing_right from '../assets/img/teams/Drawing-Right.png'
import alien from '../assets/img/teams/alien.png'
import arty from '../assets/img/teams/arty.png'
import blockchain_whale from '../assets/img/teams/blockchain-whale.png'
import highroller from '../assets/img/teams/highroller.png'
import cribboi from '../assets/img/teams/Cribboi.png'
import SubTeams from './Sub.Teams'

import alien_img from '../assets/img/teams/aliens/Doodle-new.png'
import arty_img from '../assets/img/teams/artys/Doodle-new.png'
import blockchain_whale_img from '../assets/img/teams/blockchain_whales/Doodle-new.png'
import highroller_img from '../assets/img/teams/high_rollers/Doodle-new.png'
import cribboi_img from '../assets/img/teams/crib_bois/Doodle-new.png'

const AlienText = `
                    Devs, Discord Masters, Marketers, Web 3 techies and <br/>
                    Business owners. This will be your fav place in <br/>
                    the metaverse, As part of their main focus, <br/>
                    aliens build, create, work and grow together<br/>
                    being in the alien team will give you oppurtunities<br/>
                    to hangout with those at high levels<br/>
                `
const ArtyText = `
                    Artists, graphic designers, music producers,<br/>
                    are joining forces to form Arty, a place where<br/>
                    they can collectively create and collaborate. <br/>
                    There will be many opportunities for <br/>
                    artists in the team<br/>
                `

const BlockchainWhaleText = `
                    The Whales of the Blockchain are a group of <br/>
                    crypto traders, miners, and blockchain experts<br/>
                    dedicated to sharing tips, signals, market <br/>
                    updates and also, to have fun <br/>
                    with each other<br/>
                `
const HighrollerText = `
                    For those who like to risk, especially <br/>
                    casino gamblers and NFT flippers, <br/>
                    High Rollers is a team dedicated to discussing <br/>
                    chances and opportunities. <br/>
                `

const CribboiText = `
                    We cater to rule breakers, gamers, and mob, <br/>
                    so whether you are one of them or not, <br/>
                    this is the perfect place to take a pause from <br/>
                    your busy life and unwind with the homies. <br/>
                    Enjoy the good vibes.<br/>
                `

export default function Teams() {
    return (
        <div className='teams component' id="teams">
            <Container fluid>
                <Row className='ml-0 mr-0 mb-5 justify-content-center flex-column position-relative' style={{ gap: "2vw" }}>
                    <div>
                        <h1 className='component-header text-center logo-text network-font pb-5'>
                            Teams
                        </h1>
                    </div>
                    <div>
                        <h3 className='teams-text-content cocosharp-font'>
                            The beautiful doodles drawn in the background of your BagUP NFT represents<br />
                            your team membership. Choose your theme and team
                        </h3>
                    </div>
                    <div className='teams-img-wrapper d-flex flex-row m-auto justify-content-around w-75'>
                        <img src={alien} alt="Alien" className='community-teaming-img' />
                        <img src={arty} alt="Arty" className='community-teaming-img' />
                        <img src={blockchain_whale} alt="Blockchain-Whale" className='community-teaming-img' />
                        <img src={highroller} alt="Highroller" className='community-teaming-img' />
                        <img src={cribboi} alt="Cribboi" className='community-teaming-img' />
                    </div>
                    <img src={drawing_up_left} className="position-absolute drawing-up-left" alt="Drawing Up Left" />
                    <img src={drawing_right} className="position-absolute drawing-right" alt="Drawing Right" />
                </Row>

                {/* SUB COMPONENT */}
                <SubTeams
                    logo={alien}
                    header="Sage!"
                    text={AlienText}
                    imgSrc={alien_img}
                    color="#144f70"
                />
                <SubTeams 
                    logo={arty}
                    header="Creative Gang"
                    text={ArtyText}
                    imgSrc={arty_img}
                    color="#643298"
                />
                <SubTeams
                    logo={blockchain_whale}
                    header="Pump or dump?"
                    text={BlockchainWhaleText}
                    imgSrc={blockchain_whale_img}
                    color="#006d77"
                />
                <SubTeams
                    logo={highroller}
                    header="Risky ?"
                    text={HighrollerText}
                    imgSrc={highroller_img}
                    color="#882967"
                    big
                />
                <SubTeams
                    logo={cribboi}
                    header="Good vibes only"
                    text={CribboiText}
                    imgSrc={cribboi_img}
                    color="#503b31"
                    last
                />
            </Container>
        </div>
    )
}