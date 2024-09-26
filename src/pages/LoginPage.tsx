import { motion } from "framer-motion";
import { useState } from "react"
import { Input } from "../components/Input";
import { Mail , Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [ email , setEmail] = useState("");
  const [ password , setPassword] = useState("");
  const  isLoading = false;
  const handleLogin = (e :any) =>{
    e.preventDefault();
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop:blur-xl
     rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2
          className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent
         bg-clip-text"
        >
          Welcome Back
        </h2>
        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />

          <Input
            icon={Lock}
            type="password"
            placeholder="Pasword"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />

          <div className="flex items-center mb-6">
            <Link
              to="/forget-password"
              className="text-sm text-green-400 hover:underline"
            >
              Forget Password?
            </Link>
          </div>

          <motion.button
            className="mt-5 w-full flex  justify-center py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            typeof="submit"
            disabled ={isLoading}
          >
            {isLoading ? <Loader className=" h-6 animate-spin  w-auto"/> :"Login"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Don't have an Account?{" "}
          <Link to={"/signup"} className="text-green-400 ">
            Signup
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default LoginPage