import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-8">
        Track Reddit Keywords Like a
        <span className="text-emerald-400"> Pro</span>
      </h1>
      <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
        Never miss important Reddit conversations again. Monitor keywords, track trends, and get real-time notifications for topics that matter to you.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Link
          href="/signup"
          className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-medium transition-colors flex items-center"
        >
          Start Monitoring <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link
          href="/demo"
          className="border border-slate-600 hover:border-emerald-400 px-8 py-3 rounded-lg font-medium transition-colors flex items-center"
        >
          View Demo <Github className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}