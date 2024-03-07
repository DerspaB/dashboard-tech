export default function MainPage() {
  return (
    <div className="w-full  flex flex-col items-center">
      <article className="text-center flex gap-4 flex-col items-center justify-center  py-4 px-2 w-full md:w-[800px] h-[400px] bg-white mt-[40px] shadow-md">
        <h1 className="font-bold text-[30px] md:text-[35px]">
          Welcome to DashTech!
        </h1>
        <p className="md:w-[400px] font-medium">
          This dashboard showcases my frontend development skills by featuring
          modules for weather updates, news feeds, and a task manager.
        </p>
      </article>
    </div>
  );
}
