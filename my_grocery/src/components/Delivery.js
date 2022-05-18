// import qrcode from '../images/qrcode.jpeg'
import Navbar from './NavBar';
import end from '../images/ty.jpg'

const Delivery = () => {
    const date = new Date(); 
    const today = new Date(date);
const tomorrow = new Date(today);
//  const date = moment()
// .utcOffset('+05:30')
// .format('YYYY-MM-DD hh:mm:ss a');

    return (<div><Navbar></Navbar>
        <div className="rajendra">
            
            <i><h2>Order received on : 
            {new Date().toLocaleString() + ''} <br/>
            </h2> </i>
            <i>
            <h2>Order deliverd in next 2 working days  
           
        
            </h2> </i>
            <img src={end} width="50%" alt="Image"/> 
        </div></div>
    )
}

export default Delivery