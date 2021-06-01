import React from 'react'
import {Card,Button} from "react-bootstrap"


function Mov ({filme}) {
    return (
        <div className="cardfilm"> 
            {
                filme.map(element => 
                    <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={element.Images} />
                    <Card.Body>
                    <Card.Title> {element.Title} </Card.Title>
                    <Card.Text>
                         {element.Released}
                    </Card.Text>
                    <Button variant="primary"> Add to Favorits </Button>
                    </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}
export default Mov 
