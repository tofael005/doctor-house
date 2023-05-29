import banner from '../../assets/frame 9.png'
import doc from '../../assets/banner-doc.png'


const Banner = () => {
    return (
        <div className="h-screen w-full">
            <img className='w-full h-full object-cover' src={banner} alt="" />
            <div className="absolute top-10 right-0 left-0 max-w-[1140px] mx-auto md:grid-cols-2  grid gap-6">
                <div className="mt-28">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left text-white font-bold">Your Best Medical <br /> Help Center</h1>
                    <p className="my-3 text-white md:text-left text-center">Lorem Ipsum is simply dummy text they are printing <br /> typesetting has been the industry’s stardard.</p>
                    <div className="w-full text-center">
                        <button className="bg-[#F7A582] p-3 rounded-md text-white block text-center">All Service</button>
                    </div>
                </div>
                <img className="w-full" src={doc} alt="" />
            </div>
        </div>
    );
};

export default Banner;