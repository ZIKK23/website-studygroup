import Image from "next/image";

const documentationImages = [
  "/images/dokum-sg/dokum (1).jpg",
  "/images/dokum-sg/dokum (2).jpg",
  "/images/dokum-sg/dokum (3).jpg",
  "/images/dokum-sg/dokum (4).jpg",
  "/images/dokum-sg/dokum (5).jpg",
  "/images/dokum-sg/dokum (6).jpg",
  "/images/dokum-sg/dokum (7).jpg",
  "/images/dokum-sg/dokum (8).jpg",
  "/images/dokum-sg/dokum (9).jpg",
  "/images/dokum-sg/dokum (10).jpg",
];

export function Documentation() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
         {/* Section Header */}
        <div>
          <div className="flex items-center gap-12">
            <div className="h-px flex-1 bg-gray-300"></div>
            <h2 className="shrink-0 text-3xl font-bold tracking-tight text-[#1C1629] sm:text-4xl">
              Our Documentation
            </h2>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Capture moments of excitement and collaboration in our study group activities.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden">
        {/* First Track */}
        <div className="flex animate-scroll min-w-full shrink-0 items-center justify-around gap-8 pb-4">
          {documentationImages.map((src, index) => (
             <div key={`track1-${index}`} className="relative aspect-video w-[300px] shrink-0 overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm sm:w-[400px]">
                <Image
                  src={src}
                  alt={`Documentation ${index + 1}`}
                  fill
                  className="object-cover"
                />
             </div>
          ))}
        </div>
        
        {/* Second Track (Duplicate for seamless loop) */}
        <div className="flex animate-scroll min-w-full shrink-0 items-center justify-around gap-8 pb-4 ml-8"> {/* ml-8 matches gap-8 */}
          {documentationImages.map((src, index) => (
             <div key={`track2-${index}`} className="relative aspect-video w-[300px] shrink-0 overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm sm:w-[400px]">
                <Image
                  src={src}
                  alt={`Documentation ${index + 1}`}
                  fill
                  className="object-cover"
                />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
