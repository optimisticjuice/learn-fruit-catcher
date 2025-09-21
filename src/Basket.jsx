import basketImg from "./assets/basket.png";
import "./Basket.scss";
// export the Basket component
export default function Basket({x,width,height}) {
    return (
        <img src={basketImg} alt="basket" className="basket" 
        style={{
            '--x-position':x + "px",      
            '--width': width + "px",       
            '--height': height + "px"      
        }}
            
             />
    )
    {/* basket styles are being transfered to Basket.scss as variables dynamically */}
}
