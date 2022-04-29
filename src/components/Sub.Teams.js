import React from 'react'
import { Container, Row } from 'reactstrap'

export default function SubTeams(props) {

    return (
        <div className='ml-5 mr-5 justify-content-center sub-teams-component position-relative' style={{ background: "white", gap: "2vw", paddingBottom: "7vw", marginBottom: props ? props.last? 0 : "1vw" : "1vw" }}>
            <Container>
                <Row className='justify-content-center d-flex flex-column cocosharp-font' style={{ gap: "2vw" }}>
                    <div className='pt-5'>
                        <img src={props ? props.logo : ""} alt="Alien Logo" style={{width: "20vw"}} />
                    </div>
                    <div>
                        <h1 style={{ color: props ? props.color : "black", fontSize: "3.3vw" }}>
                            <b>{props ? props.header : ""}</b>
                        </h1>
                    </div>
                    <div>
                        <h1 style={{ color: props ? props.color : "black", fontSize: "2vw" }} dangerouslySetInnerHTML={{ __html: props ? props.text : "" }}>

                        </h1>
                    </div>
                    <img src={props? props.imgSrc: ""} alt="Sub Teams Item Img" className='position-absolute' style={{right: 0, width: props ? props.big ? "16vw" : "24vw" : "24vw", bottom: "6vw",}} />
                </Row>
            </Container>
        </div>
    )
}
