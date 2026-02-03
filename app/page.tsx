export default function VickiDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-12 border-b border-gray-800 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          <h1 className="text-2xl font-bold tracking-tighter">
            VICKI<span className="text-emerald-500">AI</span>VERIFIED
          </h1>
        </div>
        <div className="flex gap-6 text-xs font-mono text-gray-400">
          <div className="flex flex-col">
            <span className="text-gray-600">SERVER STATUS</span>
            <span className="text-green-500 underline">OPERATIONAL</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600">MARKET TIME</span>
            <span>12:47:53 PM</span>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: The "Brain" / Analysis Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="border-2 border-dashed border-yellow-600/20 rounded-2xl p-16 flex flex-col items-center justify-center bg-yellow-600/5 hover:bg-yellow-600/10 transition-all cursor-pointer group">
            <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl text-emerald-500">+</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Upload Trading Chart</h2>
            <p className="text-gray-500 text-center max-w-xs text-sm">
              Drag and drop your MT4/MT5 screenshot. Vicki will analyze the liquidity and supply zones.
            </p>
          </div>
          
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
               <span className="text-emerald-500 text-xs">◆</span>
               <h3 className="text-gray-400 uppercase text-xs tracking-widest">AI Terminal Output</h3>
            </div>
            <p className="text-lg font-light text-gray-300 italic">"System standby. Waiting for market data input to begin verification process..."</p>
          </div>
        </div>

        {/* Right Side: The "Live Signals" */}
        <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Signal Feed</h2>
            <span className="text-[10px] bg-yellow-600/20 text-emerald-500 px-2 py-1 rounded">REAL-TIME</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-black rounded-lg border border-gray-800 hover:border-yellow-600/50 transition-colors">
              <div className="flex justify-between mb-1">
                <span className="font-bold text-sm text-emerald-500">BTCUSD</span>
                <span className="text-[10px] text-gray-600">5M AGO</span>
              </div>
              <p className="text-xs text-gray-400 font-mono">SCANNED: LIQUIDITY GRAB DETECTED</p>
            </div>

            <div className="p-4 bg-black rounded-lg border border-gray-900 opacity-50">
              <div className="flex justify-between mb-1">
                <span className="font-bold text-sm text-gray-500">EURUSD</span>
                <span className="text-[10px] text-gray-700">1H AGO</span>
              </div>
              <p className="text-xs text-gray-600 font-mono">STATUS: NO VALID SETUP</p>
            </div>
          </div>

          <button className="w-full mt-8 py-3 bg-yellow-600 hover:bg-emerald-500 text-black font-bold rounded-lg transition-colors text-sm uppercase tracking-tighter">
            Unlock Pro Signals
          </button>
        </div>
      </main>
    </div>
  );
}