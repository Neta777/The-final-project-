import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import "./Layout.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ruleHeading = "Our rules";
const rules = [
  {
    id: 1,
    rule: "Embrace the Calm: Foster a peaceful atmosphere to enhance your tranquility and that of others.",
  },
  {
    id: 2,
    rule: "Disconnect to Reconnect: Leave devices behind to fully immerse in the present.",
  },
  {
    id: 3,
    rule: "Engage with Joy: Participate wholeheartedly and honor our instructors’ guidance.",
  },
];
const address = ` Zen Harmony Yoga Retreat
123 Serenity Lane
Rishikesh, Uttarakhand, 249137
India

Telephone: +91 98765 43210

Email: info@zenharmonyretreat.in`;
export default function Layout({
  currentContent,
  handleMainClick,
  buttonText,
  ruleHeading,
}) {
  const [rulesText, setRulesText] = useState({ ruleHeading });
  const [isRulesVisible, setIsRulesVisible] = useState(false);
  const location = useLocation();
  const backgroundClass =
    {
      "/home": "backgroundHomePage ",
      "/login": "backgroundLoginPage",
      "/registration": "backgroundRegistrationPage",
      "/ourInstructors": "backgroundOurInstructorsPage",
    }[location.pathname] || "backgroundHomePage";
  return (
    <div className={backgroundClass}>
      <Header id="header" />

      <main id="main">
        {location.pathname === "/home" && (
          <Main
            content={currentContent}
            onButtonClick={handleMainClick}
            buttonText={buttonText}
          >
            <span>Please read the information carefully!</span>
          </Main>
        )}
        <div className="theRules">
          <Button
            className="button"
            variant="primary"
            onClick={() => setIsRulesVisible(!isRulesVisible)}
          >
            {isRulesVisible ? "Hide the rules" : "Please read the rules"}
          </Button>
          {isRulesVisible && (
            <>
              <h1>{ruleHeading}</h1>
              <ul>
                {rules.map((rule) => (
                  <li key={rule.id}>{rule.rule}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <Outlet />
      </main>
      <Footer address={address} id="footer" />
    </div>
  );
}
