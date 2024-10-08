
import { useEffect, useRef, useState } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";



const Menu = () => {
    const foods = useLoaderData(null);
    const [orderArray, setOrderArray] = useState([]);
    const [array, setArray] = useState(foods);
    // const [search, setSearch] = useState([]);

    // const [pageNum, setPageNum] = useState([])
    let totalPrice = 0;

    const inputRefs = useRef([]);
    const searchRef = useRef()
    // console.log(foods);

    const handleOrder = (index) => {
        const data = inputRefs.current[index]?.value;
        const data1 = inputRefs.current.value;
        console.log(data1);

        const orderList = { name: foods[index].name, price: foods[index].price, quantity: data };
        setOrderArray((prevOrderArray) => [...prevOrderArray, orderList]);
    };

    if (orderArray.length > 0) {
        const total = orderArray?.reduce((p, c) => p + (c?.price * c?.quantity), 0)
        totalPrice = total
        // console.log(total);
    }

    const pageCount = Math.ceil(foods?.length / 6)
    const pageLength = [...Array(pageCount).keys()]
    // console.log(...Array(pageCount).keys());



    const handleSort = (e) => {
        console.log(e.target.value);


        if (e.target.value == 'lowtohigh') {
            const sortArray = foods.sort((a, b) => a.price - b.price)
            setArray([...sortArray])
            // console.log(sortArray);
        }
        if (e.target.value == 'hightolow') {
            const sortArray = foods.sort((a, b) => b.price - a.price)
            setArray([...sortArray])
            // console.log(sortArray);
        }
        if (e.target.value == 'Default') {
            // console.log(foods);
            setArray([...foods])
        }
    }

    // const handleSearch = (e) => {

    //     e.preventDefault()
    //     // const quary = searchRef.current.value.toLowerCase();
    //     // searchRef(quary)
    //     // console.log(searchRef.current.value);
    //     const search = foods.filter((e) => e.name.toLowerCase().includes(searchRef.current.value.toLowerCase()))
    //     console.log(search);
    //     setArray(search)

    //     if (searchRef.length === 0) {
    //         setArray([...foods])
    //     }
    // }



    const handleSearch = (e) => {
        e.preventDefault();
        const quarry = searchRef.current.value;
        const search = foods.filter((e) => e.name == (quarry))
        console.log(search)
        setArray([...search])
     

    }



    // const handleSearch = (e) => {
    //     const query = e.target.value.toLowerCase();
    //     setSearchQuery(query);

    //     if (query === "") {
    //         setMobileData(defaultdata);
    //     } else {
    //         const filteredData = defaultdata.filter(mobile =>
    //             mobile.name.toLowerCase().includes(query)
    //         );
    //         setMobileData(filteredData);
    //     }
    // };






    console.log(array);


    return (
        <section className="my-10">
            <h1 className="text-5xl font-bold text-center">Menu Card</h1>
            {/* <div>
                <input
                    ref={inputRefs}
                    type="number"
                    name="count"
                    className="border-2 w-[8%] px-1 border-black rounded h-9 mr-2"
                />
                <button className="btn text-white bg-red-500" onClick={() => handleOrder()}>Order</button>
            </div> */}
            <div className="flex flex-wrap my-10">
                <div className="lg:w-3/4 w-full">
                    <div className="flex justify-center my-4">

                        <div className="w-fit  mx-auto">
                            <input type="text" ref={searchRef} placeholder="Search" className="border-2 h-10 rounded px-1 border-black" name="" id="" />
                            <button onClick={handleSearch} className="bg-red-500 hover:bg-slate-500 btn ml-2 text-white btn-sm h-10">Search</button>
                        </div>
                        <div className="w-fit ml-auto ">
                            <select onClick={handleSort} name="" id="" className="border-2 p-1 rounded border-black">
                                <option value="Default">Default</option>
                                <option value="lowtohigh">Low to high</option>
                                <option value="hightolow">High to low</option>
                            </select>
                            {/* <button onClick={handleTop} className="btn bg-red-500 mr-10 text-white hover:text-red-500">Sort(low to high)</button>
                        <button onClick={handleTop1} className="btn bg-red-500 mr-10 text-white hover:text-red-500">Sort(High to low)</button> */}
                        </div>
                    </div>

                    <div className="flex w-5/6 flex-wrap justify-center gap-16">
                        {array?.length > 1 ?
                            array?.map((e, idx) => (
                                <div key={e.idx} className="border-2 rounded-xl p-2 w-fit">
                                    <img src={e?.photo} className="w-48 h-48 object-cover" alt="" />
                                    <h1 className='text-start font-semibold my-2'> {e?.name}</h1>

                                    <div className="flex justify-between">
                                        <div className="text-start font-semibold">price:</div>
                                        <div>
                                            <p className="text-start mr-3 my-2">{e?.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            ref={(el) => (inputRefs.current[idx] = el)}
                                            type="number"
                                            name="count"
                                            className="border-2 px-1 h-10 w-1/2 ml-auto rounded border-black "
                                        />
                                        <button className='btn bg-red-500 flex ml-auto  text-white btn-sm w-18 h-10' onClick={() => handleOrder(idx)}>Order</button>
                                    </div>
                                </div>
                            ))
                            :
                            <p className="text-center font-semibold text-2xl">No Product Found</p>
                        }
                    </div>
                    <div className="w-fit my-5 mx-auto">
                        {
                            pageLength.map((e, idx) =>
                                <button className="btn mr-2 my-4" key={idx}>{e + 1}</button>)
                        }
                    </div>
                </div>

                <div className="lg:w-1/4 w-fit mx-auto">
                    <h1 className="text-2xl text-center font-semibold underline text-red-500">See Your Order List

                    </h1>
                    <table className="border-2">
                        <thead>
                            <tr>
                                <th className="border-2 border-black scroll-px-3">Food Name</th>
                                <th className="border-2 border-black scroll-px-3">Quantity</th>
                                <th className="border-2 border-black scroll-px-3">Food Price</th>
                                <th className="border-2 border-black scroll-px-3">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderArray.length > 0 &&
                                orderArray.map((e, idx) => (
                                    <tr key={idx}>
                                        <td className="border-2 border-black text-center scroll-px-3">{e.name}</td>
                                        <td className="border-2 border-black text-center scroll-px-3">{e.quantity}</td>
                                        <td className="border-2 border-black text-center scroll-px-3">{e.price}</td>
                                        <td className="border-2 border-black text-center scroll-px-3">{e.price * e.quantity}</td>
                                    </tr>
                                ))

                            }

                            <td className="border-2 border-black text-center px-3">Total price

                            </td>
                            <td className="border-2 border-black text-center px-3">

                            </td>
                            <td className="border-2 border-black text-center px-3">

                            </td>
                            <td className="border-2 border-black text-center px-3">{totalPrice}

                            </td>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default Menu;






