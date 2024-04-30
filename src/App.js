import Map from "./components/Map";
import Results from "./components/Results";
import Search from "./components/Search";
import { IpProvider } from "./context/IpContext";

function App() {
  return (
    <main>
       <IpProvider>
      <Map/>
      <Search/>
      <Results/>
      </IpProvider>
    </main>
  );
}

export default App;
