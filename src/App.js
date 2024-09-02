import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import OurInstructors from "./pages/OurInstructors";
import LogIn from "./pages/LogIn";

import "./App.css";

const description = {
  Title: "Welcome to our yoga retreat!!!",
  Subtitle: "Here you can sign up to join us",
  Description: `
Escape to paradise at Serenity Yoga Retreat, where bliss and tranquility await! Start your day with sun-drenched yoga sessions against the majestic Green Mountain Range. Let nature's melodies guide you through transformative meditation and soul-enriching workshops. Our retreat is a sanctuary of serenity, offering a journey to refresh your spirit, revive your body, and inspire your heart. Delight in organic meals crafted to nourish you and revel in the breathtaking beauty that surrounds you. Price: $499 per person for a 3-day retreat. This all-inclusive package features invigorating yoga, soul-soothing meditation, gourmet organic cuisine, and cozy accommodations in charming eco-lodges.
`,
};

export default function App() {
  const [currentContent, setContent] = useState({ Title: description.Title });
  const [step, setStep] = useState(1);
  const [buttonText, setButtonText] = useState("Let's start");

  const handleMainClick = () => {
    if (step === 1) {
      setContent({ Subtitle: description.Subtitle });
      setButtonText("Next");
      setStep(2);
    } else if (step === 2) {
      setContent({ Description: description.Description });
      setButtonText("Start Over");
      setStep(3);
    } else {
      setContent({ Title: description.Title });
      setButtonText("Let's start");
      setStep(1);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route
          path="/"
          element={
            <Layout
              currentContent={currentContent}
              handleMainClick={handleMainClick}
              buttonText={buttonText}
              description={description}
            />
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/ourInstructors" element={<OurInstructors />} />
          <Route path="/logIn" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}
