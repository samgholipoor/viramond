import React, { useEffect, useState } from "react";
import { UseSearchGender } from "../../core/api/location-api";
import { useLocation } from "react-router-dom";
import { Container, Cart, Title } from "./SearchResult.styles";

const SearchResult = () => {
  const { mutate } = UseSearchGender();
  const [searchResult, setSearchResult] = useState();
  const search = useLocation().search;

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

  return (
    <Container>
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
  );
};

export { SearchResult };
