"use client";
import { Metadata } from "next";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./style.scss";

// export const metadata: Metadata = {
//   title: "Nova Notícia - Portal News",
//   description: "Adicione uma nova noticia no Portal News"
// }

export default function NewNews() {
  const [newsContent, setNewsContent] = useState("");
  return (
    <div className={"p-5 border flex-1 flex"}>
      <div className={"border flex-[0.5] p-2"}>
        <textarea 
          onChange={({target}) => setNewsContent(target.value)}
          className={"outline-none w-[100%] h-[100%]"}
        >
          {newsContent}
        </textarea>
      </div>

      <div className={"border flex-[0.5] p-2"}>
        <ReactMarkdown
          children={`${newsContent}`}
        />
      </div>

    </div>
  );
}