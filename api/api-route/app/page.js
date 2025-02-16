"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Kashi",
      role: "Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST", 
      headers: {"content-type": "application/json"}
    });
    let res = await a.json();
    console.log(res);
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
      <button onClick={handleClick}>click me </button>
    </div>
  );
}
