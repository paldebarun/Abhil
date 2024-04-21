import React, { useState } from "react";
import AbhilLogo from "../assets/PageHeader/AbhilyoungMind.png";
import axios from "axios";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });
    const handelChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }
    const login = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(
                `https://api.abhilyoungmind.com/api/v1/admin/login`,
                userDetails
            );
            alert(data.message);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    if (loading)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <h1>Loading...</h1>
            </div>
        );
    return (
        <section className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full min-h-[25rem] max-w-4xl rounded-lg shadow-lg bg-white grid grid-cols-2 gap-x-8 overflow-hidden">
                <div className="p-6 pe-8 border-e">
                    <div>
                        <img src={AbhilLogo} alt="logo" className="brightness-50 w-80" />
                    </div>
                    <h1 className="text-3xl font-semibold mt-3">Sign in</h1>
                    <p className="text-gray-600 mt-2 mb-6">To access dashboard</p>
                    <form className={"my-6 space-y-4"} onSubmit={login} >
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full py-2 px-3 bg-gray-50 border border-gray-300 rounded-md outline-none"
                            required
                            name="email"
                            onChange={handelChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full py-2 px-3 bg-gray-50 border border-gray-300 rounded-md outline-none"
                            name="password"
                            onChange={handelChange}
                        />
                        <button type="submit" className="w-full py-2.5 bg-blue-500 rounded-md text-white text-center mt-4">
                            Sign in
                        </button>
                    </form>
                </div>
                <div className="">
                    <img
                        src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?t=st=1712686356~exp=1712689956~hmac=3d664d5c56ec67a2a697d9b5ab753b5cafd93c6ae6f42ddeefa65ab632c0d57d&w=740"
                        alt="side img"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Login;
