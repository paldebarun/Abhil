
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaIndianRupeeSign } from "react-icons/fa6";
import 'react-tabs/style/react-tabs.css';
import QR from "../../assets/qr.jpeg";

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [activeTab,setActiveTab] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        amount: state ? state.amount : "",
        pan: "",
        pin: "",
        purpose: state ? state.toWhat : "",
    });

    const checkoutHandler = async () => {
        try {
            if (!formData.amount) {
                alert("Amount is required.");
            }
            const {
                data: { key1 },
            } = await axios.get("https://api.abhilyoungmind.com/api/v1/getkey");
            const orderURL = "https://api.abhilyoungmind.com/api/v1/payment";
            const {
                data,
            } = await axios.post(orderURL, formData);
            const { order, paymentId } = data;
            // console.log(order, paymentId);
            const options = {
                key: key1,
                amount: order.amount,
                currency: "INR",
                name: "Abhil Young Mind Foundation",
                discription: "Donation for better future of poor childs.",
                order_id: order.id,
                handler: function (res) {
                    axios
                        .post(`https://api.abhilyoungmind.com/api/v1/paymentverification`, { res, paymentId })
                        .then((res) => {
                            alert("payment successful, PaymentId: " + res.data.paymentId);
                            navigate('/paymentsuccess', { state: res.data.paymentId })
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
        // navigate('/payment')
    };

    const [buttonStyle, setButtonStyle] = useState({
        width: "13rem",
        height: "80px",
        borderRadius: "35px",
        backgroundColor: "#00715d",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: "500",
        textAlign: "center",
    });
    const [tabListStyle, setTabListStyle] = useState({ display: "flex", justifyContent: "center", gap: "2rem", border: "none" });

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 650) {
                setButtonStyle((prevStyle) => ({
                    ...prevStyle,
                    width: '8rem',
                    height: "60px",
                    borderRadius: "25px",
                    fontSize: "14px",
                }));
                setTabListStyle((prevStyle) => ({ ...prevStyle, padding: "0 1rem", gap: "0.5rem" }))
            } else {
                setButtonStyle((prevStyle) => ({
                    ...prevStyle,
                    width: '13rem',
                    height: "80px",
                    borderRadius: "35px",
                    fontSize: "20px",
                }));
                setTabListStyle((prevStyle) => ({ ...prevStyle, gap: "2rem" }))
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize the style based on the current window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div className="container mx-auto py-12">
            <Tabs className={"max-md:flex-col"} defaultIndex={0} onSelect={(index) => console.log(index)}>
                <TabList style={tabListStyle}  >
                    <Tab style={buttonStyle} >Pay Online</Tab>
                    <Tab style={buttonStyle}>Pay With QR</Tab>
                    <Tab style={buttonStyle}>Bank Transfer</Tab>
                </TabList>

                <TabPanel style={{ maxWidth: "36rem", margin: "2rem auto", boxShadow: "0  0 5px 2px #d4d4d4", backgroundColor: "white", borderRadius: "10px" }}>
                    <form onSubmit={handleFormSubmit} className=" w-full p-4 sm:p-8">
                        <div className=" grid grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-3">
                            <div className="w-full">
                                <label
                                    className="donation-label"
                                    htmlFor="name"
                                >
                                    Full Name*
                                </label>
                                <input
                                    className="donation-input"
                                    id="name"
                                    required
                                    type="text"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    className="donation-label"
                                    htmlFor="email"
                                >
                                    Email*
                                </label>
                                <input
                                    className="donation-input"
                                    id="email"
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    className="donation-label"
                                    htmlFor="address"
                                >
                                    Address*
                                </label>
                                <input
                                    className="donation-input"
                                    id="address"
                                    required
                                    type="text"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    className="donation-label"
                                    htmlFor="phone"
                                >
                                    Phone No.*
                                </label>
                                <input
                                    className="donation-input"
                                    id="phone"
                                    required
                                    type="text"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    className="donation-label"
                                    htmlFor="amount"
                                >
                                    Pan Number*
                                </label>
                                <input
                                    className="donation-input"
                                    id="pan"
                                    required
                                    type="text"
                                    placeholder="Enter Pan Number"
                                    value={formData.pan}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    className="donation-label"
                                    htmlFor="amount"
                                >
                                    Pin Code*
                                </label>
                                <input
                                    className="donation-input"
                                    id="pin"
                                    required
                                    type="text"
                                    placeholder="Pin code"
                                    value={formData.pin}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <label
                                className="donation-label"
                                htmlFor="Purpose"
                            >
                                Purpose*
                            </label>
                            <select value={formData.purpose} className="w-full py-2
                            5 border border-gray-400 rounded-md px-3 outline-none" id="purpose" onChange={handleInputChange} required >
                                <option value="">----select----</option>
                                <option value="Donate For Poor's Meal">Donate For Poor's Meal</option>
                                <option value="Donate For Child Education">Donate For Child Education</option>
                                <option value="Donate For Free Treatment">Donate For Free Treatment</option>
                                <option value="Donate For Homeless People">Donate For Homeless People</option>
                                <option value="Donate For Poor's Mass Marriages">Donate For Poor's Mass Marriages</option>
                            </select>
                        </div>
                        <div className="w-full rounded-lg bg-[#00715d] text-xl py-6 font-bold text-white flex items-center justify-between px-6 mt-4">
                            <FaIndianRupeeSign size={25} />
                            <input
                                className="bg-transparent w-full border-none outline-none text-end"
                                id="amount"
                                required
                                type="text"
                                placeholder="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            className="w-40 mx-auto rounded-full text-white py-2 flex justify-center text-lg font-semibold my-6 bg-[#fbd45a]"
                            type="submit"
                        >
                            Donate Now
                        </button>
                    </form>
                </TabPanel>
                <TabPanel style={{ maxWidth: "36rem", margin: "2rem auto", padding: "2rem", boxShadow: "0  0 5px 2px #d4d4d4", backgroundColor: "white", borderRadius: "10px" }}>
                    <h1 className="text-lg font-semibold text-center text-gray-700 mb-4">Scan this QR and pay</h1>
                    <img src={QR} alt="qr" className="w-40 h-auto mx-auto" />
                </TabPanel>
                <TabPanel style={{ maxWidth: "36rem", margin: "2rem auto", padding: "2rem", boxShadow: "0  0 5px 2px #d4d4d4", backgroundColor: "white", borderRadius: "10px" }}>
                    <div>
                        <div className="flex mb-3 items-center space-x-3 text-lg font-medium">
                            <h1>Account Type- </h1>
                            <p className="text-gray-600">Current</p>
                        </div>
                        <div className="flex mb-3  items-center space-x-3 text-lg font-medium">
                            <h1>Account No- </h1>
                            <p className="text-gray-600">924020005516051</p>
                        </div>
                        <div className="flex mb-3 items-center space-x-3 text-lg font-medium">
                            <h1>Customer Id- </h1>
                            <p className="text-gray-600">959519740</p>
                        </div>
                        <div className="flex mb-3 items-center space-x-3 text-lg font-medium">
                            <h1>IFSC Code- </h1>
                            <p className="text-gray-600">UTIB0004440</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="border-b w-full"></div>
                        <h1 className="text-center px-4">OR</h1>
                        <div className="border-b w-full "></div>
                    </div>
                    <div>
                        <div className="flex mb-3 items-center space-x-3 text-lg font-medium">
                            <h1>Account Type- </h1>
                            <p className="text-gray-600">Savings</p>
                        </div>
                        <div className="flex mb-3  items-center space-x-3 text-lg font-medium">
                            <h1>Account No- </h1>
                            <p className="text-gray-600">924020005516051</p>
                        </div>
                        <div className="flex mb-3 items-center space-x-3 text-lg font-medium">
                            <h1>Customer Id- </h1>
                            <p className="text-gray-600">959519740</p>
                        </div>
                        <div className="flex mb-3 items-center space-x-3 text-lg font-medium">
                            <h1>MID- </h1>
                            <p className="text-gray-600">037213006960168</p>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
            {/* <div className="uppercase text-center text-2xl font-bold mb-10 underline underline-offset-8 decoration-[#32d314]">
                Thank you for Donating - Share Your Details
            </div>
            <div className="flex justify-center my-8">
                <form className="w-full max-w-lg px-6" onSubmit={handleFormSubmit}>
                  
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full">
                            <label
                                className="donation-label"
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
                                className="donation-label"
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
                                className="donation-label"
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
                                className="donation-label"
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
                                className="donation-label"
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
            </div> */}
        </div>
    );
};

export default Checkout;
