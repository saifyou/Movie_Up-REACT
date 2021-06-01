import React from 'react'
import {Carousel, Item, img} from 'react-bootstrap'

function Carousl (){ 
    return ( 
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://free4kwallpapers.com/uploads/originals/2016/07/08/warcraft-garona-anduin-lothar-wallpaper.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.guidingtech.com/imager/assets/222083/sekiro-shadows-die-twice-wallpaper-4k-1080p-lead_1584714de1996cb973b8f66854d0c54f.jpg?1554570098"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Films series Monga</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hdwallsource.com/img/2014/6/wallpapers-hd-8000-8331-hd-wallpapers.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Films series Monga</h3>
      <p>What you see is What you get</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default Carousl