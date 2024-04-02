import React from 'react'
import Goodsdetails from './Goodsdetails'
import Investmentamount from './Investmentamount'
import VechicleTrans from './VechicleTrans'
import Qr from "./qr-code.png";

const ewaybill = () => {
  return (

    <div className="m-10 p-0">
      <div className=' w-full inline-flex justify-between border-solid border border-gray-500 p-4'>
      <div className='text-2xl font-bold pt-5'>
     <h1>e-Way Bill</h1>
      </div>
      <div className=''>
       <img src= {Qr} alt='QR' className='w-20' />
      </div>
      </div>

      <div className='border border-solid border-gray-500'>
      <div className='border border-solid border-gray-500 p-1'>
        <h1><b>1. E-Way BILL Details</b></h1>
      </div>
      <div class="flex flex-row w-full border border-solid border-gray-500 p-4">
  <div class="m-2">
    <p>eway Bill No. <b>9999999999</b></p>
  </div>
  <div class="m-2">
    <p>Generated Date: <b>XX/XX/XXXX xx:xx PM</b></p>
  </div>
  
  <div class="m-2">
    <div class="">
      <p>Generated By: <b>XX/XX/XXXX xx:xx PM</b></p>
    </div>
    <div>
      <p>Valid Upto: <b>xx/xx/xxxx</b></p>
    </div>
  </div>
</div>


      <div className='flex flex-row w-full  border border-solid border-gray-500 p-4'>
      <div class="m-1">
        <p>Mode: Road</p>
        </div>
        <div class="m-1 pl-24">
        <p>Approx Distance: 285Km</p>
        </div>
      </div>
      
      <div className=''>
          <p>Type: Outwoard -For Own Use</p>
          <p>Document Details: Challen - xxxxx-xx/xx/xxxx</p>
          <p>Transaction type: Rwgular</p>
      </div>
      </div>
     
    <div className=''>
      <div className=''>
        <p>2. Address Details</p>
      </div>
     <div className=''>
      <div className=''>
        <p>From</p>
        <input className='p-2'/>
      </div>
      <div className=''>
        <p>To</p>
        <input className='p-2'/>
      </div>
     </div>
    </div>

    <div className=''>
    <div className=''>
      <p>3. Good Details</p>
      </div>
      <div className=''>
      <Goodsdetails />
      </div>
      <div className=''>
     <Investmentamount />
   </div>
    </div>
   
   <div className=''>
     <div className=''>
      <p>4. Transportation Details</p>
     </div>
    <div className=''>
      <p>Transports ID & Name: xxxxxxxxxxx & Transport Wings(cal)</p>
      <p>Transports Doc. No & Date: xxxx & xx/xx/xxxx</p>
    </div>
   </div>

       <div className=''>
        <div className=''>
      <p>5. Vechicle Details</p>
        </div>
        <div className=''>
          < VechicleTrans />
        </div>

       </div>

      </div>
  )
}

export default ewaybill