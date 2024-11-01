import { TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8 text-emerald-400" />
          <span className="text-2xl font-bold">Menshun</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="hover:text-emerald-400 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-emerald-400 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="hover:text-emerald-400 transition-colors">
            About
          </Link>
          <Link
            href="/signup"
            className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}