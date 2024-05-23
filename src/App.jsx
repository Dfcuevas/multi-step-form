import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Step1 from "./components/Step1";
import StepSumary from "./components/StepSumary";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const dataArray = [
  {
    id: 1,
    name: "STEP 1",
    content: "YOUR INFO",
  },
  {
    id: 2,
    name: "STEP 2",
    content: "SELECT PLAN",
  },
  {
    id: 3,
    name: "STEP 3",
    content: "ADD-ONS",
  },
  {
    id: 4,
    name: "STEP 4",
    content: "SUMMARY",
  },
];

function App() {
  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: {
      duration: "",
      planType: ",",
      price: "",
    },
    addons: [],
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Container>
        <StepSumary dataArray={dataArray} step={step} />

        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            handleChange={handleChange}
          />
        )}
        {step === 2 && (
          <Step2
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            checked={checked}
            setChecked={setChecked}
          />
        )}
        {step === 3 && (
          <Step3
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            checked={checked}
          />
        )}
        {step === 4 && (
          <Step4
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            checked={checked}
          />
        )}
      </Container>
    </>
  );
}

export default App;
