import { PlaceRounded } from '@mui/icons-material';

export default function ProfileContent() {
    return (
        <div>
            <span className='text-[10px] opacity-50 flex items-center p-0.5'>
                <PlaceRounded className='scale-50 opacity-50' />
                Pakistan
            </span>
            <div className='flex flex-col items-center gap-y-1 p-3'>
                <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f1303c589e5a41006ba336ee41526ded-1704776371170/c753436b-8231-405f-8958-5d4f6562fa46.png" alt="Mubashar" className='rounded-full border p-0.5 border-bd/20 h-24 w-24 hover:p-0 transition-all duration-500 object-cover' />
                <h1 className='font-semibold text-lg'>Mubashar</h1>
                <p className='pb-6 text-sm text-cl/70'>
                    Full Stack Web Developer .
                </p>
                <div className='flex text-sm gap-x-1 items-center [&:hover>div]:bg-bd'>
                    <a href="https://www.fiverr.com/mmubashar01?public_mode=true" className='border p-1.5 rounded bg-bd/70 hover:bg-sy/30 transition-all hover:scale-105'>Contact Me</a>
                    <div className='bg-sy border opacity-20 h-3'></div>
                    <a href="#github" className='p-1.5 border rounded hover:bg-bd/30 hover:border-bd/50 transition-all hover:scale-105'>View GitHub</a>
                </div>
            </div>
            <div className='bg-sy/40 p-2 pb-3'>
                <p className='uppercase font-bold py-1'>skills</p>
                <ul className='flex flex-wrap gap-2 text-[10px] [&>*]:p-1 [&>*]:border'>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                    <li>HTML5 </li>
                    <li>CSS3</li>
                    <li>Web development</li>
                    <li>React</li>
                    <li>Next.js</li>
                </ul>
            </div>
        </div>
    )
}
