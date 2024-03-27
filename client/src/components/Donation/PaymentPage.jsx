
import Qr from "../../assets/qr.jpeg"
import { FaAnglesUp } from "react-icons/fa6";

const PaymentPage = () => {
    return (
        <section className={"w-full min-h-screen flex justify-center items-center py-6 sm:py-12"}>
            <div className="w-full sm:w-[90%] xl:w-3/4 mx-auto min-h-[30rem] bg-white sm:shadow-lg sm:border rounded-md overflow-hidden p-4 sm:p-8">
                <h1 className="text-xl sm:text-2xl font-semibold pb-3 sm:py-6 md:px-10">Choose your Payment Option</h1>
                <div className="w-full h-auto grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-6 md:col-span-5 sm:border-r sm:pe-6 md:px-10  w-full h-auto">
                        <div className="mb-3">
                            <label className="block font-semibold mb-1.5">Account No.</label>
                            <input type="text" defaultValue={'924020005516051'} placeholder="Enter account no" className="border-2 px-3 py-2 w-full rounded-md outline-none border-gray-300" disabled />
                        </div>
                        <p className="font-semibold mb-2 text-gray-600"><span className="text-gray-900">Account Type:- </span> current</p>
                        <div className="mb-3">
                            <label className="block font-semibold mb-1.5">Customer ID</label>
                            <input type="text" defaultValue={'959519740'} placeholder="Enter customer ID" className="border-2 px-3 py-2 w-full rounded-md outline-none border-gray-300" disabled />
                        </div>
                        <div className="mb-3">
                            <label className="block font-semibold mb-1.5">IFSC Code</label>
                            <input type="text" defaultValue={'UTIB0004440'} placeholder="Enter IFSC code" className="border-2 px-3 py-2 w-full rounded-md outline-none border-gray-300" disabled />
                        </div>
                    </div>
                    <div className=" col-span-12 sm:col-span-6 md:col-span-4 md:border-r sm:px-6 md:px-10">
                        <p className="text-base font-medium text-center text-gray-600">Scan here to pay</p>
                        <div><FaAnglesUp size={24} className="rotate-180 w-6 mx-auto text-gray-500" /></div>
                        <div className="w-full h-auto my-6">
                            <img src={Qr} alt="qr" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3 p-6 space-y-2">
                        <div className="flex justify-between items-center font-semibold px-2">
                            <h1>Amount</h1>
                            <h1>5000</h1>
                        </div>
                        <div className="flex justify-between items-center font-semibold border-b-2 px-2 pb-3 border-gray-500">
                            <h1>Tax & Gst</h1>
                            <h1>10</h1>
                        </div>
                        <div className="flex justify-between items-center font-semibold border-b-2 px-2 pb-3 border-gray-500">
                            <h1>Total amount</h1>
                            <h1>5010</h1>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PaymentPage
