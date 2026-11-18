import { useState } from "react";

export default function ContributionCell() {
  const [shade, setShade] = useState(0);

  function handleClick() {
    setShade((shade + 1) % colors.length);
  }
  return (
    <div className={`grid-cell ${colors[shade]}`} onClick={handleClick}></div>
  );
}

const colors = [
  "bg-[#161b22]",
  "bg-[#440e0e]",
  "bg-[#6d0000]",
  "bg-[#a62626]",
  "bg-[#d33939]",
];
