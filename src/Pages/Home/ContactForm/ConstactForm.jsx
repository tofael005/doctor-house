import { FiPhoneCall } from 'react-icons/fi';
import { TbLocation } from 'react-icons/tb';

const ConstactForm = () => {
    return (
        <div className="max-w-[1140px] mx-auto text-white px-3">
            <div className="grid md:grid-cols-2 gap-6 rounded-md items-center px-10 py-10 bg-[#07332F]">
                <div>
                    <h1 className="text-2xl text-center md:text-left font-bold my-4">Contact With Us</h1>
                    <p className="font-light mb-6 text-center md:text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <div className="flex gap-2 mb-4 items-center">
                        <FiPhoneCall />
                        <p>+88 01750 14 14 14</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TbLocation />
                        <p>Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <form>
                    <div className="grid md:grid-cols-2 gap-4">
                        <input className='p-3 rounded-md  bg-[#073f3a] border border-[#07332F]' type="text" name="name" placeholder='Name' />
                        <input className='p-3 rounded-md  bg-[#073f3a] border border-[#07332F]' type="email" name="email" placeholder='Email' />
                        <input className='p-3 rounded-md  bg-[#073f3a] border border-[#07332F]' type="number" name="number" placeholder='Phone' />
                        <input className='p-3 rounded-md  bg-[#073f3a] border border-[#07332F]' type="text" name="name" placeholder='Doctor Name' />
                        <input className='p-3 rounded-md  bg-[#073f3a] border border-[#07332F]' type=" text-white time" name="time" placeholder='Time' />
                        <input className='p-3 text-white rounded-md  bg-[#073f3a] border border-[#07332F]' type="date" name="date" placeholder='Date' />

                    </div>
                    <button className="w-full p-3 rounded-md bg-[#F7A582] mt-4">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default ConstactForm;