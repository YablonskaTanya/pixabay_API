import { Component } from "react";
import css from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
