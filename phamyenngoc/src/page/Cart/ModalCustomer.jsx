import { useContext, useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import MethodContext from '../../Context/methodProvider';

const ModalCustomer = ({ modalOpen, setFullName, setPhoneNumber, setAddress }) => {
    const [fullName, setFullName1] = useState('');
    const [phoneNumber, setPhoneNumber1] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');

    const { notify } = useContext(MethodContext)
    const listPaymentMethod = [
        'Pay on delivery',
        'Pay on card',
        'Pay on Momo/ Zalo Pay/ VNPay',
    ];

    const handleSubmit = () => {
        let address = address2 + ' ' + address1
        if (fullName) {
            setFullName(fullName)
            setAddress(address)
            setPhoneNumber(phoneNumber)
            modalOpen(false);
        } else {
            notify('Please fill all field.');
        }
    };

    return (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif] animate-fade-up animate-duration-200 animate-delay-[6ms] animate-ease-linear ">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
                <div className="flex items-center pb-3 border-b text-[#000000]">
                    <h3 className="text-lg font-bold flex-1"> Delivery Information</h3>
                    <button onClick={() => modalOpen(false)}>
                        <IoMdClose className="ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500 text-2xl" />
                    </button>
                </div>
                <div className="my-4">

                    <div className="flex max-w-md flex-col gap-4">
                        <div className="flex flex-col-2 gap-8">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Full Name" />
                                </div>
                                <TextInput
                                    id="name"
                                    type="name"
                                    placeholder="Enter your full name..."
                                    required
                                    shadow
                                    value={fullName}
                                    onChange={(e) => setFullName1(e.target.value)}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="phone" value="Phone Number" />
                                </div>
                                <TextInput
                                    id="phone"
                                    type="phone"
                                    placeholder="Enter your phone number..."
                                    required
                                    shadow
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber1(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="address" value="Delivery Address" />
                            </div>
                            <TextInput
                                id="address"
                                type="adress"
                                placeholder="Address, Building, Floor No..."
                                required
                                shadow
                                value={address1}
                                onChange={(e) => setAddress1(e.target.value)}
                            />
                            <TextInput
                                className="mt-[10px]"
                                id="address"
                                type="adress"
                                placeholder="Add detailed address..."
                                required
                                shadow
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                            />
                        </div>

                        <Button type="submit" color="dark" onClick={handleSubmit}>
                            Confirm Order
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCustomer
