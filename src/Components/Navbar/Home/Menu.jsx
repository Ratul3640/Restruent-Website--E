import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Menu = () => {
    const foods = useLoaderData(null)
    // const orderArray = []
    const [orderArray, setOrderArray] = useState([])
    const inputData=useRef()

    const [quantity, setQuantity] = useState(1)
    const handleOrder = (name, price) => {
        const inputRef=inputData.current
        console.log(inputRef);
        const orderList = { name, price }
      setOrderArray(e=>e.concat(orderList))
        console.log(orderArray);
    }




    return (
        <section className="my-10">
            <h1 className="text-5xl font-semibold text-center">Menu Card</h1>
            <div className="flex my-10">
                <div className="flex w-3/4 flex-wrap gap-10 justify-center">
                    {
                        foods.map((e, idx) =>
                            <div className="border-2 rounded  p-2 w-fit" key={idx}>
                                <img className="w-56 h-52 object-cover" src={e?.photo} alt="" />
                                <h1 className="text-start my-2 font-semibold">{e?.name}</h1>
                                <div className="flex justify-between">
                                    <div className="text-start font-semibold">price:</div>
                                    <div>
                                        <p className="text-start mr-3 my-2">{e?.price}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 my-4">
                                    {/* <button className="btn btn-sm">-</button>
                                    <button className="btn btn-sm" onClick={()=> setQuantity(quantity+1)}>+</button>
                                    <p> {quantity}</p> */}
                                    <input ref={inputData} type="text" className="border-2 border-black w-10 rounded-lg" />

                                </div>
                                <button className='btn bg-red-500 flex w-fit  justify-center ml-auto  text-white' onClick={() => handleOrder(e?.name, e?.price)}>Order</button>
                            </div>

                        )
                    }

                </div>

                <div className="w-1/4">
                    <h1 className="text-3xl text-center text-red-500 underline font-semibold">See Your Order List</h1>
                    <table className="border-2 border-black">
                        <tr>
                            <th className="px-3">Food Name</th>
                            <th className="px-3">Quantity</th>
                            <th className="px-3">Price</th>
                        </tr>
                        {
                            orderArray.length > 0 ?
                                orderArray?.map((e, idx) => <tr key={idx}>
                                    <td className="px-3">{e.name}</td>
                                    <td className="px-3">{e?.quantity}</td>
                                    <td className="px-3">{e.price}</td>
                                </tr>)
                                
                                :
                                ""

                        }
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Menu;







