import Banner1 from '../../../../public/Banner1.png'


const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row text-start my-16'>

            <div className='w-full md:w-1/2 text-xl  text-black  mt-12'>
                <h1 className='lg:text-5xl text-3xl ml-6 font-bold  mb-4 irish-grover-regular' >Bringing the <span className='text-red-500'>taste</span> of <br /> your <span className='text-teal-500'>state</span>  at your <br /> doorstep..!</h1>

                <p className='mb-6 ml-6 text-[14px]'>Get the hot and freshly cooked food of your delivered at your doorstep state  with the taste you deserve, in just no time.</p>


                <div className='ml-6 flex gap-2'>
                    <div>
                        <button className='btn bg-red-500 text-white'>Food Order Now</button>

                    </div>
                    <div>
                        <button className='btn border-red-500'>Browse Recepies</button>
                    </div>

                </div>
            </div>

            <div className=' right-0 w-full object-cover md:w-1/2 '>
                <img src={Banner1} className='w-full  object-cover' alt="" />
            </div>
        </div>
    );
};

export default Banner;