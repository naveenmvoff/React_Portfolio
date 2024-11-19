import Heroimg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineInstagram , AiOutlineGithub } from "react-icons/ai";

export default function() {
    return <section className='flex flex-col md:flex-row justify-center px-5 py-32 bg-primary'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I am MV <span className='text-black hover:text-white'>Naveen</span>
            <p className='text-2xl'>I am a Full-stack developer</p></h1>

            <div className='flex py-5 '>
                <a href='#' className='text-white hover:text-black pr-5'><AiOutlineLinkedin size={40}/></a>
                <a href='#' className='text-white hover:text-black pr-5'><AiOutlineGithub size={40}/></a>
                <a href='#' className='text-white hover:text-black '><AiOutlineInstagram size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src = {Heroimg}/>
    </section>
} 