'use client';
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [inputInFocus, setInputInFocus] = useState(false);

  return (
    <div className={`
      flex items-center justify-between 
      rounded-lg shadow-md border transition-all	
      p-1 pl-2 ${inputInFocus ? "w-3/6" : "w-2/6"} 
    `}>
      <input 
        placeholder="pesquise noticias, jogos, curiosidades..." 
        className="outline-0 p-2 rounded-lg flex-1"
        onFocus={() => setInputInFocus(true)}
        onBlur={() => setInputInFocus(false)}
      />

      <div 
        className="
          flex justify-center items-center 
          bg-black text-white 
          rounded-full w-8 h-8 mx-2
        ">
        <Search className="w-4 h-4" />
      </div>      
    </div>
  );
}