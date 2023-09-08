import React from "react";
import { Alert } from "react-bootstrap";

interface MessageProps {
  variant: "success" | "danger" | "warning" | "info";
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ variant, children, ...props }) => {
  return (
    <Alert variant={variant} {...props}>
      {children}
    </Alert>
  );
};

export default Message;
