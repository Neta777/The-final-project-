import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const now = new Date();

export default function Footer({ address }) {
  const className = "theFooter";
  const pClassName = "theDate";

  const formattedDate = now.toLocaleString();

  return (
    <footer className={className}>
      <Container>
        <Row>
          <Col>
            <p className={pClassName}>
              &copy; {formattedDate}{" "}
              <div className="address">
                <h3>Address:</h3>
                <p>{address}</p>
              </div>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
