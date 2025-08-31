import Image from 'next/image';

const logos = [
  { src: 'https://framerusercontent.com/images/MzvG5HGTSpox9tMvX9S4Qb27aTw.png', alt: 'Nvidia' },
  { src: 'https://framerusercontent.com/images/zWboWYMMiwbV1x9Sce6e2B1XULo.svg', alt: 'Google for Startups' },
  { src: 'https://framerusercontent.com/images/zONCPdR4f1rKV8Nrsd6zqx3riM.svg', alt: 'Forbes' },
  { src: 'https://framerusercontent.com/images/GawwgBG2wBJeOKucV3wxemTxhCc.svg', alt: 'TechCrunch' },
  { src: 'https://framerusercontent.com/images/mfIu5rssGJPu4siHW5FibgWRNc.svg', alt: 'Product Hunt' },
  { src: 'https://framerusercontent.com/images/SOVe1lZRft0pMifhnKfyMjYuu8.png', alt: 'Yahoo Finance' },
];

export default function Logos() {
  return (
    <div className="py-12 sm:py-16">
      <div className="container">
        <h2 className="text-lg font-semibold leading-8 text-center text-muted-foreground font-headline">
          Backed by the world's most innovative companies
        </h2>
        <div className="relative mt-10 overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-8">
                <Image
                  className="object-contain w-full h-12 max-w-none"
                  src={logo.src}
                  alt={logo.alt}
                  width={158}
                  height={48}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

