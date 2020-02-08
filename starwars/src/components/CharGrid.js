import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Container, Row, } from "reactstrap";
import CharCard from "./Card.js"

 const CharGrid = () => {

    initialState = [];
    const [pplData, setpplData] = useState(initialState);
    let pplVal = ''

    let useEffectFn = () => {

        axios
            .get(`https://swapi.co/api/people/${pplVal}`)
            .then(response => {
                setpplData(response.data)
            })
            .catch(error => console.log(error))
    };

    useEffect(useEffectFn, [])

    console.log("set of peeople", pplData)

    return (
        <div>
            <Container>
                <Row>
                    <CharCard data={pplData} />
                </Row>
            </Container>
        </div>
    )
}

export default CharGrid;