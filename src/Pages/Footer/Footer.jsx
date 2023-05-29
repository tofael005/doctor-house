
import logo from '../../assets/footerloto.png'
const Footer = () => {
    return (
        <div className="max-w-[1140px] mx-auto mt-28 px-4">
            <div className="grid md:grid-cols-4 gap-8 py-10">
                <div>
                    <img src={logo} alt="" />
                    <p className="font-light my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
                    <button className='w-full border border-[#F7A582] text-[#F7A582] p-3 rounded-md'>Appointment</button>
                </div>
                <div className='text-center md:text-left'>
                    <h1 className="text-2xl font-bold">Quick Links</h1>
                    <p className="font-light my-2">About Us</p>
                    <p className="font-light">Service</p>
                    <p className="font-light my-2">Doctors</p>
                    <p className="font-light">Department</p>
                    <p className="font-light my-2">Online Payment</p>
                    <p className="font-light">Contact Us</p>
                    <p className="font-light my-2">My Account</p>
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold">Doc House Services</h1>
                    <p className="font-light my-2">Pediatric Clinic</p>
                    <p className="font-light">Diagonostic Clinic</p>
                    <p className="font-light my-2">Cardiack Clinic</p>
                    <p className="font-light">Laboratory Analysis</p>
                    <p className="font-light my-2">Gynecological Clinic</p>
                    <p className="font-light">Personal Counseling</p>
                    <p className="font-light my-2">Dental Clinic</p>
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold">Working Hours</h1>
                    <p className="font-light my-2">Monday - 10 am to 7 pm</p>
                    <p className="font-light">Tuesday - 10 am to 7 pm</p>
                    <p className="font-light my-2">Wednesday - 10 am to 7 pm</p>
                    <p className="font-light">Thursday - 10 am to 7 pm</p>
                    <p className="font-light my-2">Friday - 10 am to 7 pm</p>
                    <p className="font-light">Saturday - 10 am to 7 pm</p>
                    <p className="font-light my-2">Sunday - 10 am to 7 pm</p>
                </div>
            </div>
            <hr />
            <h1 className="text-center mt-8 pb-6 font-light">Copyright © 2022 - All right reserved by Doc House Ltd</h1>
        </div>
    );
};

export default Footer;