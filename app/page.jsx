"use client"

import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <div className="flex h-full">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
