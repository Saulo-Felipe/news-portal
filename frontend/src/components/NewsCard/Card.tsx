import Image from "next/image";

export function Card() {

  return (
    <div className={"border w-72 shadow-lg group"}>
      <div className={"h-48 relative overflow-hidden rounded-md"}>
        <Image 
          src={"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/05/GettyImages-1487814301-e1683330887324.jpg?w=1024"}
          fill={true}
          alt={"news picture"}
          className={"object-cover relative rounded-md group-hover:scale-105 transition"}
        />
      </div>
      
      <div className={"p-2"}>
        "Se tivéssemos escolha, pularíamos uma geração"; veja citações do público
      </div>
    </div>
  );
}