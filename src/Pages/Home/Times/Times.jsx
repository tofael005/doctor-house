import { AiOutlineClockCircle } from 'react-icons/ai';
import { TbLocation } from 'react-icons/tb';
import { FiPhoneCall } from 'react-icons/fi';

const Times = () => {
    return (
        <div className="max-w-[1140px] mx-auto px-3">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="flex items-center gap-4 text-white bg-[#07332F] py-10 rounded-md px-6">
                    <div className="text-5xl">
                        <AiOutlineClockCircle />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold my-2">Opening Hours</h1>
                        <p>Open 9.00 am to 5.00pm Everyday</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-white bg-[#F7A582] py-10 rounded-md px-6">
                    <div className="text-5xl">
                        <TbLocation />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold my-2">Our Location</h1>
                        <p>Dhanmondi 17, Dhaka -1200, Bangladesh.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-white bg-[#07332F] py-10 rounded-md px-6">
                    <div className="text-5xl">
                        <FiPhoneCall />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold my-2">Contact</h1>
                        <p>+88 01750 00 00 00 <br />
                            +88 01750 00 00 00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Times;