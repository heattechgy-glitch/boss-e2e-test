import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20 border border-gray-700">
      <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

function App() {
  const features = [
    {
      title: 'Autonomous Building',
      description: 'AI-powered construction that builds and deploys your applications automatically without manual intervention.',
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Smart Routing',
      description: 'Intelligent traffic management that optimizes paths and ensures your requests reach their destination efficiently.',
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: 'Self-Healing',
      description: 'Automatic detection and recovery from failures, ensuring your systems stay operational around the clock.',
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-[#0ea5e9]">BOSS AI</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The next generation of intelligent automation. Build faster, route smarter, and never worry about downtime again.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </section>

        <footer className="text-center mt-16">
          <button className="bg-[#0ea5e9] hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Get Started
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;