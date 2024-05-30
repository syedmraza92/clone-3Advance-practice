"use client"
import Image from "next/image";
import demo1 from '../../public/assets/demo1.jpeg';
import grid1 from '../../public/assets/grid1.webp';

function Collage() {
  return (
    <div className="container mx-auto p-4">
      {/* <div className="grid gap-4 custom-grid">
        <div className="p-2 rounded-2xl item-1">
          <Image src={demo1} alt="Image 1" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-2 rounded-2xl item-2">
          <Image src={demo1} alt="Image 2" className="w-full h-full object-cover rounded-2xl" />
        </div>
         <div className="p-2 rounded-2xl item-3">
          <Image src={demo1} alt="Image 3" className="w-full h-full object-cover rounded-2xl" />
        </div>
         <div className="p-2 rounded-2xl item-4">
          <Image src={demo1} alt="Image 4" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-2 rounded-2xl item-5">
          <Image src={demo1} alt="Image 5" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-2 rounded-2xl item-6">
          <Image src={demo1} alt="Image 6" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-2 rounded-2xl item-7">
          <Image src={demo1} alt="Image 7" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-2 rounded-2xl item-8">
          <Image src={demo1} alt="Image 8" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-2 rounded-2xl item-9">
          <Image src={demo1} alt="Image 9" className="w-full h-full object-cover rounded-2xl" />
        </div>
       <div className="p-2 rounded-2xl item-10">
          <Image src={demo1} alt="Image 10" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-2 rounded-2xl item-11">
          <Image src={demo1} alt="Image 11" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-2 rounded-2xl item-12">
          <Image src={demo1} alt="Image 12" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
      <style jsx>{`
        .custom-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(100px, auto);
          gap: 1rem;
        }
        .item-1 { grid-column: 2 / span 3; grid-row: 2 / span 1; }
        .item-2 { grid-column: 5 / span 3; grid-row: 2 / span 1; }
        .item-3 { grid-column: 8 / span 3; grid-row: 2 / span 1; }
        .item-4 { grid-column: 2 / span 3; grid-row: 3 / span 1; }
        .item-5 { grid-column: 5 / span 3; grid-row: 3 / span 1; }
        .item-6 { grid-column: 8 / span 3; grid-row: 3 / span 1; }
        .item-7 { grid-column: 2 / span 3; grid-row: 4 / span 1; }
        .item-8 { grid-column: 5 / span 3; grid-row: 4 / span 1; }
        .item-9 { grid-column: 8 / span 3; grid-row: 4 / span 1; }
        .item-10 { grid-column: 2 / span 3; grid-row: 5 / span 1; }
        .item-11 { grid-column: 5 / span 3; grid-row: 5 / span 1; }
        .item-12 { grid-column: 8 / span 3; grid-row: 5 / span 1; }
      `}</style> */}

<Image src={grid1} alt="Image 12" className="w-full h-full object-cover rounded-2xl" />
    </div>
  );
}

export default Collage;
