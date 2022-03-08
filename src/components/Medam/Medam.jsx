import React from 'react'
import { Carousel } from 'react-bootstrap'
import medam from "../../assets/medam.JPG"
import medam2 from "../../assets/medam2.JPG"

const Medam = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={medam}
      alt="medam"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={medam2}
      alt="medam2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>MEDAM</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>Unique preparation for vigour & vitality.<br/>
            Specially for women.
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Eliminates stress contibuting tension.<br/>
                Creates relaxed and romantic environment.<br/>
                Provides nourishment emotionally and nutritionally.<br/>
               
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default Medam;