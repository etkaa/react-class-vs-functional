import classes from "./search-box.module.css";

const SearchBox = (props) => {
  const { className, placeholder, onChange } = props;

  return (
    <input
      className={`${classes.searchBox} ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default SearchBox;
