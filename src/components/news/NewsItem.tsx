import { IArticle } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface NewsItemProps {
  article: IArticle;
}
export const NewsItem = ({ article }: NewsItemProps) => {
  const { title, description, url, publishedAt, author } = article;
  return (
    <div className=" bg-white py-3 px-4 gap-[20px] flex flex-col items-center w-full md:w-[400px] h-[400px]  rounded-lg shadow-md">
      <h4 className="font-semibold text-center text-[20px]">{title}</h4>
      <p className="text-gray-600 text-center max-h-[250px] overflow-y-auto p-2">
        {description ? description : "No Description"}
      </p>
      <article className="flex gap-3 py-2 px-3 bg-blue-100 rounded-full">
        <p className="font-semibold max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
          {author}
        </p>
        <p className="font-medium">{publishedAt.split("T")[0]}</p>
      </article>
      <a
        className="mt-auto ml-auto bg-blue-600 text-white font-semibold rounded-md text-center w-[100px] py-2"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        See article
      </a>
    </div>
  );
};
