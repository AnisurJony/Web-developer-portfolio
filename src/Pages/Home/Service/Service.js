import React from 'react';
import './Service.css';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{
                backgroundColor: 'gray', borderRadius: '5px', color: 'white'
            }}
            onClick={decoratedOnClick}
        >
            {children}
        </button >
    );
}

const Service = ({ service }) => {

    console.log(service)
    const { d1, d2, d3, d4, name, description, img } = service;


    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>

            <p className="px-3">{description}</p>

            <Accordion defaultActiveKey="0">

                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="1">Description</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <div className='container text-start'>
                                <p>  {d1}</p>
                                <p>  {d2}</p>
                                <p>  {d3}</p>
                                <p>  {d4}</p>

                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>
    );
};

export default Service;