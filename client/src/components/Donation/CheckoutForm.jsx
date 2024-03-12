
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom"

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        amount: state.amount,
    });

    const checkoutHandler = async () => {
        try {
            if (!formData.amount) {
                alert("Amount is required.");
            }
            const {
                data: { key1 },
            } = await axios.get("http://api.abhilyoungmind.com/getkey");
            const orderURL = "http://api.abhilyoungmind.com/api/v1/payment";
            const {
                data: { order },
            } = await axios.post(orderURL, {
                amount: formData.amount,
            });

            const options = {
                key: key1,
                amount: order.amount,
                currency: "INR",
                name: "Abhil Young Mind Foundation",
                discription: "Donation for better future of poor childs.",
                order_id: order.id,
                handler: function (res) {
                    axios
                        .post(`http://api.abhilyoungmind.com/api/v1/paymentverification`, res)
                        .then((res) => {
                            alert("payment successful, PaymentId: " + res.data.paymentId);
                            navigate('/paymentsuccess')
                        })
                        .catch((err) => console.log(err));
                },
                theme: {
                    color: "#3399cc",
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                notify: {
                    sms: true,
                    email: true,
                },
                notes: {
                    address: formData.address,
                },
            };
            const razor = new window.Razorpay(options);
            razor.open();
            razor.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
            });
        } catch (error) {
            console.log("order not placed", error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkoutHandler();
    };

    return (
        <div className="container mx-auto py-12">
            <div className="uppercase text-center text-2xl font-bold mb-10 underline underline-offset-8 decoration-[#32d314]">
                Thank you for Donating - Share Your Details
            </div>
            <div className="flex justify-center my-8">
                <form className="w-full max-w-lg px-6" onSubmit={handleFormSubmit}>
                    {/* <h1>{state.toWhat}</h1> */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="name"
                            >
                                Full Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#32d314]"
                                id="name"
                                required
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#32d314]"
                                id="email"
                                required
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="address"
                            >
                                Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#32d314]"
                                id="address"
                                required
                                type="text"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-4 -mx-3 mb-6">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="phone"
                            >
                                Phone No.
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#32d314]"
                                id="phone"
                                required
                                type="number"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="amount"
                            >
                                Amount
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white hover:cursor-not-allowed"
                                id="amount"
                                required
                                type="number"
                                placeholder="In Rupees"
                                disabled
                                value={formData.amount}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button
                        className="-mx-3 w-36 rounded text-white py-2 flex justify-center text-lg font-semibold mb-10 bg-[#32d314]"
                        type="submit"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
