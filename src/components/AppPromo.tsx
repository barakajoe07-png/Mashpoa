export default function AppPromo() {
  return (
    <div className="px-5 py-6 bg-white">
      <div className="bg-[#d11b1b] rounded-2xl overflow-hidden relative flex flex-row items-center px-6 py-8 shadow-md">
        
        <div className="w-1/2 z-10">
          <h2 className="text-white text-2xl font-bold leading-tight mb-6">
            <span className="text-[#facc15]">Download</span> our<br/>app on the<br/>playstore
          </h2>
          <button className="bg-black text-white rounded-md px-3 py-1.5 transition-colors flex items-center justify-center w-[120px]">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="h-7 w-auto" 
            />
          </button>
        </div>

        <div className="w-1/2 absolute right-[-20px] top-4 z-0 rotate-12 origin-bottom-right">
          <div className="relative w-[180px] h-[360px] border-[6px] border-[#e6e6e6] rounded-[2rem] overflow-hidden bg-white shadow-xl flex flex-col items-center pt-8">
            {/* Notch */}
            <div className="absolute top-0 w-20 h-5 bg-[#e6e6e6] rounded-b-2xl flex items-center justify-center gap-1">
               <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
            </div>
            
            <img src="/mash-poa-logo.png" alt="Mash Poa Logo" className="h-10 w-auto mb-4 mt-8" />

            <div className="text-[#d11b1b] text-center font-bold text-sm px-4">
              Welcome to Mash Poa
            </div>
            <div className="text-black text-[0.6rem] font-bold text-center mt-2 px-2 -rotate-6">
              Passenger & Parcel Services
            </div>

            <div className="absolute bottom-6 w-full px-4">
              <div className="bg-[#facc15] text-[#d11b1b] text-center font-bold py-2 rounded-full text-sm shadow-md">
                Sign In
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
