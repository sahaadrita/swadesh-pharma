import React from 'react'
import { Carousel } from 'react-bootstrap'
import Roaforte from "../../assets/Roaforte.JPG"
import Roaforte2 from "../../assets/Roaforte2.JPG"

const RoaForte = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={Roaforte}
      alt="Roaforte"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={Roaforte2}
      alt="Roaforte2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>ROA FORTE</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>Unique preparation for Rhematoid and Osteoarthritis.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Effectively relieves inflamation and pain.<br/>
                restores metabolic activities by promoting digestion.<br/>
                Ensures elimination of toxic elements.<br/>
                Provides lubrication of joints.
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default RoaForte;