'use client';
import { User, ChevronDown, ChevronUp, Plus, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SessionDropdown() {
  const isAuth = true;
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  return (
    <div className="pr-2">
      {
        isAuth 
          ? (
            <div 
              className={"flex items-center content-center relative cursor-pointer"}
              onClick={() => setDropdownIsOpen(dropdownIsOpen == false)}
            >
              <User />
              { 
                dropdownIsOpen ? (
                  <>
                    <ChevronUp /> 
                    <div className={"absolute top-[100%] right-0 w-max text-sm bg-white shadow-md border rounded-md"}>
                      <div className={"font-bold text-sm p-1 text-center"}>Saulo Felipe</div>
                      <hr/>

                      <Link href={"/new-news"}>
                        <div className={"hover:bg-gray-100 px-2 py-1 flex"}>
                          <Plus className={"w-[20px] mr-2"}/> Nova Notícia
                        </div>
                      </Link>

                      <Link href={"/logout"}>
                        <div className={"hover:bg-gray-100 px-2 py-1 flex"}>
                          <LogOut className={"w-[20px] mr-2"}/> Sair
                        </div>
                      </Link>

                    </div>
                  </>
                ) : ( 
                  <ChevronDown /> 
                )
              }

            </div>
          ) : (
            <div>
              <button className="bg-black text-white px-4 mr-2 py-1 rounded-[0.25rem]">Entrar</button>
              <button className="bg-red-600 text-white px-4 py-1 rounded-[0.25rem]">Cadastre-se</button>
            </div>
          )
      }
    </div>
  );
}