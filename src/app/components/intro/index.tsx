import Button from "./button";

export default function Intro() {
  return (
    <section className="flex flex-col sm:flex-row justify-end relative">

      <div className="flex items-center justify-center w-full min-h-screen sm:min-h-[50vh] relative">
        <div className="absolute left-0" style={{
          translate: "0 -200%",
        }}>
          <div className="drop-shadow-xl p-4 pb-0 opacity-50">Welcome to,</div>
          <div className="drop-shadow-xl font-bold text-nowrap p-6 pt-0 absolute tracking-wider" style={{
            fontSize: "9vw"
          }}>My <b className="text-bd">PortFolio</b></div>
        </div>
        {/* <div className="absolute w-full flex justify-center sm:justify-end sm:translate-x-6" style={{
          bottom: "10%",
        }}>
          <div>
            <Button />
          </div>
        </div> */}
      </div>

      <div className="flex items-center justify-center w-full min-h-screen sm:min-h-[50vh]">
        <div className="rounded-full bg-gradient-to-br from-yellow-400 to-red-400 from-50% to-50% shadow-xl" style={{
          height: "max(350px, 30vw)",
          width: "max(230px, 40%)"
        }}></div>
      </div>

    </section>
  )
}
