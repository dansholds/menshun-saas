import React from 'react';
import { TrendingUp, Search, Bell, Shield, ArrowRight, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold">Menshun</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Track Reddit Keywords Like a
          <span className="text-emerald-400"> Pro</span>
        </h1>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Never miss important Reddit conversations again. Monitor keywords, track trends, and get real-time notifications for topics that matter to you.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-medium transition-colors flex items-center">
            Start Monitoring <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border border-slate-600 hover:border-emerald-400 px-8 py-3 rounded-lg font-medium transition-colors flex items-center">
            View Demo <Github className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Search className="h-8 w-8 text-emerald-400" />}
            title="Keyword Tracking"
            description="Monitor multiple keywords across all subreddits in real-time with advanced filtering options."
          />
          <FeatureCard 
            icon={<Bell className="h-8 w-8 text-emerald-400" />}
            title="Instant Alerts"
            description="Get notifications via email, Slack, or Discord when your keywords are mentioned."
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-emerald-400" />}
            title="Sentiment Analysis"
            description="Understand the context and sentiment of conversations around your keywords."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Reddit Monitoring?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust Menshun for their Reddit keyword tracking needs.
          </p>
          <button className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-medium transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-emerald-400 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

export default App;