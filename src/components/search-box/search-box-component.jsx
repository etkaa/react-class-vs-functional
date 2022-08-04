import { Component } from "react";
import classes from "./search-box.module.css";

class SearchBox extends Component {
  render() {
    const { className, placeholder, onChange } = this.props;

    return (
      <input
        className={`${classes.searchBox} ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default SearchBox;
