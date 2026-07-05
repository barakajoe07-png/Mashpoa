import { Home, Printer, HelpCircle, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#d11b1b] text-white flex justify-around items-center z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] h-16">
      <button onClick={() => setActiveTab('home')} className={`flex-1 flex flex-col items-center justify-center h-full gap-1 transition-colors ${activeTab === 'home' ? 'bg-[#e32828] text-white' : 'text-red-100 hover:text-white'}`}>
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-medium tracking-wide">Home</span>
      </button>
      <button onClick={() => setActiveTab('print')} className={`flex-1 flex flex-col items-center justify-center h-full gap-1 transition-colors ${activeTab === 'print' ? 'bg-[#e32828] text-white' : 'text-red-100 hover:text-white'}`}>
        <Printer className="w-6 h-6" />
        <span className="text-[10px] font-medium tracking-wide">Print Ticket</span>
      </button>
      <button onClick={() => setActiveTab('help')} className={`flex-1 flex flex-col items-center justify-center h-full gap-1 transition-colors ${activeTab === 'help' ? 'bg-[#e32828] text-white' : 'text-red-100 hover:text-white'}`}>
        <HelpCircle className="w-6 h-6" />
        <span className="text-[10px] font-medium tracking-wide">Help</span>
      </button>
      <button onClick={() => setActiveTab('account')} className={`flex-1 flex flex-col items-center justify-center h-full gap-1 transition-colors ${activeTab === 'account' ? 'bg-[#e32828] text-white' : 'text-red-100 hover:text-white'}`}>
        <User className="w-6 h-6" />
        <span className="text-[10px] font-medium tracking-wide">Account</span>
      </button>
    </div>
  );
}
