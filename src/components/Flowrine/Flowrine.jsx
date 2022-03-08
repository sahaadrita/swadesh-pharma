import React from 'react'
import { Carousel } from 'react-bootstrap'
import Flowrine from "../../assets/Flowrine.JPG"
import Flowrine2 from "../../assets/Flowrine2.JPG"

const FlowrineDetails = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={Flowrine}
      alt="Flowrine"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={Flowrine2}
      alt="Flowrine2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>Flow-Rine</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>The best choice for the smooth flow of urine, <br/>Sugar free.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Reduces increased blood urea Flow-rine.<br/>
                Reduces the residual urine in bladder.<br/>
                Improves the tone of urinary bladder.<br/>
                Increases the expulsive force of urination.
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default FlowrineDetails;