import React from 'react'
import Image1 from '../assets/villa/1.jpg'
import Image3 from '../assets/villa/3.jpg'
import Image4 from '../assets/villa/4.jpg'
import Image5 from '../assets/villa/5.jpg'
import Image6 from '../assets/villa/6.jpg'
import Image8 from '../assets/villa/8.jpg'
import Image9 from '../assets/villa/9.jpg'
import Image10 from '../assets/villa/10.jpg'
import '../App.css';

function Palace() {

  // const images = [
  //   { image: Image1 },
  //   { image: Image6 },
  //   { image: Image3 },
  //   { image: Image4 },
  //   { image: Image5 },
  //   { image: Image9 },
  //   { image: Image8 },
  //   { image: Image10 },
  // ];
  return (<>
  <div className='container'>

    <h1>The Balmoral Hall</h1>
    <h3>Federal Palace Hotel, VI, Lagos State.</h3>
    <p>200 Seating Capacity </p>
    <p><i>Ikpati Samuel Christophe</i></p>
    
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