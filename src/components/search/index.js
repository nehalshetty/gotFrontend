import PropTypes from "prop-types";
import { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./index.css";
import { withRouter } from "react-router-dom";

const SearchBar = ({ options, history }) => {
  const [search, setSearch] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  });

  const handleUserInput = (e) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = options.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setSearch({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  const handleUserClick = (e) => {
    let selectedValue = e.currentTarget.innerText;

    setSearch({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: selectedValue,
    });
    redirectToBattlePage(selectedValue);
  };

  const redirectToBattlePage = (location) => {
    history.push(`/battle?location=${location}`);
  };

  const handleKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions, ...rest } = search;

    if (e.keyCode === 13) {
      let inputOnEnter =
        filteredSuggestions[activeSuggestion] || rest.userInput;
      setSearch({
        filteredSuggestions,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: inputOnEnter,
      });

      redirectToBattlePage(inputOnEnter);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setSearch({
        ...rest,
        activeSuggestion: activeSuggestion - 1,
        filteredSuggestions,
      });
    } else if (e.keyCode === 40) {
      if (activeSuggestion === filteredSuggestions.length - 1) {
        return;
      }

      setSearch({
        ...rest,
        activeSuggestion: activeSuggestion + 1,
        filteredSuggestions,
      });
    }
  };

  return (
    <div className="search">
      {" "}
      <InputGroup className="nav__item">
        <FormControl
          placeholder="Search location"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search.userInput}
          onChange={handleUserInput}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
      {/* Autocomplete options */}
      <div className="search__options">
        {search.showSuggestions && search.userInput ? (
          search.filteredSuggestions.length ? (
            <ul>
              {search.filteredSuggestions.map((suggestion, i) => {
                return (
                  <li
                    key={suggestion + i}
                    className={
                      i === search.activeSuggestion ? "active" : undefined
                    }
                    onClick={handleUserClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="no-suggesion">
              <span>No suggestions!</span>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

SearchBar.prototype = {
  list: PropTypes.array.isRequired,
};

export default withRouter(SearchBar);
