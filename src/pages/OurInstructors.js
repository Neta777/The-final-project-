import "./OurInstructors.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const instructors = [
  {
    id: 1,
    name: "Ravi Nanda:",
    about:
      " Ravi Nanda offers calming, wisdom-infused classes blending Hatha and mindfulness. His gentle approach fosters inner peace and self-discovery.",
  },
  {
    id: 2,
    name: "Isha Aditi:",
    about:
      "Isha Aditi’s vibrant classes mix dynamic Vinyasa with playful sequences. Her sessions focus on joyful movement and breath connection.",
  },
  {
    id: 3,
    name: "Kiran Bodhi:",
    about:
      " Kiran Bodhi emphasizes alignment and breath in structured classes. His approach combines restorative poses with mindfulness for mental clarity.",
  },
  {
    id: 4,
    name: "Maya Prana:",
    about:
      "Maya Prana integrates yoga with holistic wellness. Her nurturing classes include energy work and chakra balancing for overall vitality.",
  },
];
const instructorHeading = "Our instructors:";
export default function OurInstructors() {
  const [isInstrInfoVisible, setIsInstrInfoVisible] = useState(false);
  const handleButtonClick = () => {
    setIsInstrInfoVisible(!isInstrInfoVisible);
  };
  return (
    <div className="backgroundOurInstructorsPage">
      <div className="instructorsInfo">
        <Button
          className="button"
          variant="primary"
          onClick={handleButtonClick}
        >
          {isInstrInfoVisible ? "Hide information" : "Brief info !"}
        </Button>
        <h3>{instructorHeading}</h3>
        {isInstrInfoVisible && (
          <ul>
            {instructors.map((instr) => (
              <li key={instr.id}>
                {instr.name}
                {instr.about}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
