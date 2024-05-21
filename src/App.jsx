import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Step1 from "./components/Step1";
import StepSumary from "./components/StepSumary";
import Step2 from "./components/Step2";

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
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  })

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  console.log(formData)
  return (
    <>
    <Container >
    <StepSumary dataArray={dataArray} step={step}/>
   
     {
      step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep}/> 
    }
    {
      step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep}/> 
    } 
    
    </Container>
    </>
  );
}

export default App;
