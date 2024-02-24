function Project (){
    return (
        <>
        <div className="h-screen w-screen bg-gradient-to-r from-slate-900  to-zinc-500">
            <div className="flex    ">
                {/* <div className="flex bg-gray-200 w-screen h-8">
                    
                </div> */}

                   <div className="flex mt-[30px]">
                   <button className=" flex justify-center ml-40  text-[] font-sans type text-gray-50">Nann</button>
                    <button className=" flex justify-center ml-16 font-light font-serif type text-gray-50  ">Home</button>
                    <button className=" flex justify-center ml-14 font-light font-serif type text-gray-50">ContactUs</button>
                    <button className=" flex justify-center ml-14 font-light font-serif type text-gray-50">About</button>
                    <button className=" flex justify-center ml-14 font-light font-serif type text-gray-50">Profile</button>

                   </div>
                    {/* button */}
                    {/* <div className="ml-[200px]">🔎</div> */}
                    <div className="">
                    {/* <div className="ml-[] mt-[]">Search</div> */}
                    <div className="ml-[500px] bg-white-500-50 h-[25px] w-[50px] bg-gray-700 rounded-md mr-80 mt-[29px] font-serif text-gray-50 hover:bg-slate-500">  
                    <a href="https://www.instagram.com/nann.959/"><button className="ml-1" type="submit">Login</button></a>
                    </div>
                    </div>
            </div>
                <br />
                <div className="flex justify-start h-4 pt-11 items-center relative-right">
                    
                    <div className=" ml-36 mt-[350px] font-semibold font-sans text-[60px] text-stone-50">Think.Make. <br /> Solve.</div>
                    <img src="Rocket-removebg.png " className="ml-36 mt-[450px] animate-bounce w-[290px] h-[200px]" alt="Foto" />
                </div>
                <br />
                <div className=" ml-36 mt-[250px] font-bold  text-[15px] text-pink-500">Who we Are</div>
                <div className="text-slate-50 ml-[145px]">We Enjoy Creating Your Website</div>
                <br />
                <button className="text-slate-50 ml-[145px] bg-slate-500 rounded-md w-[120px] hover:bg-zinc-600">
                    <div className="mb-1">Learn More </div>
                </button>
                
        </div> 
        {/* Page 2  */}
        <div className="h-screen w-screen bg-gradient-to-r from-gray-900 to-zinc-600 ">
            <div className="flex justify-start h-4 pt-11 items-center relative-right">
                <img src="download (1).jpeg " className="ml-[300px] mt-[450px] animate-pulse " alt="Foto" />
                <div className=" ml-[140px] mt-[350px] font-bold text-[35px] text-stone-50">Think outside the <br /> square space</div>
                <br />
            </div>
            <br />
            <div className=" ml-[630px] mt-[250px] font-bold  text-[15px] text-amber-400">What The Helll</div>
            <div className="text-slate-50 ml-[630px]">We Enjoy Creating Your Website</div>
            <br />
            <button className="text-slate-50 ml-[630px] bg-slate-500 rounded-md w-[120px] hover:bg-zinc-600">
            <div className="mb-1 font-sans">See our wokrs </div>
            </button>
            
        </div>
        {/* page 3 */}
        <div className=" bg-gradient-to-r from-slate-500  to-gray-800 w-screen h-screen">
        <div className="flex justify-start h-4 pt-11 items-center relative-right">
                    
            <div className=" ml-[250px] mt-[500px]   hover:text-pink-200 font-sans text-[50px] text-stone-50">
                <p className=" hover:text-pink-300 font-sans text-[50px] text-stone-50 font-bold">Web Design</p>                
                <p className=" hover:text-pink-300 font-sans text-[50px] text-stone-50 font-bold">Devolopment</p>                
                <p className=" hover:text-pink-300 font-sans text-[50px] text-stone-50 font-bold">Ilustration</p>                
                <p className=" hover:text-pink-300 font-sans text-[50px] text-stone-50 font-bold">Product Design</p> 
                <p className=" hover:text-pink-300 font-sans text-[50px] text-stone-50 font-bold">Social Media</p>
                </div>
            <img src="Rocket-removebg.png " className="ml-36 mt-[450px] animate-bounce w-[290px] h-[200px]" alt="Foto" />
        </div>
        </div>
        </>
    )
}

export default  Project;