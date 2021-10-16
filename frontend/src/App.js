import { CustomProvider } from "rsuite";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

import "./App.css";
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <CustomProvider theme="dark" className="App">
      <NavbarComponent />
    </CustomProvider>
  );
}

export default App;
