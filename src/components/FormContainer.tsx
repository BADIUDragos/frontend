import React, { Children } from "react";
import { Container, Row, Col } from "react-bootstrap";

interface FormContainerInterface {
  xs: number;
  md: number;
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerInterface> = ({xs, md, children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={xs} md={md}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
