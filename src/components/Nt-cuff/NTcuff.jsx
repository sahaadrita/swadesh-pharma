import React from 'react'
import arrow from "../../assets/arrow.png"
import NTcuff from "../../assets/NTcuff.JPG"
import NTcuff2 from "../../assets/NTcuff2.JPG"
import { Carousel } from 'react-bootstrap'


const NTcuffDetails = () => {
  return (
      <>
    

            <div className="wrapper">
                <div className='left'>
            <Carousel fade>
  <Carousel.Item>
    <img
      height={470}
      width={550}
      src={NTcuff}
      alt="nTcuff"
    />
  </Carousel.Item>
  <Carousel.Item> 
    <img
      height={470}
      width={550}
      src={NTcuff2}
      alt="NTcuff2"
    />
  </Carousel.Item>
</Carousel>
    </div>               

                <div className='right'>
                <div>
                <h1 className='title'>NTcuff</h1>
            </div>
                    <h5 className='details'>PRODUCT DETAILS</h5>
                    <div className='mb-10'>Description</div>
                    <div className='mb-20'>Most effective herbal cough syrup enriched with tulsi.</div>
                    <div className='mb-10'>Key Benefits</div>  
                    <div className='mb-20'>Facilitates smooth expectoration.<br/>
                        Provides powerful histaminic action without sedation.<br/>
                        Ensures normal breathing.
                        </div>  
                        <div className='mb-10'>Directions for Use</div> 
                        <div>As recommended by physician.</div>               
            </div>
                </div>
                                                                                                                                                                                               
        </>
  )
}

export default NTcuffDetails;