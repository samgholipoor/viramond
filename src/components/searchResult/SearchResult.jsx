import React, { useEffect, useState } from "react";
import { UseSearchGender } from "../../core/api/location-api";
import { useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Cart,
  Title,
  Back,
  HeaderContainer,
} from "./SearchResult.styles";
import { MiniSpinner } from "../common/Spinner/MiniSpinner";

const SearchResult = () => {
  const { mutate, isLoading } = UseSearchGender();
  const [searchResult, setSearchResult] = useState();
  const search = useLocation().search;
  const history = useHistory();

  useEffect(() => {
    const gender = new URLSearchParams(search).get("gender");

    mutate(
      { gender },
      {
        onSuccess: (data) => {
          setSearchResult(data?.results);
        },
      }
    );
  }, [search, mutate]);

  const handleLink = () => {
    history.goBack();
  };

  return (
    <>
      <HeaderContainer>
        <Back onClick={handleLink}>
          <i className="fas fa-arrow-left"></i>
          <span>بازگشت</span>
        </Back>
      </HeaderContainer>
      <Container>
        {isLoading && <MiniSpinner />}
        {searchResult
          ?.filter((_, indx) => indx < 10)
          .map(({ name, status }, indx) => (
            <Cart key={indx}>
              <Title>
                <span>{name}</span>
                <span>
                  <i className="fas fa-user"></i>
                </span>
              </Title>
              <Title>
                <span>{status}</span>
                <span>
                  <i className="fas fa-info-circle"></i>
                </span>
              </Title>
            </Cart>
          ))}
      </Container>
    </>
  );
};

export { SearchResult };
