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