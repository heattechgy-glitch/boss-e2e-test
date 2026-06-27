import React from 'react';

function App() {
  const features = [
    {
      title: 'Autonomous Building',
      description: 'AI-powered construction that builds itself. No manual intervention required.',
      icon: (
        <svg className="w-12 h-12 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Smart Routing',
      description: 'Intelligent pathfinding that optimizes every route in real-time.',
      icon: (
        <svg className="w-12 h-12 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: 'Self-Healing',
      description: 'Automatic error detection and recovery. Systems that fix themselves.',
      icon: (
        <svg className="w-12 h-12 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0ea5e9] rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-[#0ea5e9] drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]">BOSS AI</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
            The AI Director
          </p>
          <div className="mt-12">
            <button className="px-8 py-4 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#0ea5e9]/25">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-[#0ea5e9]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0ea5e9]/10"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} <span className="text-[#0ea5e9]">BOSS AI</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;