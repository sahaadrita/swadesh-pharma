import React from 'react'
import { Carousel } from 'react-bootstrap'
import shee2 from "../../assets/shee2.JPG"
import shee from "../../assets/shee.JPG"

const Shhe = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={shee}
      alt="shee"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={shee2}
      alt="shee2"
    />
  </Carousel.Item>
</Carousel>
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>SHHE</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>Natural care for her natural system from menarche to menopause.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Revives normal level of Estrogen and progesterone.<br/>
                Offers potent astringent and hemostatic action to control excessive menstruation.<br/>
                Relaxes utrine muscles.<br/>
                Normalizes function of ovary and endometrium.
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default Shhe;