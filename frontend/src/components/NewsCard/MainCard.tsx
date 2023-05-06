
import Image from "next/image";

export function MainCard() {
  
  return (
    <div className={`
      w-full h-[calc((30/100)*75vw)] border rounded-md relative
      flex items-end text-4xl font-bold text-white
      hover:bg-[length:110%] transition duration-500
      group overflow-hidden cursor-pointer
    `}>
      <Image 
        src={"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/05/GettyImages-1487947337.jpg?w=1024"}
        fill={true}
        alt={"main news picture"}
        className={"transition object-cover absolute group-hover:scale-105"}
      />
      <div className={`
        bg-gradient-to-t from-[#000000ae] from-10% via-[#00000067] via-75% to-transparent
        absolute p-4
      `}>
        Coroação do rei Charles III será neste sábado: veja como será o roteiro da cerimônia
      </div>
    </div>
  );
}