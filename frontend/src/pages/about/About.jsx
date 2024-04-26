import React from 'react'
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from "react-icons/hi";

const About = () => {
  return (
    <div className='mt-20'>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">Eye Health Resources</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Empowering Vision Wellness</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Explore a wealth of resources here on eye health, ranging from tips for preventing eye strain to the significance of routine eye examinations. Learn about practical measures for safeguarding your vision and the latest advancements in eye care technology.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://www.codexdigital.com.au/assets/img/work/centre-for-eye-health/centre-for-eye-health-accordion-1.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Maintaining optimal eye health involves various factors, including proper care and awareness. Understanding the importance of eye hygiene and regular check-ups is crucial. Explore a wealth of resources here on eye health, ranging from tips for preventing eye strain to the significance of routine eye examinations. Learn about practical measures for safeguarding your vision and the latest advancements in eye care technology.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <BsCloudArrowUp className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Preventive Measures.</strong> Discover effective strategies to protect your eyesight and maintain healthy vision for years to come.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HiLockClosed className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Eye Safety.</strong> Learn about the importance of eye safety practices and how to prevent common eye injuries.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HiServer className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Technology and Innovation.</strong> Stay informed about the latest advancements in eye care technology and how they can benefit your vision health.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Access a comprehensive collection of articles, videos, and guides tailored to enhance your understanding of eye health and promote proactive measures for maintaining optimal vision.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                <p className="mt-6">
                If you don't have a server, worry not! Our platform ensures seamless access to eye health resources, anytime, anywhere. Benefit from our cloud-based infrastructure and explore a wealth of information without any hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
