import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteDirector } from "../../components/common/RouteDirector";
import { NavBar } from "../../components/common/NavBar";
import { routes } from "./routes";
import { Container, Holder, Wrapper } from "./UnAuthentication.styles";

const UnAuthentication = () => {
  return (
    <>
      <Container>
        <Holder>
          <Wrapper>
            <NavBar />
            <Switch>
              {routes.map((item, indx) => {
                return (
                  <RouteDirector
                    key={indx}
                    exact={item.exact}
                    path={item.path}
                    title={item.title}
                  >
                    <item.component />
                  </RouteDirector>
                );
              })}

              <Redirect to="/not-found-page" />
            </Switch>{" "}
          </Wrapper>
        </Holder>
      </Container>
    </>
  );
};

export { UnAuthentication };
