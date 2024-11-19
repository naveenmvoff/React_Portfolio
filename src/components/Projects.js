import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'

export default function Projects() {
 return <section className="flex flex-col py-5 px-5 justify-center bg-primary text-white">
    <div className="w-1/2">
        <div className="flex justify-center">
            <h1 className='text-4xl border-b-4 text-white border-[#646464] mb-5 w-[135px] font-bold'>Projects</h1>
        </div>
    </div>
    <div className="w-full">
        <div className='flex px-10 gap-5'>
            
            <div className='relative'>
                <img className='h-[200px]' src={websiteImg1}></img>
                <div className='absolute left-0 right-0 bottom-[0px] top-0 bg-secondary'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus nihil omnis numquam dolorum placeat.</p>
                </div>
            </div>

            <div className='relative'>
                <img className='h-[200px]' src={websiteImg2}></img>
                <div className='absolute left-0 right-0 bottom-[0px] top-0 bg-secondary'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus nihil omnis numquam dolorum placeat.</p>
                </div>
            </div>

            <div className='relative'>
                <img className='h-[200px]' src={websiteImg3}></img>
                <div className='absolute left-0 right-0 bottom-[0px] top-0 bg-secondary'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus nihil omnis numquam dolorum placeat.</p>
                </div>
            </div>

        </div>
    </div>
 </section>   
}