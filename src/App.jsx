import "./App.css";
import Step1 from "./components/Step1";

const dataArray = [
  {
    id: 1,
    name: "STEP 1",
    content: 'YOUR INFO'
  },
  {
    id: 2,
    name: "STEP 2",
    content: 'SELECT PLAN'
  },
  {
    id: 3,
    name: "STEP 3",
    content: 'ADD-ONS'
  },
  {
    id: 4,
    name: "STEP 4",
    content: 'SUMMARY'
  },
]

function App() {
  return (
    <>
      <Step1 dataArray={dataArray}/>
    </>
  );
}

export default App;
