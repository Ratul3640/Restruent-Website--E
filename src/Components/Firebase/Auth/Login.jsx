import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase.config";
import { useEffect, useState } from "react";


const Login = () => {
    const auth = getAuth(app)
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const handleLogin = (e) => {
        e.preventDefault()
        const data = e.target
        const email = data.email.value
        const password = data.password.value
        console.log(email, password);



        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }


    }
    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            if (customer) {
                console.log(customer);
                setUser(customer)
            }
        })
    }, [auth]);

    const handleLogOut = () => {
        if (user) {
            signOut(auth)
                .then(res => {
                    console.log(res, 'log Out Successfully');
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }


    return (
        <section>
            <h1 className='text-5xl text-center font-bold text-red-500 '>This is a Login Page</h1>
            <div className="w-fit text-lg my-6 text-start    font-semibold space-y-5 border-2 mx-auto">
                <form onSubmit={handleLogin} className=''>
                    <div className="w-">
                        <label className='text-lg ml-4  font-semibold ' htmlFor="">Enter your Email: </label> <br />
                        <input name="email" type="text" className=' ml-4 mr-4 w-4/4 border-2 p-1  border-black rounded' />
                    </div>
                    <div>
                        <label className='text-lg font-semibold ml-4 ' htmlFor="">Enter your Password: </label> <br />
                        <input name="password" type="password" className='border-2 p-1 w-4/4 border-black ml-4 mr-4  rounded' />
                    </div>
                    <div className="flex justify-end mr-4">
                        <button onClick={() => navigate("/registration")} className="text-red text-red-500 font-bold ">New User???</button>
                    </div>
                    <div className="text-center">
                        <button className='btn my-2 bg-red-500 text-white w-1/3'>Login</button>
                    </div>
                </form>
                <div className="text-center">
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn text-white bg-red-500 w-4/4">LogOut</button>
                            :
                            ""
                    }
                </div>
            </div>
        </section>
    );
};

export default Login;