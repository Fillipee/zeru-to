import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px]">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/placeholder.png"
                    alt="Fresh baked goods"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="flex h-full items-center pt-24 text-center">
                <div className="mx-auto max-w-2xl px-4">
                    <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                        Vaše cesta k dokonalému vaření
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 drop-shadow-sm">
                        Spousty receptů na jednom místě
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href="/recepty"
                            className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
                        >
                            Prohlédnout recepty
                        </Link>
                    </div>
                </div>
            </div>

            <ChevronDown className="absolute bottom-8 left-1/2 h-12 w-12 -translate-x-1/2 animate-bounce text-white" />
        </section>
    );
}
