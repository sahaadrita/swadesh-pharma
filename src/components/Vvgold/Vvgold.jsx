import React from 'react'
import { Carousel } from 'react-bootstrap'
import vvgold from "../../assets/vvgold.JPG"
import vvgold2 from "../../assets/vvgold2.JPG"
const Vvgold = () => {
  return (
    <>
    

    <div className="wrapper">
    <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={vvgold}
      alt="vvgold"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={vvgold2}
      alt="vvgold2"
    />
  </Carousel.Item>
</Carousel>
            
            </div>

        <div className='right'>
        <div>
        <h1 className='title'>VV GOLD</h1>
    </div>
            <h5 className='details'>PRODUCT DETAILS</h5>
            <div className='mb-10'>Description</div>
            <div className='mb-20'>Golden product for vigour and vitality.<br/>
            Specially for men.<br/>
            
            </div>
            <div className='mb-10'>Key Benefits</div>  
            <div className='mb-20'>Provide nourishment emotionally and nutritionally.<br/>
                </div>  
                <div className='mb-10'>Directions for Use</div> 
                <div>As recommended by physician.</div>               
    </div>
        </div>
                                                                                                                                                                                       
</>
  )
}

export default Vvgold;