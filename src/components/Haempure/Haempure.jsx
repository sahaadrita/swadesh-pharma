import React from 'react'
import { Carousel } from 'react-bootstrap'
import haempure from "../../assets/haempure.JPG"
import haempure2 from "../../assets/haempure2.JPG"
const Haempure = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={300}
      width={250}
      src={haempure}
      alt="haempure"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={300}
      width={250}
      src={haempure2}
      alt="haempure2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>Haem Pure</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>The most reliable approach to make blood pure.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Purifies blood and tones skin naturally.<br/>
                Brings blood to normal healthy state.<br/>
                Protects skin from free radicals.<br/>
                Helps in removing the ill effects of impure blood.<br/>
                Checks infection and allergies.
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default Haempure;