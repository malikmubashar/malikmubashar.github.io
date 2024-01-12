import { GitHub } from '@mui/icons-material';
import ThemeButton from '../theme-button';

export default function Footer() {
    return (
        <footer>
            <div className='relative w-full'>
                <div className='absolute inset-0 top-5 overflow-hidden  -z-10'>
                    <div className='bg-bd/90 origin-top-left rotate-1' style={{ width: "110vw", height: "50vh", borderRadius: "180px 300px 0 0" }}></div>
                    <div className='bg-bd/50 absolute top-0 -z-10 origin-top-right -rotate-1 -translate-x-2' style={{ width: "100vw", height: "50vh", borderRadius: "300px 180px 0 0" }}></div>
                </div>
                <div className='h-full text-py flex flex-col justify-center pt-10'>
                    <p className='text-4xl text-center font-bold font-mono p-4'>Mubasahr</p>
                    <p className='text-center text-xs p-9 text-cl/50'>
                        Hey there! I am Mubashar, a web developer with 2 years of experience. I know how to code with JavaScript, use CSS with Tailwind, work with MongoDB for databases, handle HTML, and build cool stuff with React and Nextjs. If you want to make your ideas real, just shoot me a message today!
                    </p>
                    <div className='flex justify-end p-1.5'>
                        <ThemeButton />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-around text-xs items-center py-1.5 bg-bd/20 border-t'>
                <p>2023 Copyright - All Right Reserved</p>
                <div>
                    <a href="#github">
                        <GitHub className='text-xl' />
                    </a>
                </div>
            </div>
        </footer>
    )
}
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fonaircode.com%2Fcreative-website-footer-ui-design%2F&psig=AOvVaw1Qtgwqu4TBR3BGl_dQWsyY&ust=1704991695034000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDd6p6j04MDFQAAAAAdAAAAABAD