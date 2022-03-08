import React from 'react'
import { Carousel } from 'react-bootstrap'
import aloefit from "../../assets/aloefit.JPG"
import aloefit2 from "../../assets/aloefit2.JPG"

const Aloefit = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={aloefit}
      alt="aloefit"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={aloefit2}
      alt="aloefit2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>Aloefit</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>Most dependable natural health restorative for all age group.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Strengthens body's immune system.<br/>
                Stimulates appetite.<br/>
                Ensures proper digestion and better assimilation.<br/>
                Improves the power of memory.
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default Aloefit;