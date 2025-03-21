import React from 'react';
import Image from 'next/image';

export default function GovernmentTransparency() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <table className="w-full">
        <tbody>
          <tr>
            <td rowSpan={3} className="align-top w-[300px]">
              <Image 
                src="/ohiocheckbook-iphone6-spacegrey-portrait-small.png"
                alt="ohioschool-iphone6"
                width={300}
                height={600}
                className="h-auto w-full"
                priority
              />
            </td>
          </tr>
          <tr>
            <td className="p-4">
              <h3 className="text-2xl font-bold mb-4">What if everything was this transparent?</h3>
              <p className="text-lg">
                Government works better with well-informed constituents. In many cases, formal requests are required to get government spending details. We want to eliminate the need for these requests, by putting government finances online. <br />
                Today, many federal, state, and local governments are lacking quality public financial data. <a href="/blog/2017-12-16-transparency-scorecard" className="text-blue-600 hover:text-blue-800">See our report</a>. Just in the US states, our governments are trillions in debt with little public awareness. <a target="_blank" href="https://www.truthinaccounting.org/news/detail/why-is-truthful-timely-and-transparent-financial-data-important-details" className="text-blue-600 hover:text-blue-800">See the report</a>. To publish the complex web of interconnected financial systems, we need collaborative data standards for data-driven decision making. <a target="_blank" href="https://www.workiva.com/sites/workiva/files/pdfs/thought-leadership/unleashing-power-financial-data-state-local-government-whitepaper-20180314-j40506.pdf" className="text-blue-600 hover:text-blue-800">See the report</a>. A modern government is transparent with online finances.
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4">
              <p className="text-lg">
                We are a group of government, technology, and policy advocates working together. The Open Data Initiative exists to advance government financial transparency. Through resources, partners, and events, we inform the public and the government on the best open data solutions available.
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4">
              <h3 className="text-xl font-bold mb-2">GOVERNMENT CHECKLISTS</h3>
            </td>
            <td className="p-4">
              <h3 className="text-xl font-bold mb-2">OPEN DATA RESOURCES</h3>
            </td>
          </tr>
          <tr>
            <td className="py-1 px-4">
              <a href="/resources#cities" className="text-blue-600 hover:text-blue-800">Cities</a>
            </td>
            <td className="py-1 px-4">
              <a href="/legislation" className="text-blue-600 hover:text-blue-800">Open Data Legislation</a>
            </td>
          </tr>
          <tr>
            <td className="py-1 px-4">
              <a href="/resources#states" className="text-blue-600 hover:text-blue-800">States</a>
            </td>
            <td className="py-1 px-4">
              <a href="/transparency" className="text-blue-600 hover:text-blue-800">Government Open Data Portals</a>
            </td>
          </tr>
          <tr>
            <td className="py-1 px-4">
              <a href="/resources#us-federal" className="text-blue-600 hover:text-blue-800">US Federal</a>
            </td>
            <td className="py-1 px-4">
              <a href="/resources#open-data-platforms" className="text-blue-600 hover:text-blue-800">Open Data Platforms</a>
            </td>
          </tr>
          <tr>
            <td className="py-1 px-4"></td>
            <td className="py-1 px-4">
              <a href="/resources#policy-organizations" className="text-blue-600 hover:text-blue-800">Policy Organizations</a>
            </td>
          </tr>
          <tr>
            <td className="py-1 px-4"></td>
            <td className="py-1 px-4">
              <a href="/resources#universities" className="text-blue-600 hover:text-blue-800">Universities</a>
            </td>
          </tr>
          <tr>
            <td className="py-1 px-4"></td>
            <td className="py-1 px-4">
              <a href="/resources#commercial-companies" className="text-blue-600 hover:text-blue-800">Commercial Companies</a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-4">
              <h3 className="text-xl font-bold mb-4">ODI Government Transparency Status</h3>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-4">
              <p className="text-lg">
                This part of ODI has been dormant since 2018. If you are interested in working on this content and improving it, use the link in the footer below to propose a change.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 