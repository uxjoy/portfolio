const Home = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl tracking-tight text-white md:text-[56px] md:leading-[64px] z-10">
        Coming Soon...
      </h1>

      <div className="w-[800px] h-[400px] bg-primary-400/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl z-0"></div>
    </main>
  );
};

export default Home;
