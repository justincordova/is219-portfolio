import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProofBlock } from "@/components/home/ProofBlock";
import { AboutBlock } from "@/components/home/AboutBlock";
import { proofBlocks } from "@/content/proof";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        {proofBlocks.map((block, i) => (
          <ProofBlock key={block.id} block={block} index={i + 1} />
        ))}
        <AboutBlock />
      </main>
      <Footer />
    </>
  );
}
