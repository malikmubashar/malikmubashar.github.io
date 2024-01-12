
export const metadata = {
  title: "Not Found",
  description: "404 Not Found",
};

export default function NotFound() {
  return (
    <main className='flex flex-col justify-center items-center '>
      <h1 className=" text-center text-[20vw] text-bd drop-shadow-xl font-bold ">404</h1>
      <p className="opacity-60 text-center">The page you are trying to find dose not exists.</p>
    </main>
  )
}
