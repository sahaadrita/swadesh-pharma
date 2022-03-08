import React from 'react'
import { Carousel } from 'react-bootstrap'
import h2liv from "../../assets/h2liv.JPG"
import h2liv2 from "../../assets/h2liv2.JPG"

const H2liv = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={h2liv}
      alt="h2liv"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={h2liv2}
      alt="h2liv2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>H2-Liv Forte</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>A strong sugar free hepatoprotective & hepatocorrective <br/> for all age group.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Protects hepatocytes from damage.<br/>
                Normalise and rejuvenate the liver.<br/>
                Ensure proper function of liver.<br/>
                Reduce the inflammation.
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default H2liv;