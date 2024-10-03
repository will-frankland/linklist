import HeroForm from "@/components/forms/HeroForm";


const Home = () => {
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link
            <br /> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, music, social profiles, contact info and more on
            one page
          </h2>
        </div>
        <HeroForm />
      </section>
    </main>
  );
}
 export default Home;