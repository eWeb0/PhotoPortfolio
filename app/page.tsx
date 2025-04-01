"use client"

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react"
import Link from "next/link"
import Masonry from "react-responsive-masonry"
import { ResponsiveMasonry } from "react-responsive-masonry"
import classNames from "classnames"
const tabs = [
  {
    key: "all",
    display: "all",
  },
  {
    key: "portraits",
    display: "portraits",
  },
  {
    key: "landscape",
    display: "landscape",
  },
  {
    key: "35mm",
    display: "35mm",
  },
]

const images= [
  
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/20250316_144813.jpg')] bg-cover bg-fixed bg-left overflow-auto">
      <header className=" fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-6">
        <span className="uppercase text-lg font-medium text-white">logo</span>
        <Link href="#" className="uppercase text-md rounded-3xl bg-white px-3 py-3 hover:bg-opacity-90">
          contact
        </Link>
      </header>

      <main className="flex-1 flex justify-center pt-[110px]">
        <div className="w-full max-w-[1200px] px-4">
          <TabGroup>
            <TabList className="flex items-center justify-center gap-12 mb-6">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2 focus:outline-none">
                  {({ selected }) => (
                    <span
                      className={`text-lg transition-colors ${classNames("uppercase text-lg", selected ? "text-white" : "text-stone-600 hover:text-stone-400")}`}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </TabList>

            <TabPanels className="h-full p-4 sm:p-6 my-6 w-full">
              <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 2000: 3 }} className="">
                  <Masonry className="flex-gap-4" gutter="16px">
                    <img src="/ocean-5.jpeg" alt="pic-5" className="w-full mb-4" />
                    <img src="/ocean-1.jpeg" alt="pic-1" className="w-full mb-4" />
                    <img src="/ocean-2.jpeg" alt="pic-2" className="w-full mb-4" />
                    <img src="/ocean-3.jpeg" alt="pic-3" className="w-full mb-4" />
                    <img src="/ocean-4.jpeg" alt="pic-4" className="w-full mb-4" />
                  </Masonry>
                </ResponsiveMasonry>
              </TabPanel>
              <TabPanel>
                <div className="h-64 flex items-center justify-center text-white">Portraits content</div>
              </TabPanel>
              <TabPanel>
                <div className="h-64 flex items-center justify-center text-white">Landscapes content</div>
              </TabPanel>
              <TabPanel>
                <div className="h-64 flex items-center justify-center text-white">35mm Film content</div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center text-white uppercase text-lg font-medium">
        <p>PlaceHolder</p>
      </footer>
    </div>
  )
}

