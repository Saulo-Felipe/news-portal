import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { SessionDropdown } from "./SessionDropdown";


export function Header() {
  console.log("server rending")

  return (
    <header className="flex border items-center justify-between p-2 px-10">

      <Link href={"/"}>
        <div className="p-2 bg-black text-white cursor-pointer">Portal News</div>
      </Link>

      <SearchBar />

      <SessionDropdown />
    </header>
  )
}