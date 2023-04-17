import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Slider = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          <Link exact to='/form'>
            <Button variant='primary'>Обратная связь</Button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/second.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider