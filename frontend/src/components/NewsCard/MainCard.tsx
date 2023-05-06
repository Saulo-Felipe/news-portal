
import Image from "next/image";
import sizeOf from "image-size"; 

export async function MainCard() {

  const dimensions = sizeOf("https://guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg");

  console.log(dimensions);
  
  return (
    <div className="w-100 border h-80 relative rounded-md">
      <Image 
        alt={"post info"} 
        src={"https://guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: '100%' }} // optional
      />
    </div>
  );
}