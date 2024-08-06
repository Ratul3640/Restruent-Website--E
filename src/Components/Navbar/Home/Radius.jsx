import menu1 from '../../../../public/menu1.png'
import menu2 from '../../../../public/menu2.png'
import menu3 from '../../../../public/menu3.png'
import menu4 from '../../../../public/menu4.png'
import menu5 from '../../../../public/menu5.png'



const Radius = () => {
    return (
        <div>
            <div>
                <div>
                    <p className="mt-20  text-center py-2 lg:text-2xl text-xl">
                        <span className=" text-green-500 mt-8 font-bold">VIEW OUR TRENDING RECEPIES</span>
                    </p>
                    <h1 className="lg:text-5xl text-4xl font-bold text-center mt-4 mb-8">What We’re Craving Now?</h1>
                </div>


                {/* Card section start */}
                <div className=' flex flex-wrap gap-4  justify-around'>
                    <div className='rounded-tr-full p-2 bg-slate-200  '>
                        <img src={menu1} className=' ' alt="" />
                        <div className="flex  justify-around">
                            <h4 className="text-[14px]  ">White Sauce <br /> Pasta</h4>
                            <button className="btn bg-red-500 text-white">View</button>
                        </div>
                    </div>
                    <div className='rounded-tr-full bg-slate-200'>
                        <img src={menu2} alt="" />
                        <div className="flex justify-around">
                            <h4 className="text-[14px]  ">Gulab Jamun <br /> Pasta</h4>
                            <button className="btn bg-red-500 text-white">View</button>
                        </div>
                    </div>
                    <div className=' rounded-tr-full bg-slate-200'>
                        <img src={menu3} alt="" />
                        <div className="flex justify-around">
                            <h4 className="text-[14px]  ">Veg Manchurian <br /> Pasta</h4>
                            <button className="btn  bg-red-500 text-white ">View</button>
                        </div>
                    </div>
                    <div className='rounded-tr-full bg-slate-200'>
                        <img src={menu4} alt="" />
                        <div className="flex justify-around">
                            <h4 className="text-[14px]  ">Chicken Biryani <br /> Pasta</h4>
                            <button className="btn bg-red-500 text-white">View</button>
                        </div>
                    </div>
                    <div className='rounded-tr-full bg-slate-200'>
                        <img src={menu5} alt="" />
                        <div className="flex justify-around">
                            <h4 className="text-[14px] ">Paneer Tikka <br /> Pasta</h4>
                            <button className="btn bg-red-500 text-white">View</button>
                        </div>
                    </div>
                    
                </div>
                <div className='text-center p-14'>
                    <button className='btn  border-teal-500'>View All</button>
                </div>

            </div>
        </div>
    );
};

export default Radius;