import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import Footer from "./components/Footer/Footer";
import Message from "./Message/Message";
import List from "./components/List/List";
List;

const App = () => {
  const isOnline = true;
  const age = 18;
  const filmsData = [
    { id: "1", title: "GOT" },
    { id: "2", title: "Taxi" },
    { id: "3", title: "OLX" },
    { id: "4", title: "Gilmor's Girl" },
  ];
  return (
    <>
      <Header />
      <p>Super forum</p>
      {isOnline && <h2>Welcome</h2>}
      {age >= 18 ? <h2>Ok</h2> : <h2>No</h2>}
      <Message author="Petro" message="Sell bad" />
      <Message author="Alex" message="Sell bad" />
      <Message author="Roman" message="Sell bad" />
      <List title="Goods" data={filmsData} />
      {/* <WelcomeSection />
      <Footer /> */}
    </>
  );
};

export default App;
