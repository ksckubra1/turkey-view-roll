
import { useState } from 'react'
export default function App() {
  const photos = [
    {
      id: 0,
      photo: "image/bg-image-1.jpg",
      title: "Kapadokya",
      city: "Nevşehir"
    },
    {
      id: 1,
      photo: "image/bg-image-2.jpg",
      title: "Uzungöl",
      city: "Trabzon"
    },
    {
      id: 2,
      photo: "image/bg-image-3.jpg",
      title: "Hierapolis",
      city: "Denizli"
    },
    {
      id: 3,
      photo: "image/bg-image-4.jpg",
      title: "Kuş Adası",
      city: "Aydın"
    },
    {
      id: 4,
      photo: "image/bg-image-5.jpg",
      title: "Şehr-i Zade",
      city: "Amasya"
    },
    {
      id: 4,
      photo: "image/bg-image-6.jpg",
      title: "Süleymaniye Camii",
      city: "İstanbul"

    },
    {
      id: 4,
      photo: "image/bg-image-7.jpg",
      title: "Sazova Parkı",
      city: "Eskişehir"
    }
  ]

  const [front, setFront] = useState(0)
  const [back, setBack] = useState(0)
  const [effect, setEffect] = useState(false)
  const [textEffect, setTextEffect] = useState(false)

  const nextBtn = () => {
    if (front + 1 > photos.length - 1 || effect) return

    setBack(v => v + 1)
    setEffect(true)

    setTimeout(()=>{
      setTextEffect(true)
    },700)
    setTimeout(() => {
      setEffect(false)
      setTextEffect(false)
      setFront(v => v + 1)
    }, 1200)
  }

  const prevBtn = () => {
    if (front < 1 || effect) return

    setBack(v => v - 1)
    setEffect(true)

    setTimeout(()=>{
      setTextEffect(true)
    },700)

    setTimeout(() => {
      setEffect(false)
      setTextEffect(false)
      setFront(v => v - 1)
    }, 1200)
  }

  return (
      <>
        {/*BACKGROUND IMAGE*/}
        <div className="view flex justify-center items-center bg-black">

          <img className={`absolute view object-cover${effect ? " back1" : ""}`} src={photos[back].photo} alt="" />
          <img className={`view object-cover${effect ? " front1" : ""}`} src={photos[front].photo} alt="" />
          {/*MIDDLE IMAGE*/}
          <div className="absolute flex justify-center overflow-hidden  items-center rounded-full h-[1500px] aspect-square border-r-4 border-white/30">
            <img className={`absolute view object-cover${effect ? " back2" : ""}`} src={photos[back].photo} alt="" />
            <img className={`view object-cover${effect ? " front2" : ""}`} src={photos[front].photo} alt="" />
            <div className="absolute w-screen h-screen bg-black/30"></div>
            {/*FOREGROUND IMAGE*/}
            <div className="absolute flex justify-center items-center aspect-square h-3/5 rounded-full overflow-hidden border-l-4 border-white/30">
              <img className={`absolute view object-cover${effect ? " back3" : ""}`} src={photos[back].photo} alt="" />
              <img className={`view object-cover${effect ? " front3" : ""}`} src={photos[front].photo} alt="" />
            </div>
          </div>
        </div>

        <div className={"absolute top-0 left-0 view flex flex-col py-20"}>
          <div className="mx-auto max-w-[2200px] w-full flex flex-col h-full">
            <header className="">
              <img src="/image/logo.webp" alt="logo"/>
            </header>
            <div className={`flex-1 flex flex-col justify-center items-center`}>
              <div className={`overflow-y-hidden py-3`}>
                <h1 className={`text-8xl text-white/80 title-text font-black${textEffect ? " text-anim-out":" text-anim-in"}`}>
                  {photos[front].title}
                </h1>
              </div>

              <div className={`overflow-y-hidden py-3`}>
                <h2 className={`text-6xl text-white/60 font-bold${textEffect ? " text-anim-out":" text-anim-in"}`}>
                  {photos[front].city}
                </h2>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-5">
              <button disabled={front < 1} onClick={prevBtn}
                      className="disabled:opacity-30 transition duration-200 bg-black/50 px-5 py-3 rounded border border-white/20 text-white flex gap-x-3 items-center backdrop-blur-sm">
                <i className="fa-solid fa-chevron-left"></i>
                <span>Back</span>
              </button>
              <button disabled={front + 1 > photos.length - 1} onClick={nextBtn}
                      className="disabled:opacity-30 transition duration-200 bg-black/50 px-5 py-3 rounded border border-white/20 text-white flex gap-x-3 items-center backdrop-blur-sm">
                <span>Next</span>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </>
  )
}