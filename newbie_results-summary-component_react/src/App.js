import {useState} from "react";
import data from "./data.json";

export default function App(){
const [items] = useState(data);

  return(
    <div className="md:flex md:items-center md:justify-center md:h-screen md:max-w-2xl md:mx-auto">
      <section className="md:flex shadow bg-white rounded-3xl">
        <div className="bg-div p-8 md:pt-10 text-center text-white rounded-b-3xl md:flex-1 md:rounded-3xl md:flex
        md:flex-col md:items-center md:justify-center">
          <p className="mb-6">Your result</p>
          <div className="flex items-center justify-center">
            <p className="bg-circle w-24 h-24 md:w-40 md:h-40 flex flex-col items-center justify-center gap-1
            rounded-full text-white text-3xl md:text-6xl font-bold">
              76 <p className="text-slate-200 text-base font-normal">of 100</p> 
            </p>
          </div>
          <h2 className="mt-6 text-white font-bold text-lg md:text-2xl">Great</h2>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className="p-8 md:flex-1">
          <h2 className="text-slate-700 mb-6 text-lg font-bold">Summary</h2>
          <div className="flex flex-col gap-4">
            {items.map((items, index) => (
              <div 
              key={index}
              style={{
                backgroundColor: items.backingColor
              }}
              className="flex items-center justify-between p-4 rounded-lg shadow"
              >
                <h3
                style={{
                  color: items.color,
                }}
                className="flex items-center gap-2"
                >
                  <img src={items.icon} alt={items.category} />
                  {items.category}
                </h3>
                <p className="flex items-center gap-2 text-slate-500">
                  <span className="text-slate-700 font-bold" >{items.score}</span> / 100
                </p>
              </div>
            ))}
          </div>

        <button className="bg-slate-700 py-4 px-6 rounded-full text-white w-full mt-6 
        hover:bg-indigo-600 transition-all duration-200">
          Continue
        </button>
      </div>
    </section>
  </div>
  )
}