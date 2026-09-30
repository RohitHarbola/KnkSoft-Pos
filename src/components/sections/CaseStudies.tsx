'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, MapPin, Star, Sparkles } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface CaseStudy {
  id: number;
  name: string;
  owner: string;
  position: string;
  city: string;
  type: string;
  metric: string;
  metricSub: string;
  quote: string;
  badge: string;
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    name: 'Sardarji Dhaba & Grill',
    owner: 'Gurpreet Singh',
    position: 'Founder & Owner',
    city: 'New Delhi (Karol Bagh)',
    type: 'Multi-Floor Restaurant',
    metric: '60% Faster Billing',
    metricSub: 'Table turnaround time dropped from 45 min to 28 min',
    quote:
      'During Sunday dinner rush, our captains used to struggle with paper KOTs and order mix-ups. KNK POS captain app directly syncs with the kitchen display and UPI soundbox. Zero missed orders!',
    badge: 'F&B Case Study',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Shree Balaji Supermarket',
    owner: 'Ramesh Patel',
    position: 'Managing Director',
    city: 'Ahmedabad (Satellite)',
    type: '3-Counter Supermarket',
    metric: '₹1.8L Saved Monthly',
    metricSub: 'Zero shrinkage with auto weighing scale sync & batch expiry',
    quote:
      'The FMCG barcode library and electronic weighing scale integration eliminated checkout lines. Our cashier scans 20 items in 30 seconds. Plus, KNK POS offline mode saved us when our fiber internet snapped.',
    badge: 'Retail Case Study',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 3,
    name: 'Kashvi Fashion & Ethnic',
    owner: 'Priyanka Iyer',
    position: 'Co-Founder & Retail Head',
    city: 'Bengaluru (Jayanagar)',
    type: 'Apparel & Boutique Chain (4 Outlets)',
    metric: '100% Stock Accuracy',
    metricSub: 'Central warehouse inventory transfers & size-matrix barcodes',
    quote:
      'Before KNK POS, finding if a Medium size Kurti was in our Indiranagar or Jayanagar outlet took 15 minutes of calling. Now it’s on our screen in 1 second. WhatsApp loyalty doubled repeat walk-ins.',
    badge: 'Apparel Chain',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

export const CaseStudies: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-16 px-4 md:py-24 bg-[#f9f5f3] border-t border-b border-[#e8e2de]" id="case-studies">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header matching Testimonials.tsx */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF3EF] text-[#FF4C00] border border-[#FFD5C2] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Real Indian Success Stories
          </div>
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4 text-[#1A1918]">
            Hear What&nbsp;
            <span className="text-[#FF4C00] mt-2 inline-block">Our Clients Say</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-normal lg:text-lg text-[#565352] text-center mb-8 leading-relaxed">
            Explore the transformative experiences of our valued store owners and how KNK POS has positively impacted their billing speed, inventory control, and profit margins.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass:
              'swiper-pagination-bullet !w-8 !h-1 !mx-1 !rounded-none !bg-slate-300 !opacity-60',
            bulletActiveClass: '!bg-[#FF4C00] !opacity-100',
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="testimonials-swiper !pb-16"
        >
          {CASE_STUDIES.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 px-4">
                
                {/* Client Avatar / Photo */}
                <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden bg-orange-100 flex-shrink-0 border-4 border-white shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.owner}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Client Quote & Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#FF4C00] border border-[#FFD5C2] shadow-sm">
                      {item.badge}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 relative">
                    <span className="absolute -left-10 lg:-left-13 xl:-left-16 -top-5 text-6xl text-orange-200 opacity-20 h-[55px] rotate-180 pointer-events-none">
                      <Image
                        src="/images/right-quotes-symbol.webp"
                        alt="quote-left"
                        width={50}
                        height={50}
                      />
                    </span>
                    <p className="relative z-10 text-base lg:text-lg font-light text-slate-700 leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Result Metric */}
                  <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#e8e2de] shadow-sm">
                    <span className="text-sm font-black text-[#1A1918]">{item.metric}</span>
                    <span className="text-xs font-medium text-[#565352]">• {item.metricSub}</span>
                  </div>

                  <div>
                    <p className="font-semibold text-xl text-gray-900 mb-0.5">
                      {item.owner}
                    </p>
                    <p className="text-[#565352] text-sm font-medium">
                      {item.position} — <span className="text-[#FF4C00] font-bold">{item.name}</span>
                    </p>
                    <p className="text-xs text-[#9b9089] flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.city} ({item.type})</span>
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Proof Bottom Strip */}
        <div className="mt-8 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1918] hover:text-[#FF4C00] transition-colors"
          >
            Explore all 50+ Indian customer interviews &amp; video testimonials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
