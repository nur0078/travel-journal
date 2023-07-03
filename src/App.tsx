import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { Data } from "./data";

function App() {
  const cards = Data().map((item) => {
    return <Card key={item.key} data={item} />;
  });

  return (
    <div className="font-poppins">
      <Navbar />
      <section className="flex-col py-16 px-12">{cards}</section>
      <Footer />
    </div>
  );
}

export default App;
