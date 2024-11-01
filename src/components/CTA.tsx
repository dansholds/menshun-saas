import Link from 'next/link';

export function CTA() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Reddit Monitoring?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who trust Menshun for their Reddit keyword tracking needs.
        </p>
        <Link
          href="/trial"
          className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  );
}