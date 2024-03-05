"use client";

import { useState } from "react";

export const useGetWeather = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const headers: RequestInit = {
    method: "GET",
    cache: "no-store",
  };
  const getWeather = async () => {};

  return {};
};
