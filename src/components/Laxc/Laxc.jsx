import React from 'react'
import {Carousel} from 'react-bootstrap'
import laxc from "../../assets/laxc.JPG"
import laxc2 from "../../assets/laxc2.JPG"

const Laxc = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={laxc}
      alt="laxc"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={laxc2}
      alt="laxc2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>LAXC</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>Real laxative to overcome from constipation, <br/>fully sugar free.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Helps in improving digestion.<br/>
                Keeps the body free from harmful toxins.<br/>
                Leaves normal fluid and electrolyte balance undisturbed.<br/>
                Eliminates strain during evacuation.
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default Laxc;