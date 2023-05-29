import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <div className="max-w-[1140px] mx-auto h-[62px] bg-fixed z-50 left-0 right-0">
            <div className="flex justify-between items-center">
                <Link to="/"><img className="w-[233px] h-[62px]" src={logo} alt="" /></Link>

                <ul className='flex gap-6 text-white'>
                    <li>
                        
