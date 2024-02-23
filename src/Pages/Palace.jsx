import React from 'react'
import { FaEnvelope, FaInstagramSquare, FaWhatsapp} from 'react-icons/fa';
import '../App.css';

function Palace() {

  return (<>
  <div className='container'>

    <h1>The Balmoral Hall</h1>
    <h3>Federal Palace Hotel, VI, Lagos State.</h3>
    <p>200 Seating Capacity </p>
    <div className='icons'>
      <a className='mail' href='mailto:Samueli@balmoral.com.ng'><FaEnvelope/></a>  
      <a href='https://www.instagram.com/balmoralevents?igsh=MzRlODBiNWFlZA=='><FaInstagramSquare/></a>
      <a href=' https://wa.me/+2348034423234'><FaWhatsapp/></a>
    </div>
    
     <div className='amenities'>
      <div >
        <h4>AMENITIES/ BENEFITS</h4>
          <ul>
            <li>8 hours for your event.</li>
            <li>1 hour pre-event cooling.</li>
            <li>Effective cooling (Air Conditioners).</li>
            <li>Two Generators.</li>
            <li>Five-star Toilets.</li>
            <li>Green Room.</li>
            <li>Banquet Chairs & Banquet Tables.</li>
            <li>Large parking space.</li>
            <li>Façade/Photo area.</li>
            <li>Additional hours attract extra cost. Kindly note that you can't bring in catering.</li>
            <li>A complimentary room for your event at Federal Palace Hotel.</li>
            <li>Discounted Rate for your hotel bookings for your guests, using Balmoral Convention Center as your code.</li>
          </ul>
      </div>
      <div>
        <h4>RATE</h4>
        <p>1.5 MILLION (EXCLUSIVE OF TAXES)</p>

        <h4>CAPACITY</h4>
          <ul>
            <li>Banquet Seating: 200</li>
            <li>Theater Seating: 300</li>
          </ul>
          <p>Capacity is dependent the client's floor plan</p>
          <small><i>We are looking forward to hosting your event here at Balmoral Convention Center. Thank You.</i></small>

      </div>
    </div>



    {/* <h2 className='text-center'>Gallery</h2>
    <div className="image-container text-center">
  {images.map((data, index) => (
    <div key={index}>
      <img src={data.image} alt={`Image ${index + 1}`} />
    </div>
  ))}
</div> */}


</div>
    </>
  )
}
export default Palace