import React from 'react'
import {Button , Row , Col} from "react-bootstrap"
import ".././css/cuisine-btn.css"

function CuisineBtn() {
  return (
    
      <Row className = "btn">
        <Col className="button" >
          <Button href ="/American" className="mr-1 mt-3" variant="info">American</Button>{' '}
          <Button href ="/Asian"  className="mr-4 mt-3" variant="info">Asian</Button>{' '}
          <Button href ="/Caribbean"  className="mr-4 mt-3" variant="info">Caribbean</Button>{' '}
          <Button href ="/French"  className="mr-4 mt-3" variant="info">French</Button>{' '}
          <Button href ="/Indian"  className="mr-4 mt-3" variant="info">Indian</Button>{' '}
        </Col>

        <Col >
          <Button href ="/Italian"  className="mr-1 mt-3" variant="info">Italian</Button>{' '}
          <Button href ="/Japanese"  className="mr-4 mt-3" variant="info">Japanese</Button>{' '}
          <Button href ="/Mexican"  className="mr-4 mt-3" variant="info">Mexican</Button>{' '}
          <Button href ="/Meditarean"  className="mr-4 mt-3" variant="info">Meditarean</Button>{' '}
          <Button href ="/Nordic"  className="mr-4 mt-3" variant="info">Nordic</Button>{' '}
        </Col>
      </Row>
  )
}

export default CuisineBtn
