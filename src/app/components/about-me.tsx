import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

export default function AboutMe() {
    return (
        <section id='aboutme' className="flex items-center justify-center" style={{
            minHeight: "70vh"
        }}>

            <div className="bg-sy/5 backdrop-blur border border-sy/40 rounded-3xl shadow shadow-bd/5 stroke-effect flex flex-col sm:flex-row" style={{
                width: "min(95%,700px)",
            }}>
                <div className='p-6'>
                    <FormatQuoteRoundedIcon className='text-4xl text-sy' />
                </div>
                <div>
                    <div className='p-6 pt-0 sm:pt-6 flex justify-center sm:justify-start'>
                        <img src="/mubashar.jpg" alt="Mubashar" className='object-cover rounded-full bg-sy/10 shadow grayscale [&:hover+div]:animate-ping' style={{
                            width: "max(120px,10vw)",
                            height: "max(120px,10vw)",
                        }} />
                        <div className='absolute bg-bd/10 rounded-full -z-10 scale-75' style={{
                            width: "max(120px,10vw)",
                            height: "max(120px,10vw)",
                        }}></div>
                    </div>
                    <h2 className=" text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tl to-bd from-green-500 p-6 pt-0">Muhammad Mubashar Khalid</h2>
                    <p className="text-sm p-6 pt-0 opacity-50">Hi, I am Mubashar, a full-stack web developer and a student. I've been diving into web development since 2022, and I am passionate about it. I enjoy exploring new technologies, and I am committed to becoming more productive over time.</p>
                </div>
            </div>
            <div className="w-10 h-10 bg-bd/10 scale-150 absolute -z-10 rounded-full blur"></div>

        </section>
    )
}
