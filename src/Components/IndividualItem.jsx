import React from "react";
import Countdown from "react-countdown";

const items = [
   {
      key: "1",
      artist: 4,
      image: "/images/image1.jpg",
      price: "3.8",
      title: "Without Rs 26.5 Lakhs, I Might Lose My 2-Year-Old Child",
      timeLeft: 84670923,
   },
   {
      key: "2",
      artist: 2,
      image: "/images/image2.jpg",
      price: "2.5",
      title: "I lost my husband,don’t let me lose my daughter too.",
      timeLeft: 12873491,
   },
   {
      key: "3",
      artist: 0,
      image: "/images/image3.jpg",
      price: "9.0",
      title: "Donate to Kerala Flood Relief - Akshaya Patra",
      timeLeft: 84720185,
   },
   {
      key: "4",
      artist: 3,
      image: "/images/image4.jpg",
      price: "16.5",
      title: "Donate for Poor Child Education ",
      timeLeft: 43826185,
   },
];
const artists = [
   {
      name: "Raven Simmons",
      handler: "@raven",
      image: "https://assets.codepen.io/3685267/nft-dashboard-pro-1.jpg",
   },
   {
      name: "Uriah Gardner",
      handler: "@uriah",
      image: "https://assets.codepen.io/3685267/nft-dashboard-pro-2.jpg",
   },
   {
      name: "Colin Mitchell",
      handler: "@colin",
      image: "https://assets.codepen.io/3685267/nft-dashboard-pro-4.jpg",
   },
   {
      name: "Emely Hall",
      handler: "@emely",
      image: "https://assets.codepen.io/3685267/nft-dashboard-pro-3.jpg",
   },
   {
      name: "Raphael Scott",
      handler: "@raphael",
      image: "https://assets.codepen.io/3685267/nft-dashboard-pro-5.jpg",
   },
];

function IndividualItem() {
   return (
<>
               <div className='flex flex-col md:flex-row justify-between px-3 mt-3'>
            <h2 className='text-xl font-semibold'>Recent</h2>

            <ull className='inline-flex space-x-3 '>
               {["StartUp", "Medical", "Disaster", "Sport"].map((text, index) => (
                  <li className=''>
                     <button className={` ${index ? "text-zinc-500" : "text-fuchsia-600 underline font-bold"}`}>{text}</button>
                  </li>
               ))}
               ;
            </ull>
         </div>
      <ul className='p-1.5 flex flex-wrap'>
         {items.map(({ key, artist, image, price, title, timeLeft }) => (
            <li className='w-full lg:w-1/2 xl:w-1/3  p-3 ' key={key}>
               <a className='block bg-zinc-800 rounded-md w-full overflow-hidden pb-4 shadow-lg' href='/item'>
                  <div className='w-full h-64 bg-center bg-cover relative' style={{ backgroundImage: `url(${image})` }}>
                     <div className='absolute left-1/2 -translate-x-1/2 bottom-2  w-5/6 bg-white rounded-md flex items-center bg-opacity-30 backdrop-blur-md'>
                        <div className='w-1/2 p-3'>
                           <h3 className='font-semibold'>Current Amound</h3>
                           <div className=''>{price} ETH</div>
                        </div>
                        <div className='w-1/2 p-3'>
                           <h3 className='font-semibold'>Ending in</h3>
                           <Countdown date={Date.now() + timeLeft} renderer={({ hours, minutes, seconds }) => <div className=''>{`${hours}h: ${minutes}m: ${seconds}s`}</div>} />
                        </div>
                     </div>
                  </div>
                  <h3 className='font-semibold text-lg px-3 mt-2 text-3xl'  style={{ color: "white"}}>{title}</h3>
                  <div className='flex items-center px-3 mt-2'>
                     <img src={artists[artist].image} className='w-10 h-10 rounded-full' alt='item-owner' />
                     <span className=' ml-2 text-zinc-400'>{artists[artist].handler}</span>
                  </div>
                  <div className='flex mt-2'>
                     <div className='p-3 w-1/2'>
                        <button className='bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full h-12 rounded-md font-semibold' href={'<DetailedView/>'}>Donate</button>
                     </div>
                     <div className='p-3 w-1/2'>
                        <button className='bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full rounded-md font-semibold h-12 p-px'>
                           <div className='bg-zinc-800 w-full h-full rounded-md grid place-items-center'>Share</div>
                        </button>
                     </div>
                  </div>
               </a>
            </li>
         ))}
      </ul>
      </>
   );
}

export default IndividualItem;
