"use client";
import { IArticle } from "@/interfaces";
import { useEffect, useState } from "react";

export const useGetTopHeadlines = (category = "") => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [news, setNews] = useState<IArticle[]>([]);

  const headers: RequestInit = {
    method: "GET",
    cache: "no-store",
  };

  const openNewsKey = process.env.NEXT_PUBLIC_NEWS_APY_KEY || "";

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${openNewsKey}`,
        headers
      ).then((response) => response.json());

      if (data.status === "ok") {
        setNews(data.articles);
      }
      setIsLoading(false);
    } catch (error) {
      setNews([]);
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return { news, isLoading };
};
