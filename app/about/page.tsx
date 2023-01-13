import Aure from "../../public/credits/aure.webp";
import Domen from "../../public/credits/domen.webp";
import Ed from "../../public/credits/ed.webp";

const ballers = [
  {
    name: "Domen Grabec",
    role: "All the tricky backend stuff",
    imageSrc: Domen.src,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Ed Spencer",
    role: "Messing around with the UI",
    imageSrc: Ed.src,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Aure Gimon",
    role: "Logo design and spiritual guidance",
    imageSrc: Aure.src,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

import { WashTradeTypeDetails } from "../../types/NFTWashTrade";

const features = Object.values(WashTradeTypeDetails);

function Features() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="sm:text-center">
        <h2 className="text-lg font-semibold leading-8 text-indigo-600">
          RINSE
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          NFT Wash Trading Detect0r
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          RINSE uses advanced machine learning and warp-flux capacitance factors
          to detect attempts to use Wash Trading to inflate the price of NFTs
        </p>
      </div>

      <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div className="space-y-5 mb-10 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Features
          </h2>
          <p className="text-xl text-gray-500">
            A few of the techniques we use to detect wash trading:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                <feature.Icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-900">
                  {feature.marketingName}
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.marketing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-4xl text-center font-bold text-gray-900"></h2>
      <Features />

      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Credits
            </h2>
            <p className="text-xl text-gray-500">What a handsome bunch</p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {ballers.map((baller) => (
              <li key={baller.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-3">
                    <img
                      className="rounded-3xl object-cover shadow-lg"
                      src={baller.imageSrc}
                      alt={baller.role}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{baller.name}</h3>
                      <p className="text-indigo-600">{baller.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a
                          href={baller.twitterUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={baller.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
