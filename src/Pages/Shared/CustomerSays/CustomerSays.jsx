import review1 from '../../../assets/review-doc.png'
import review2 from '../../../assets/review-doc-girl.png'
import cottetion from '../../../assets/cottetion-icon.png'



const CustomerSays = () => {
    return (
        <div className="max-w-[1140px] mx-auto mt-[130px] px-3 mb-[130px]">
            <div className="text-center">
                <h1 className="text-2xl font-bold">What Our Patients Says</h1>
                <p className="text-normal my-8 text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className='border rounded-md px-8 py-8'>
                    <div className="flex justify-between items-center mb-[20px] mt-[20px]">
                        <div className="flex items-center gap-4">
                            <img src={review1} />
                            <div>
                                <h1 className="text-xl font-semibold">Awlad Hossain</h1>
                                <p className="text-gray-700">Product Designer</p>
                            </div>
                        </div>
                        <img className='w-[54px] h-[42px]' src={cottetion} alt="" />
                    </div>
                    <p className="text-gray-700">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                </div>
                <div className='border rounded-md px-8 py-8'>
                    <div className="flex justify-between items-center mb-[20px] mt-[20px]">
                        <div className="flex items-center gap-4">
                            <img src={review2} />
                            <div>
                                <h1 className="text-xl font-semibold">Farhana Hossain</h1>
                                <p className="text-gray-700">Web Designer</p>
                            </div>
                        </div>
                        <img className='w-[54px] h-[42px]' src={cottetion} alt="" />
                    </div>
                    <p className="text-gray-700">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                </div>
                
            </div>
        </div>
    );
};

export default CustomerSays;