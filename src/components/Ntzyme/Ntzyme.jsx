import React from 'react'
import ntzyme2 from "../../assets/ntzyme2.JPG"
import ntzyme from "../../assets/ntzyme.JPG"
import { Carousel } from 'react-bootstrap'
const Ntzyme = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={ntzyme}
      alt="ntzyme"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={ntzyme2}
      alt="ntzyme2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>Nt-ZYME</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>A complete multi-action natural care of digestive Sytem.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Relieves flatulence and abdominal discomfort.<br/>
                Enhances the release of endogenous digestive enzymes.<br/>
                Provides antiemetic effect and checks vertigo.<br/>
                Increases appetite.
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default Ntzyme;