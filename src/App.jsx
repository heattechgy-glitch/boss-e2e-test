import React from 'react';

function App() {
  const cards = [
    {
      title: 'Autonomous Building',
      description: 'AI-powered construction that works independently, making intelligent decisions without constant oversight.',
      icon: (
        <svg className="w-12 h-12 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Smart Routing',
      description: 'Intelligent pathfinding and resource allocation that optimizes every workflow automatically.',
      icon: (
        <svg className="w-12 h-12 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: 'Self-Healing',
      description: 'Automatic error detection and recovery that keeps your systems running smoothly 24/7.',
      icon: (
        <svg className="w-12 h-12 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#0ea5e9]">
            BOSS AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            The AI Director That Builds For You
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-[#0ea5e9] transition-all duration-300 hover:shadow-lg hover:shadow-[#0ea5e9]/20"
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;