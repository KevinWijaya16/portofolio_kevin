import Image from "next/image";
import React from "react";

function Cards({
  img,
  desc,
  children,
}: {
  img: any;
  desc: any;
  children: any;
}) {
  return (
    <div className="w-96 h-56 bg-gray-600 flex flex-col items-center">
      <p>Portofolio</p>
      <Image alt="" src={img} width={100} height={100} />
      <p>Desc: {desc}</p>
      {children}
    </div>
  );
}

export default Cards;
