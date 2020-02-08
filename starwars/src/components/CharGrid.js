import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Container, Row, Col } from "reactstrap";
import CharCard from "./Card.js"

 const CharGrid = () => {

    let initialState = [];
    const [pplData, setpplData] = useState(initialState);
    let pplVal = ''

    let useEffectFn = () => {

        axios
            .get(`https://swapi.co/api/people/${pplVal}`)
            .then(response => {
                setpplData(response.data.results)
                console.log(pplData)
            })
            .catch(error => console.log(error))
    };

    useEffect(useEffectFn, [])

    let peopleCards = pplData.map(person => {
        return (
            <Col xs="4">
                <CharCard data={person}/>
            </Col>
        )
    })

    return (
        <div>
            <Container className='.d-flex'>
                <Row>
                        {peopleCards}
                </Row>
            </Container>
        </div>
    )
}

export default CharGrid;