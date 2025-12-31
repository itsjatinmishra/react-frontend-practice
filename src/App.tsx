import "./App.css";
import ClickCounter2 from "./ClickCounter2";
import Counter2 from "./Counter2";
// import HoverCounter from "./HoverCounter";
// import User from "./User";
// import ClickCounter from "./ClickCounter";
// import HoverCounter from "./HoverCounter";
// import FinalTable from "./FinalTable";
// import Ref from "./Ref";
// import Memo from "./Memo";
// import Inline from "./Inline";
// import Form from "./Form";
// import ClassErrorBoundary from "./ClassErrorBoundary";
// import Hero from "./Hero";
function App() {
  return (
    <>
      {/* <ClassErrorBoundary>
        <Hero heroName="Joker1" />
      </ClassErrorBoundary> */}
      {/* <ClickCounter name="User 1" />
      <HoverCounter name="User 2" /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Jatin Mishra" : "Guest")} /> */}
      <Counter2
        render={(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      />
    </>
  );
}

export default App;
