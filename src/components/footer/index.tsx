// import { GitHub } from '@mui/icons-material';
import ThemeButton from '../theme-button';

export default function Footer() {
    return (
        <footer>
            <div className='relative w-full'>
                <div className='absolute inset-0 top-5 overflow-hidden  -z-10'>
                    <div className='bg-bd/90 origin-top-left rotate-1' style={{ width: "110vw", height: "50vh", borderRadius: "180px 300px 0 0" }}></div>
                    <div className='bg-bd/50 absolute top-0 -z-10 origin-top-right -rotate-1 -translate-x-2' style={{ width: "100vw", height: "50vh", borderRadius: "300px 180px 0 0" }}></div>
                </div>
                <div className='h-full text-py flex flex-col justify-center pt-10' style={{
                    minHeight: "30vh"
                }}>
                    <p className='text-4xl text-center font-bold font-mono'>Mubasahr</p>
                </div>
            </div>
            <div className='w-full flex justify-between px-6 text-[10px] items-center py-1.5 bg-bd/50 border-t'>
                <p className='opacity-50'>2024 Copyright - All Right Reserved</p>
                <ThemeButton />
            </div>
        </footer>
    )
}