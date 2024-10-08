import foods from '../../../../public/foods.json'
import { IoIosHeart } from "react-icons/io";
import { MdOutlineStarOutline } from "react-icons/md";





const Card = () => {
    console.log(foods);
    
    return (
        <div className="my-10">
            <p className='text-xl text-red-500'>BROWSE OUR MENU</p>
            <h1 className='text-5xl font-bold text-center my-4'>Hungry? Order & Eat</h1>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    foods ?.slice(0,10).map((e, idx) => <div className='border-2 relative w-fit p-2 ' key={idx}>
                        <img className='w-48 h-60 rounded object-cover' src={e.photo} alt="" />
                        <IoIosHeart className='text-2xl bg-white p-1 text-orange-500 top-8 rounded-full  right-4  absolute' />
                        <div className='flex my-2'>
                            <h1 className='text-start font-semibold'> {e.name}</h1>
                            <div className='flex ml-auto text-xl text-orange-400 '>
                                <MdOutlineStarOutline />
                                <MdOutlineStarOutline />
                                <MdOutlineStarOutline />
                            </div>
                       </div>

                        <div className="flex justify-between">
                            <div className="text-start font-semibold">price:</div>
                            <div>
                                <p className="text-start mr-3 my-2">{e?.price}</p>
                            </div>
                        </div>
                        <button className='btn bg-red-500 flex w-fit  justify-center ml-auto  text-white btn-sm w-18 h-10'>Order </button>
                    </div>)
                }
            </div>
            <div className='my-4'>
                <button className='btn border-red-500 mx-auto'>View full menu</button>
            </div>
        </div>
    );
};

export default Card;