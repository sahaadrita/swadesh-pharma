import React from "react"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import NTcuff from "../../assets/NTcuff.JPG"
import Roaforte from "../../assets/Roaforte.JPG"
import ntzyme from "../../assets/ntzyme.JPG"
import shee from "../../assets/shee.JPG"
import vvgold from "../../assets/vvgold.JPG"
import medam from "../../assets/medam.JPG"
import laxc from "../../assets/laxc.JPG"
import h2liv from "../../assets/h2liv.JPG"
import haempure from "../../assets/haempure.JPG"
import Flowrine from "../../assets/Flowrine.JPG"
import aloefit from "../../assets/aloefit.JPG"
import { useNavigate } from "react-router-dom"
import "./Medicine.css";

const Medicine = () => {
  const history = useNavigate();
    const cardInfo = [
        {image:NTcuff, title:"nt-cuff", text:"Most effective herbal cough syrup enriched with tulsi."},
        {image:Roaforte, title:"Roa-Forte", text:"Unique preparation for Rhematoid and Osteoarthritis."},
        {image:ntzyme, title:"ntzyme", text:"A complete multi-action natural care of digestive Sytem."},
        {image:shee, title:"SHHE", text:"Natural care for her natural system from menarche to menopause."},
        {image:vvgold, title:"V.V.GOLD", text:"Golden product for vigour and vitality."},
        {image:medam, title:"Medam", text:"Unique preparation for vigour & vitality"},
        {image:laxc, title:"Laxc", text:"Real laxative to overcome from constipation"},
        {image:h2liv, title:"H2-Liv", text:"A strong sugar free hepatoprotective & hepatocorrective "},
        {image:haempure, title:"Haem-Pure", text:"The most reliable approach to make blood pure."},
        {image:Flowrine, title:"Flow-rine", text:"The best choice for the smooth flow of urine."},
        {image:aloefit, title:"ALOE-FIT", text:"Most dependable natural health restorative for all age group."},
    ]
    const renderCard = (card, index) => {
        return (
<Card style={{ width: '18rem' }} key={index} className="box" >
    <Card.Img variant="top" src={card.image}  />
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Text>
        {card.text}
      </Card.Text>
      <Button
            variant="primary"
            onClick={() => {
              console.log(card);
              if (card.title === "nt-cuff") {
                history("/Nt-cuff");
              }
              if (card.title === "Roa-Forte") {
                history("/Roa-Forte");
              }
              if (card.title === "SHHE") {
                history("/shhe");
              }
              if (card.title === "ntzyme") {
                history("/ntzyme");
              }
              if (card.title === "V.V.GOLD") {
                history("/vvgold");
              }
              if (card.title === "Medam") {
                history("/medam");
              }
              if (card.title === "Laxc") {
                history("/laxc");
              }
              if (card.title === "H2-Liv") {
                history("/h2liv");
              }
              if (card.title === "Haem-Pure") {
                history("/haempure");
              }
              if (card.title === "Flow-rine") {
                history("/flowrine");
              }
              if (card.title === "ALOE-FIT") {
                history("/aloefit");
              }
            }}
            key={index}
          >View Details</Button>
    </Card.Body>
  </Card> 
        )
    }
    return (
        <div className="grid">
{cardInfo.map(renderCard)}
  </div>
  )
}
export default Medicine;