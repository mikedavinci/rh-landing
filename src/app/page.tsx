'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import StemCellSection from '@/components/StemCellSection';
import MonterreySection from '@/components/MonterreySection';
import AmbassadorSection from '@/components/AmbassadorSection';
import WhyRewardsHealthSection from '@/components/WhyRewardsHealthSection';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen">
        <HeroSection />
        <StemCellSection />
        <MonterreySection />
        <AmbassadorSection />
        <WhyRewardsHealthSection />
        <Footer />
        <Modal />
      </main>
    </QueryClientProvider>
  );
}