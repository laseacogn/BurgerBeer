import { useState } from 'react';
import { Button } from 'flowbite-react';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const ModalPaymentMethod = ({ modalOpen, setPayment }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const listPaymentMethod = [
        'Pay on delivery',
        'Pay on card',
        'Pay on Momo/ Zalo Pay/ VNPay',
    ];

    const handleSubmit = () => {
        if (selectedPaymentMethod) {
            setPayment(selectedPaymentMethod); modalOpen(false);
        } else {
            alert('Please select a payment method.');
        }
    };

    return (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif] animate-fade-up animate-duration-200 animate-delay-[6ms] animate-ease-linear ">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
                <div className="flex items-center pb-3 border-b text-[#000000]">
                    <h3 className="text-lg font-bold flex-1">Payment Method</h3>
                    <button onClick={() => modalOpen(false)}>
                        <IoMdClose className="ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500 text-2xl" />
                    </button>
                </div>
                <div className="my-4">
                    <div className="flex max-w-md flex-col gap-4">
                        {listPaymentMethod.map((item, index) => (
                            <div className="flex items-center mb-4" key={index}>
                                <input
                                    id={`payment-radio-${index}`}
                                    type="radio"
                                    value={item}
                                    name="payment-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onChange={() => setSelectedPaymentMethod(item)} 

                                />
                                <label
                                    htmlFor={`payment-radio-${index}`}
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    {item}
                                </label>
                            </div>
                        ))}
                        <Button type="button" color="dark" onClick={handleSubmit}>
                            Confirm Order
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPaymentMethod;
