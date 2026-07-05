import { uniqueDestinations } from '../data/routes';

export default function TopRoutes() {
  // Use the extracted unique destinations from our dataset
  const routes = uniqueDestinations;

  return (
    <div className="px-5 py-8 bg-gray-50/50 border-t border-gray-100 rounded-t-[2.5rem]">
      <h2 className="text-[1.35rem] font-bold text-[#d11b1b] mb-5">Our top destinations</h2>
      <div className="flex flex-wrap gap-2.5">
        {routes.map((route, index) => (
          <button
            key={index}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('select-route', { 
                detail: { 
                  to: route,
                  from: route === 'Nairobi' ? 'Mombasa' : 'Nairobi'
                } 
              }));
            }}
            className={`px-5 py-2.5 rounded-full border text-xs font-bold transition-all shadow-sm
              ${route === 'Mombasa' || route === 'Nairobi'
                ? 'bg-[#d11b1b] text-white border-[#d11b1b]' 
                : 'bg-white text-gray-800 border-gray-200 hover:border-[#d11b1b] hover:text-[#d11b1b]'
              }
            `}
          >
            {route.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
