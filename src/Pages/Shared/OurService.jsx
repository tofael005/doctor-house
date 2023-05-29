import { Link } from 'react-router-dom';
import doc from '../../assets/doc-banner.png'
import teath from '../../assets/teth.png'

const OurService = () => {
    return (
        <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 mt-20 mb-20 gap-6 px-3">
            <img className="w-full" src={doc} alt="" />
            <div>
                <div>
                    <h1 className="text-2xl font-bold">Our Service</h1>
                    <p className="my-6 font-light md:text-left text-justify  text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error.et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                    <button className="bg-[#F7A582] p-3 rounded-md"><Link to="/cavity-protection">Cavity Protection</Link></button>
                    <button className="p-3 rounded-md border"><Link to="/cosmetic">Cosmetic Dentisty</Link></button>
                    <button className="p-3 rounded-md border"><Link to="/oral-surgery">Oral Surgery</Link></button>
                </div>
                <img className="mt-[50px] mb-[30px]" src={teath} alt="" />
                <div>
                    <h1 className="mb-[30px] text-2xl font-bold">Electro  Gastrology Therapy</h1>
                    <p className="mb-[10px] font-light md:text-left text-justify text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p className="mb-[16px] md:text-left text-justify  font-light text-gray-700">Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                    <button className="border-[#F7A582] border text-[#F7A582] p-3 rounded-md"><Link to="/more-details">More Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default OurService;