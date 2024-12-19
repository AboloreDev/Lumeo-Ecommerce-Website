import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import PopularPicks from "../components/PopularPicks";
import ServicePledge from "../components/ServicePledge";
import NewCollection from "../components/NewCollection";

function Home() {
  return (
    <div>
      <Hero />
      <NewCollection />
      <PopularPicks />
      <ServicePledge />
      <NewsLetter />
    </div>
  );
}

export default Home;
