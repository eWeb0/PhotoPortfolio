// filepath: c:\Users\et200\Documents\photo_portfolio\app\app\page.tsx
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[url('/20250316_144813.jpg')] bg-bottomleft bg-cover">

      <header className="flex justify-between items-center h-[90px] px-6"> 
        <div className="text-transparent">hm</div>
        <div>logo</div>
        <Link href="#" className="rounded-3xl bg-white px-3 py-3 hover:bg-opacity-90">
        contact
        </Link>
        </header>
      <main className="grow">
        <div className="flex flex-col items-center">
      <TabGroup>
      <TabList className="flex items-center gap-12">

      <Tab>{({ selected }) => <span className={selected ? 'text-blue-500' : ''}>All</span>}</Tab>

        <Tab>Portraits</Tab>
        <Tab>Landscape</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>All Photos</TabPanel>
        <TabPanel>Portraits</TabPanel>
        <TabPanel>Landscapes</TabPanel>
      </TabPanels>
    </TabGroup>
    </div>
      </main>

      <footer className="h-[60px]">
        <p>PlaceHolder</p>
      </footer>
    </div>
  );
}