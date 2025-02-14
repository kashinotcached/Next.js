// "use client"
// import { useState } from "react";
import Navbar from "@/components/Navbar";
import fs from "fs/promises"

export default function Home() {
// const [count, setCount] = useState(0)

console.log("Hey It's me");
let a = fs.readFile(".gitignore").then(e => {console.log(e.toString())})
  return (
    <div>
      {/* I am a component {count} */}
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      <Navbar/>
      I am a component
    </div>
    
  );
}
