import footer from '../../../../public/footer.png'
import Logo from '../../../../public/Logo.png'

const Footer = () => {
    return (
        <div className='bg-gray-500 relative rounded mt-28 h-[800px]'>
            <div className=' opacity-90 absolute'>

                <img src={footer} alt="" />
            </div>
            <div className='flex justify-around'>
                <div className='text-white mt-28 text-start'>
                    <h1 className='text-5xl font-semibold'>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet. Rangpur polytecnic instutite 
                        
                    </p>
                    <p><span className='font-bold text-xl'>Email:</span>nahnaurislam71@gmail.com</p>
                </div>
                <div className='bg-white rounded-2xl py-10 -mt-10  border-2 border-black space-y-4 relative text-start w-1/3'>
                    <h1 className='text-2xl font-semibold text-center'>Have a Question</h1>
                    <div className=' w-72  mx-auto'>
                        <label htmlFor="email" className=' text-lg font-semibold' >Email <span className='text-red-500'>*</span> </label> <br />
                        <input type="text" placeholder='Email' className='w-5/6 border-2 p-2 rounded border-black' />
                    </div>
                    <div className=' w-72 mx-auto'>
                        <label htmlFor="email" className='text-lg font-semibold '>Comments  <span className='text-red-500'>*</span></label> <br />
                        <textarea name="" id="" placeholder='Comments Here' className='border-2 p-1 rounded border-black w-72 '></textarea>
                    </div>
                    <button className='btn flex mx-auto  justify-center my-4 bg-red-500 w-3/4 text-white'>Submit</button>
                </div>
            </div>

            <div className='relative'>
                <footer className="footer w-3/4 h-74 mx-auto mt-28 rounded  bg-base-200 text-base-content p-10">
                    <aside >
                        <div className='text-4xl'>
                            <img src={Logo} alt="" />
                        </div>
                        <p className='text-start'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Posuere commodo imperdiet lorem tincidunt semper <br />maecenas scelerisque duis elit. Ipsum condimentum <br />id semper habitasse fermentum dignissim viverra pretium aliquet.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <a className="link link-hover">Facebook</a>
                        <a className="link link-hover">LinkedIn</a>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Instagram</a>
                        <a className="link link-hover">YouTube</a>
                     
                    </nav>
                    <nav>
                        <h6 className="footer-title">More</h6>
                        <a className="link link-hover">Media </a>
                        <a className="link link-hover">Gallery</a>
                        <a className="link link-hover">Blogs</a>
                        <a className="link link-hover">FAQs</a>
                        <a className="link link-hover">About</a>
                    </nav>
                    
                </footer>
                <div className='-mt-8'>
                    © 2024 Copyright: Foodzilla
                </div>
                
              

            </div>
            
        </div>

    );
};

export default Footer;