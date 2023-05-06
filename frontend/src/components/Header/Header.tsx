import { SearchBar } from "./SearchBar";
import { SideMenu } from "./SideMenu";


export function Header() {
  console.log("server rending")

  return (
    <header className="flex border items-center justify-between p-2">

      <div className="p-2 bg-black text-white cursor-pointer">Portal News</div>

      <SearchBar />

      <SideMenu />
    </header>
  )
}