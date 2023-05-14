import { Metadata } from "next"
import { Card } from "../../components/NewsCard/Card"
import { MainCard } from "../../components/NewsCard/MainCard"

export const metadata: Metadata = {
  title: "Home - Portal News",
  description: "Portal News - Veja as noticias mais recentes no portal"
}

export default function Home() {
  //{/* @ts-expect-error Server Component */}

  return (
    <main className="p-10 border flex-[0.7]">
      <MainCard />

      <div>
        <Card />
      </div>
    </main>
  )
}