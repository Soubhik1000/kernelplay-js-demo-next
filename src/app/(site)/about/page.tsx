import type { Metadata } from "next";
import { AboutHero, StorySection } from "@/components/about/StorySection";
import { Timeline } from "@/components/about/Timeline";
import { Roadmap } from "@/components/about/Roadmap";
import {
  CreatorSection,
  ContributingSection,
  LicenseSection,
} from "@/components/about/CommunitySections";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind KernelPlay.js — a lightweight, Unity-inspired 2D/3D game engine for JavaScript, built by Soubhik Mukherjee.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <Timeline />
      <Roadmap />
      <CreatorSection />
      <ContributingSection />
      <LicenseSection />
    </>
  );
}
