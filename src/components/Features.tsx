import { Search, Bell, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
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
  );
}