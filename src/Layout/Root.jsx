import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Navbar/NavBar';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='bg-red-600'>
                <NavBar />
            </div>
            <div className='md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <div className="bg-slate-100">
                <Footer />
            </div>
        </div>
    );
};

export default Root;