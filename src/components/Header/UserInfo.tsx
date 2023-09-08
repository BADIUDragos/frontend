import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import { selectUserInfo } from "../../store";

function Login() {
  return (
    <LinkContainer to="/login">
      <Nav.Link>
        <div className="fas fa-user" style={{ marginRight: "0.4rem" }} />
        Login
      </Nav.Link>
    </LinkContainer>
  );
}

const UserInfo = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

  // const { user, tokens, status, error } = useSelector((state: UserInfoState) => state.userInfo);

  // if (user === null) return (
  //   <div>yeah it's null bro</div>
  // )

  return <div>UserInfo</div>;
};

export default Login;

