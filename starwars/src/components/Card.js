import React from "react";
import { Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from "reactstrap";

const CharCard = props => {

    console.log("data", props.data)

    return (
        <div>                
            <Card key={props.data.name}>
                <CardHeader tag="h3">{props.data.name}</CardHeader>
                <CardBody>
                    <CardTitle>Character Information</CardTitle>
                    <CardText>
                        <p>Gender: {props.data.gender}</p>
                        <p>Birth Year: {props.data.birth_year}</p>
                        <p>Height: {props.data.height}</p>
                        <p>Mass: {props.data.mass}</p>
                    </CardText>
                </CardBody>
            </Card> 
        </div>
    );
}

export default CharCard;