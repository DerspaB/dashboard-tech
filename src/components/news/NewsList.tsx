"use client";

import { useGetTopHeadlines } from "@/hooks/useGetTopHeadlines";
import { ChangeEvent, useState } from "react";
import { Loading, NewsItem } from "..";

export const NewsList = () => {
  const [category, setCategory] = useState("");

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };
  const { news, isLoading } = useGetTopHeadlines(category);

  return (
    <div className="flex flex-col gap-1 items-center">
      <article className="w-full flex p-2 items-center ">
        <select
          onChange={handleChangeSelect}
          className="rounded-lg p-2 shadow-md"
        >
          <option value="">All</option>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
        </select>
      </article>
      {isLoading && <Loading />}
      <div className="flex flex-col md:flex-row flex-wrap py-[20px] px-[10px] w-full md:max-w-[850px]  items-center gap-[20px]">
        {news?.length > 0 &&
          !isLoading &&
          news.map((article, idx) => <NewsItem article={article} key={idx} />)}
      </div>
    </div>
  );
};
