import "./App.css";
import { RedocStandalone } from "redoc";
// import file from "../Merchant_Dashboard.postman_collection.json";
function App() {
  return (
    <div className="App">
      <RedocStandalone
        specUrl="https://dev-dash.gokwik.co/public/Gokwik_Custom_API_Integration_Docs.json"
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: "#dd5522" } } },
        }}
      />
    </div>
  );
}

export default App;
