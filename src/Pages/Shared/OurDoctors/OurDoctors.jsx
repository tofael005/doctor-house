import doc1 from '../../../assets/doc1.png'
import doc2 from '../../../assets/doc2.png'
import doc3 from '../../../assets/doc3.png'
import { TbLocation } from 'react-icons/tb';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';


const OurDoctors = () => {
    return (
        <div className="max-w-[1140px] mx-auto mb-32">
            <div className="text-center my-10">
                <h1 className="text-2xl font-bold my-2">Our Expert Doctors</h1>
                <p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 px-3">
                <div className="p-4 items-center border rounded-md">
                    <img className="w-full mx-auto" src={doc2} alt="" />
                    <h1 className="mt-4 text-lg font-bold">Karyen Anderson</h1>
                    <p className="mb-3 font-light text-gray-700">BTP -  Senior Physiotherapist</p>
                    <div className="flex gap-1 mb-4 text-orange-500">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarHalf/>
                    </div>

                    <hr />

                    <div className="my-6 text-gray-700 font-light">
                        <div className="flex gap-4 items-center">
                            <TbLocation/>
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className="flex gap-4 items-center my-2">
                            <BsCalendarDate/>
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <AiOutlineDollarCircle/>
                            <p>$ 115</p>
                        </div>
                    </div>
                    <button className="border-[#F7A582] border text-[#F7A582] w-full p-2 rounded-md">View Profile</button>
                </div>
                <div className="p-4 items-center border rounded-md">
                    <img className="w-full mx-auto" src={doc1} alt="" />
                    <h1 className="mt-4 text-lg font-bold">Karyen Anderson</h1>
                    <p className="mb-3 font-light text-gray-700">BTP -  Senior Physiotherapist</p>
                    <div className="flex gap-1 mb-4 text-orange-500">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarHalf/>
                    </div>

                    <hr />

                    <div className="my-6 text-gray-700 font-light">
                        <div className="flex gap-4 items-center">
                            <TbLocation/>
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className="flex gap-4 items-center my-2">
                            <BsCalendarDate/>
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <AiOutlineDollarCircle/>
                            <p>$ 115</p>
                        </div>
                    </div>
                    <button className="bg-[#F7A582] text-white w-full p-2 rounded-md">View Profile</button>
                </div>
                <div className="p-4 items-center border rounded-md">
                    <img className="w-full mx-auto" src={doc3} alt="" />
                    <h1 className="mt-4 text-lg font-bold">Karyen Anderson</h1>
                    <p className="mb-3 font-light text-gray-700">BTP -  Senior Physiotherapist</p>
                    <div className="flex gap-1 mb-4 text-orange-500">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarHalf/>
                    </div>

                    <hr />

                    <div className="my-6 text-gray-700 font-light">
                        <div className="flex gap-4 items-center">
                            <TbLocation/>
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className="flex gap-4 items-center my-2">
                            <BsCalendarDate/>
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <AiOutlineDollarCircle/>
                            <p>$ 115</p>
                        </div>
                    </div>
                    <button className="border-[#F7A582] border text-[#F7A582] w-full p-2 rounded-md">View Profile</button>
                </div>
            </div>
        </div>
    );
};

export default OurDoctors;