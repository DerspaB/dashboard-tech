import { NewsList } from "@/components";

export const metadata = {
  title: "News feed",
  description: "Check the top headlines news",
};

export default function NewsPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-semibold text-[30px] mb-[30px]">News Feed Page</h1>
      <NewsList />
    </div>
  );
}
