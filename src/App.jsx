import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function App() {
  return (
    <>
    <p className="text-indigo-700 hover:text-orange-200 text-xl font-bold underline text-center tracking-widest italic">Pengenalan Tailwind </p>
    <br />
     
     <div className="w-full text-center">
     1. font family
      <p className="font-serif">apa aja</p>
      <p className="font-sans">apa aja</p>
      <p className="font-mono">apa aja</p>

      <br />
      2.Hover
     <p className="font-sans  hover:font-serif">apa aja</p>
      <br />
      3.font size
      <div className="text-sm">apa aja</div>
      <div className="text-base">apa aja</div>
      <div className="text-lg">apa aja</div>
      <div className="text-xl">apa aja</div>
      <div className="text-2xl">apa aja</div> 
      <div className="text-[20px]">apa aja contoh custum</div> 
      <br />
      4.italic
      <p className="italic">apa aja</p>
      <p className="no-italic">apa aja</p>
      <br />
      5.font weight
      <p className="font-light">apa aja</p>
      <p className="font-normal">apa aja</p>
      <p className="font-medium">apa aja</p>
      <p className="font-semibold">apa aja</p>
      <p className="font-bold">apa aja</p>
      <br />
      6.latter spacing
      <p className="tracking-tighter">apa aja</p>
      <p className="tracking-normal">apa aja</p>
      <p className="tracking-widest">apa aja</p>
      <br />
      7.Line weight
      <p className="leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Odit voluptatem commodi deleniti dolor maxime libero officiis 
        corporis.Eum odio, consequuntur, adipisci non minus ducimus, 
        totam expedita architecto corrupti deleniti pariatur.
      </p>
      <hr />
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odit voluptatem commodi deleniti dolor maxime libero officiis 
        corporis.Eum odio, consequuntur, adipisci non minus ducimus, 
        totam expedita architecto corrupti deleniti pariatur.
      </p>
      <hr />
      <p className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Odit voluptatem commodi deleniti dolor maxime libero officiis
        corporis. Eum odio, consequuntur, adipisci non minus ducimus, 
        totam expedita architecto corrupti deleniti pariatur.
      </p>
      <br />
      8.Text align
      <p className="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa minima sint iste sapiente. Animi eveniet quia ex
         tenetur minima repellat, porro est sunt quas repudiandae,
          ullam culpa impedit quibusdam numquam!
      </p>
      <hr />
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa minima sint iste sapiente. Animi eveniet quia ex
         tenetur minima repellat, porro est sunt quas repudiandae,
          ullam culpa impedit quibusdam numquam!
      </p>
      <hr />
      <p className="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa minima sint iste sapiente. Animi eveniet quia ex
         tenetur minima repellat, porro est sunt quas repudiandae,
          ullam culpa impedit quibusdam numquam!
      </p>
      <hr />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa minima sint iste sapiente. Animi eveniet quia ex
         tenetur minima repellat, porro est sunt quas repudiandae,
          ullam culpa impedit quibusdam numquam!
      </p>
      <br />
      9.Text Color
      <p className="text-sky-300">apa aja</p>
      <p className="text-sky-400">apa aja</p>
      <p className="text-sky-500">apa aja</p>
      <p className="text-sky-600">apa aja</p>
      <p className="text-sky-700">apa aja</p>
      <p className="text-sky-900">apa aja</p>
      <p className="text-sky-900 hover:text-orange-200 text-xl font-bold underline text-center">apa aja (Hover)</p>
      <br />
      10.Text Decoration
      <p className="underline">apa aja</p>
      <p className="overline">apa aja</p>
      <p className="line-through">apa aja</p>
      <p className="underline decoration-solid">apa aja</p>
      <p className="underline decoration-double">apa aja</p>
      <p className="underline decoration-dotted">apa aja</p>
      <p className="underline decoration-dashed">apa aja</p>
      <p className="underline decoration-wavy">apa aja</p>

      <br />
      11.Background
      <p className="bg-indigo-300 rounded-full w-96 ">apa aja</p>
      <br />
      <p className="bg-yellow-300 rounded-md w-96">apa aja</p>
      <br />
      <p className="bg-purple-300 hover:bg-amber-600 rounded-lg w-96">apa aja</p>
      <br />
      12.Widht
      <div className="w-96 bg-indigo-300 rounded-md">w-96</div>
      <div className="w-80 bg-indigo-400 rounded-md">w-80</div>
      <div className="w-64 bg-indigo-500 rounded-md">w-64</div>
      <div className="w-48 bg-indigo-600 rounded-md">w-48</div>
      <div className="w-40 bg-indigo-700 rounded-md">w-40</div>
      <div className="w-32 bg-indigo-800 rounded-md text-red-400">w text color</div>
      <div className="w-[200px] bg-indigo-900 hover:bg-amber-500 rounded-md">w custom</div>
      <br />
      13.Height
      <div className="grid grid-cols-3 gap-4 content-end">
      <div className="h-96 w-96 bg-indigo-300 rounded-md">h-96</div>
      <div className="h-80 w-80 bg-indigo-400 rounded-md">h-80</div>
      <div className="h-64 w-64 bg-indigo-500 rounded-md">h-64</div>
      <div className="h-48 w-48 bg-indigo-600 rounded-md">h-48</div>
      <div className="h-40 w-40 bg-indigo-700 rounded-md">h-40</div>
      <div className="h-32 w-36  bg-indigo-800 rounded-md">h-32</div>
      <div className="h-[250px] w-32 bg-indigo-900 rounded-md">h-24 custom</div>
      </div>
      <br />
      <div className="h-screen w-screen  bg-indigo-800 hover:bg-teal-300 rounded-md text-white">h-screen w-screen (mengikuti layar monitor/pc anda)</div>
      <br />
      14.Pading
      <div className="pt-6 bg-slate-500">pt-6</div>
      <div className="pr-4 bg-rose-500">pr-4</div>
      <div className="pb-8 bg-indigo-500">pb-8</div>
      <div className="pl-2 bg-teal-500">pl-2</div>
      <div className="py-2 bg-sky-500">py-2</div>
      <div className="px-2  bg-gray-500">px-2</div>
      <div className="p-[50px]  bg-sky-400 hover:bg-red-500">p custom</div>
      <br />
      15.Margin
      <div className="mt-6 bg-teal-300">mt-6</div>
      <div className="mr-4 bg-teal-300">mr-4</div>
      <div className="mb-8 bg-teal-300">mb-8</div>
      <div className="ml-2 bg-teal-300">ml-2</div>
      <div className="my-2 bg-teal-300">my-2</div>
      <div className="m-[20px] bg-teal-300 hover:bg-red-400">m custom</div>
      <br />
      16.Justify Content + Gap
      <br />
      <div className="flex justify-start bg-cyan-200 hover:bg-orange-200 gap-2">
        <div className="p-2 rounded-lg bg-blue-800">01</div>
        <div className="p-2 rounded-lg  bg-blue-800">02</div>
        <div className="p-2 rounded-lg  bg-blue-800">03</div>
      </div> 
      <br />
      <div className="flex justify-center bg-cyan-200 hover:bg-orange-300 gap-2">
        <div className="p-2 rounded-lg bg-blue-800">01</div>
        <div className="p-2 rounded-lg  bg-blue-800">02</div>
        <div className="p-2 rounded-lg  bg-blue-800">03</div>
      </div> 
      <br />
      <div className="flex justify-end bg-cyan-200 hover:bg-orange-400 gap-2">
        <div className="p-2 rounded-lg bg-blue-800">01</div>
        <div className="p-2 rounded-lg  bg-blue-800">02</div>
        <div className="p-2 rounded-lg  bg-blue-800">03</div>
      </div> 
      <br />
      <div className="flex justify-between bg-cyan-200 hover:bg-orange-500 gap-2">
        <div className="p-2 rounded-lg bg-blue-800">01</div>
        <div className="p-2 rounded-lg  bg-blue-800">02</div>
        <div className="p-2 rounded-lg  bg-blue-800">03</div>
      </div> 
      <br />
      <div className="flex justify-around bg-cyan-200 hover:bg-orange-600 gap-2">
        <div className="p-2 rounded-lg bg-blue-800">01</div>
        <div className="p-2 rounded-lg  bg-blue-800">02</div>
        <div className="p-2 rounded-lg  bg-blue-800">03</div>
      </div> 
      <br />
      <div className="flex justify-evenly bg-cyan-200 hover:bg-orange-700 gap-2">
        <div className="p-2 rounded-lg bg-blue-800">01</div>
        <div className="p-2 rounded-lg  bg-blue-800">02</div>
        <div className="p-2 rounded-lg  bg-blue-800">03</div>
      </div> 
      <br />
      17.Border
      <div className="border border-indigo-600 text-center w-40 h-10 rounded-xl">Border</div>
      <div className="border-2 border-rose-600 text-center w-40 h-10 rounded-xl">Border</div>
      <div className="border-4 border-teal-600 text-center w-40 h-10 rounded-xl">Border</div>
      <div className="border-8 border-orange-600 text-center w-40 h-10 rounded-xl">Border</div>
      <div className="border-[3px] border-sky-600 text-center w-40 h-10 rounded-xl">Border Custom</div>
      18.flex
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-sky-400">
          Lorem ipsum dolor sit amet 
          
        </div>
        <div className="flex-initial w-64 bg-sky-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. C
          
        </div>
        <br />
        <div className="flex-auto w-32 bg-sky-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          
        </div>
      </div>
      <br />
      Button
      <br />
      <button
      type="button"
      className="cursor-pointer bg-rose-400 hover:bg-yellow-400 p-2 rounded-md">
        Submit
      </button>
      <br />
      <br />
      <button
      type="button"
      className="cursor-progress bg-amber-400 hover:bg-lime-500 p-2 rounded-md">
        Saving
      </button>
      <br />
      <br />
      <button 
      type="button"
      className="cursor-not-allowed bg-sky-300 hover:bg-teal-300 p-2 rounded-md">
        Confrim
      </button>
      <br />
      <br />
      Shadow
      <br />
      <br />
      <div className="shadow-md bg-cyan-400 shadow-orange-500/50 hover:bg-teal-300 w-40 text-center rounded-r-lg py-2 h-14">apa aja</div>
      <br />
      <div className="shadow-lg bg-cyan-400 shadow-orange-500/50 hover:bg-teal-400 w-40 text-center rounded-r-lg py-2 h-14">apa aja</div>
      <br />
      <div className="shadow-xl bg-cyan-400 shadow-orange-500/50 hover:bg-teal-500 w-40 text-center rounded-r-lg py-2 h-14">apa aja</div>
      <br />
      <div className="shadow-2xl bg-cyan-400 shadow-orange-500/50 hover:bg-teal-600 w-40 text-center rounded-r-lg py-2 h-14">apa aja</div>
      <br />
      display
      <div >
        <span className="inline bg-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Commodi, quis. Sed explicabo fugiat maxime reiciendis officia n
         ecessitatibus sit hic, dolor non? Sed porro minus repellat quo et 
         consequuntur tenetur ducimus.
        </span>
        Will Cause The text inside the element to wrab normally
      </div>
      <br />
      <div >
        <span className="inline-block bg-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Commodi, quis. Sed explicabo fugiat maxime reiciendis officia n
         ecessitatibus sit hic, dolor non? Sed porro minus repellat quo et 
         consequuntur tenetur ducimus.
        </span>
        Will Cause The text inside the element to wrab normally
      </div>
      <br />
      <div>
      <span className="block bg-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Commodi, quis. Sed explicabo fugiat maxime reiciendis officia n
         ecessitatibus sit hic, dolor non? Sed porro minus repellat quo et 
         consequuntur tenetur ducimus.
        </span>
        Will Cause The text inside the element to wrab normally
      </div>
      

     </div>
     

      
    </>
  )
}

export default App
