import "./App.css";
// import FinalTable from "./FinalTable";
import Ref from "./Ref";
// import Memo from "./Memo";
// import Inline from "./Inline";
// import Form from "./Form";
import ClassErrorBoundary from "./ClassErrorBoundary";
import Hero from "./Hero";
function App() {
  return (
    <>
      <ClassErrorBoundary>
        <Hero heroName="Joker1" />
      </ClassErrorBoundary>
    </>
  );
}

export default App;
