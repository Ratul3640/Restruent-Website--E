



import Review from '../../../../public/Review.png'
import ratul from '../../../../public/ratul.jpg'
import Review2 from '../../../../public/Review2.png'
import Review3 from '../../../../public/Review3.png'





// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';






const Slider = () => {
    return (
        <div>
            
            <div className='my-20 md:text-start text-start w-svw md:w-auto'>
                <div className='my-16'>
                    <h1 className='text-center font-semibold text-3xl lg:text-6xl'>
                        What student’s say
                    </h1>
                    <p className='my-2 text-center'>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div className='flex flex-wrap'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide className=' p-5 rounded bg-gray-200 '>

                            <div className='flex'>
                                <div>
                                    <div className='my-2'>
                                        “Teachings of the great explore of truth,
                                        the master-builder of human happiness.
                                        no one rejects,dislikes, or avoids pleasure
                                        itself, pleasure itself”
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={Review} alt="" />
                                        </div>
                                        <div className=''>
                                            <h6 className='font-semibold'>Finlay Kirk</h6>
                                            <p>Web Developper</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className=' p-5 rounded bg-gray-200 '>
                            <div className='flex'>
                                <div>
                                    <div className='my-2'>
                                        “Teachings of the great explore of truth,
                                        the master-builder of human happiness.
                                        no one rejects,dislikes, or avoids pleasure
                                        itself, pleasure itself”
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={ratul} className='w-16 h-16 rounded-full' alt="" />
                                        </div>
                                        <div className=''>
                                            <h6 className='font-semibold'>Nahanur Islam Ratul</h6>
                                            <p>Mern Stuck Web Developper</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className=' p-5 rounded bg-gray-200 '>
                            <div className='flex'>
                                <div>
                                    <div className='my-2'>
                                        “Teachings of the great explore of truth,
                                        the master-builder of human happiness.
                                        no one rejects,dislikes, or avoids pleasure
                                        itself, pleasure itself”
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={Review2} alt="" />
                                        </div>
                                        <div className=''>
                                            <h6 className='font-semibold'>Finlay Kirk</h6>
                                            <p>Web Developper</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className=' p-5 rounded bg-gray-200 '>
                            <div className='flex'>
                                <div>
                                    <div className='my-2'>
                                        “Teachings of the great explore of truth,
                                        the master-builder of human happiness.
                                        no one rejects,dislikes, or avoids pleasure
                                        itself, pleasure itself”
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={Review3} alt="" />
                                        </div>
                                        <div className=''>
                                            <h6 className='font-semibold'>Finlay Kirk</h6>
                                            <p>Web Developper</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className=' p-5 rounded bg-gray-200 '>
                            <div className='flex'>
                                <div>
                                    <div className='my-2'>
                                        “Teachings of the great explore of truth,
                                        the master-builder of human happiness.
                                        no one rejects,dislikes, or avoids pleasure
                                        itself, pleasure itself”
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={Review} alt="" />
                                        </div>
                                        <div className=''>
                                            <h6 className='font-semibold'>Finlay Kirk</h6>
                                            <p>Web Developper</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;