import Lottie from 'lottie-react'
import order1 from '../../../../public/order1.json'
import order2 from '../../../../public/order2.json'
import order3 from '../../../../public/order3.json'
import order4 from '../../../../public/order4.json'
import order5 from '../../../../public/order5.json'
const Services = () => {
    return (
        <div className='flex text-center gap-10 justify-between'>
            <div className='bg-gray-200 rounded-xl p-2 '>
                <h1>
                    Best Quality
                    <Lottie animationData={order1}  className='w-44'></Lottie>
                </h1>
            </div>
            <div className='bg-gray-200 rounded-xl p-2 '>
                <h1>Fast Delevery</h1>
                 <Lottie animationData={order2} className='w-44'></Lottie>
            </div>
            <div className='bg-gray-200 rounded-xl p-2 '>
                <h1>Hygienic</h1>
                 <Lottie animationData={order3} className='w-44'></Lottie>
            </div>
            <div className='bg-gray-200 rounded-xl p-2 '>
                <h1>Budget Friendly</h1>
                 <Lottie animationData={order4} className='w-44'></Lottie>
            </div>
            <div className='bg-gray-200 rounded-xl p-2 '>
                <h1>Budget Friendly</h1>
                 <Lottie animationData={order5} className='w-44'></Lottie>
            </div>
        </div>
    );
};

export default Services;





























// import { useEffect, useRef, useState } from "react";
// import { useLoaderData } from "react-router-dom";



// const Menu = () => {
//     const foods = useLoaderData(null);
//     const [orderArray, setOrderArray] = useState([]);
//     const inputRefs = useRef([]);


//     const handleOrder = (index) => {
//         const data = inputRefs.current[index]?.value;
//         const data1 = inputRefs.current.value;
//         console.log(data1);

//         const orderList = { name: foods[index].name, price: foods[index].price, quantity: data };
//         setOrderArray((prevOrderArray) => [...prevOrderArray, orderList]);
//     };

//     if (orderArray.length > 0) {
//         const totalPrice = orderArray?.reduce((p, c) => p + c)
//         console.log(totalPrice);
//     }


//     return (
//         <section className="my-10">
//             <h1 className="text-5xl font-bold text-center">Menu Card</h1>
//             <div>
//                 <input
//                     ref={inputRefs}
//                     type="number"
//                     name="count"
//                     className="border-2 w-[8%] px-1 border-black rounded h-9 mr-2"
//                 />
//                 <button className="btn text-white bg-red-500" onClick={() => handleOrder()}>Order</button>
//             </div>
//             <div className="flex my-10">
//                 <div className="flex w-3/4 flex-wrap justify-center gap-10">
//                     {
//                         foods.map((e, idx) => (
//                             <div key={idx} className="border-2 rounded-xl p-2 w-fit">
//                                 <img src={e?.photo} className="w-56 h-52 object-cover" alt="" />
//                                 <h1 className='text-start font-semibold my-2'> {e?.name}</h1>
//                                 <div className="flex justify-between">
//                                     <div className="text-start font-semibold">price:</div>
//                                     <div>
//                                         <p className="text-start mr-3 my-2">{e?.price}</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <input
//                                         ref={(el) => (inputRefs.current[idx] = el)}
//                                         type="number"
//                                         name="count"
//                                         className="border-2 px-1 border-black rounded "
//                                     />
//                                     <button className="btn  text-white bg-red-500" onClick={() => handleOrder(idx)}>Order</button>
//                                 </div>
//                             </div>
//                         ))
//                     }

//                 </div>
//                 <div className="w-1/4">
//                     <h1 className="text-2xl text-center font-semibold underline text-red-500">See Your Order List</h1>
//                     <table className="border-l-2">
//                         <thead>
//                             <tr>
//                                 <th className="border-2 border-black scroll-px-3">Food Name</th>
//                                 <th className="border-2 border-black scroll-px-3">Quantity</th>
//                                 <th className="border-2 border-black scroll-px-3">Food Price</th>
//                                 <th className="border-2 border-black scroll-px-3">Total Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orderArray.length > 0 &&
//                                 orderArray.map((e, idx) => (
//                                     <tr key={idx}>
//                                         <td className="border-2 border-black scroll-px-3">{e.name}</td>
//                                         <td className="border-2 border-black scroll-px-3">{e.quantity}</td>
//                                         <td className="border-2 border-black scroll-px-3">{e.price}</td>
//                                         <td className="border-2 border-black scroll-px-3">{e.price * e.quantity}</td>
//                                     </tr>
//                                 ))

//                             }
//                         </tbody>
//                     </table>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Menu;






