
export default function Intro() {
  return (
    <section className="min-h-screen full-h relative flex flex-col justify-center">
      <div className="w-20 h-20 bg-bd rounded-br-full blur-3xl shadow-2xl shadow-bd absolute top-0"></div>
      <div>
        <div className="p-4 pb-0 opacity-50 text-xs">Welcome to,</div>
        <div className="drop-shadow-2xl text-center font-bold text-nowrap p-6 pt-0 tracking-wider back-in-down" style={{
          fontSize: "12vw"
        }}>
          My <b className="text-bd">PortFolio</b>
        </div>
        <div className=" absolute -z-10 opacity-50" style={{
          width: 'min(30vw,300px)',
          height: 'min(30vw,300px)',
          backgroundImage: 'radial-gradient(rgb(var(--sy-rgb)) 1px, transparent 2px)',
          backgroundSize: '14px 14px',
          top: '45%',
          right: '5%',
        }}></div>
      </div>
    </section>
  )
}
