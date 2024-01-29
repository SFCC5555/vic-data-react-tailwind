import { StateBar } from "./components/StateBar";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <section className="main-container flex flex-col justify-between h-full w-full bg-black">
      <StateBar />
      <Calculator />
    </section>
  );
}

export default App;
