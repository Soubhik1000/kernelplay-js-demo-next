import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FULLSCREEN_GAMES, getFullscreenGame } from "@/content/fullscreen-games";
import { GameCanvas } from "@/components/examples/GameCanvas";

interface Props {
  params: { game: string };
}

export function generateStaticParams() {
  return FULLSCREEN_GAMES.map((g) => ({ game: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const game = getFullscreenGame(params.game);
  return { title: game ? `${game.title} — Fullscreen` : "Fullscreen" };
}

// Matches the original fullscreen/<game>/index.html exactly in spirit:
// a full-bleed canvas with zero chrome. No Navbar, no Footer, no
// sidebar -- just the game.
export default function FullscreenGamePage({ params }: Props) {
  const game = getFullscreenGame(params.game);
  if (!game) notFound();

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      <GameCanvas game={game.gameLoaderId} className="w-full h-full flex items-center justify-center" />
    </div>
  );
}
