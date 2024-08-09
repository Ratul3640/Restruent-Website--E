import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../public/Logo.png'
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";


const Navbar = () => {

    const nevigate = useNavigate();


    return (
        <div className='flex justify-between'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='my-auto'> 
                <ul className='flex gap-5'>
                    <NavLink to={'/'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    } >
                        <li className='text-lg font-semibold'>Home</li>
                 </NavLink>
                    <NavLink to={'/menu'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li className='text-lg font-semibold'>Menu</li>
                 </NavLink>
                    <NavLink to={'/services'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li className='text-lg font-semibold'>Services</li>
                 </NavLink>
                    <NavLink to={'/about us'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li className='text-lg font-semibold'>About Us</li>
                 </NavLink>
                </ul>
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-2 items-center'>
                    <div><CiSearch /></div>
                    <div><GiShoppingCart /></div>
                </div>
                <div onClick={() => nevigate("login")} className='my-auto'>
                    <button  className='btn btn-sm w-18 h-10 text-white bg-red-500'>Log in</button>
                </div>
           </div>
        </div>
    );
};

export default Navbar;