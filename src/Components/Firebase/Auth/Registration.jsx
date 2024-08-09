import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase.config";


const Registration = () => {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault()
    const data = e.target
    const email = data.email.value 
    const password = data.password.value 
    console.log(email, password);
    

    const auth = getAuth(app);
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
          console.log(res);
          
          if (res) {
            signOut(auth)
          }
        })
        .catch(err => {
        console.log(err);
      })
    }





  }

    return (
      <section>
        <h1 className='text-5xl text-center font-bold text-red-500 '>This is a Registration Page</h1>
        <div>
          <form onSubmit={handleRegister} className='text-lg my-6 text-start   w-fit font-semibold space-y-5 border-2 mx-auto'>
            <div>
              <label className='text-lg ml-4  font-semibold ' htmlFor="">Enter your Email: </label> <br />
              <input name="email" type="text" className=' ml-4 mr-4 w-4/4 border-2 p-1  border-black rounded' />
            </div>
            <div>
              <label className='text-lg font-semibold ml-4 ' htmlFor="">Enter your Password: </label> <br />
              <input name="password" type="password" className='border-2 p-1 w-4/4 border-black ml-4 mr-4  rounded' />
            </div>
            <div className="flex justify-end mr-4">
              <button onClick={() => navigate("/login")} className="text-red text-red-500 font-bold ">Already User???</button>
            </div>
            <div className="text-center">
              <button className='btn my-2 bg-red-500 text-white w-1/3'>Registration</button>
            </div>
          </form>
        </div>
      </section>
    );
};

export default Registration;