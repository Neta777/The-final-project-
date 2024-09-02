import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Main.css";

export default function Main({ content, children, onButtonClick, buttonText }) {
  return (
    <Card className="w-100" style={{ maxWidth: "800px", position: "relative" }}>
      <Card.Body>
        <Card.Title>{content.Title}</Card.Title>
        {content.Subtitle && (
          <Card.Subtitle className="mb-2 text-muted">
            {content.Subtitle}
          </Card.Subtitle>
        )}
        {content.Description && <Card.Text>{content.Description}</Card.Text>}
        {children}
        <Button className="button" variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
