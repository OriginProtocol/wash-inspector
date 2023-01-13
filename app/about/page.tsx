import Aure from "../../public/credits/aure.webp";
import Domen from "../../public/credits/domen.webp";
import Ed from "../../public/credits/ed.webp";

const ballers = [
  {
    name: "Domen Grabec",
    description: "All the tricky backend stuff",
    imageSrc: Domen.src,
    imageAlt: "All the tricky backend stuff",
    href: "#",
  },
  {
    name: "Ed Spencer",
    description: "Messing around with the UI",
    imageSrc: Ed.src,
    imageAlt: "Messing around with the UI",
    href: "#",
  },
  {
    name: "Aure Gimon",
    description: "Logo design and spiritual guidance",
    imageSrc: Aure.src,
    imageAlt: "Logo design and spiritual guidance",
    href: "#",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-4xl text-center font-bold text-gray-900">
          NFT Wash Trading Detect0r
        </h2>

        {/* In-depth analysis of the 100 most popular NFT Collections of all time */}

        <p>Never let an engineer name something</p>

        <h2 className="text-4xl text-center font-bold text-gray-900">
          Credits
        </h2>

        <div className="mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {ballers.map((baller) => (
            <div key={baller.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={baller.imageSrc}
                  alt={baller.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-xl text-center text-gray-900">
                <span className="absolute inset-0" />
                {baller.name}
              </h3>
              <p className="text-base text-center font-semibold text-gray-500">
                {baller.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
