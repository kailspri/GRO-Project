import QR from '../images/QR.png'
import Navbar from './NavBar';


const Payment = () => {
    const amount=JSON.parse(sessionStorage.getItem('payment'))
     console.log(amount)
    return (
        <div>
            <Navbar></Navbar>
            <div className="rajendra" >
                
            <h2>Your total amount is  ₹{amount.cartTotal} , you can pay using following option</h2>
            <dl>
                <dt>Pay via upi id</dt>
                <dd>8823870238@paytm</dd>
                <dt>Pay using Qr code</dt>
                <dd>
               <img src={QR} width="300px" alt="Image"/> 
                </dd>
            </dl>
            <a className ="btn btn-success" href="/delivery">Check Delivery status</a>
        </div></div>
    )
}

export default Payment