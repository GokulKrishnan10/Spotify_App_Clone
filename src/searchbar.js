import "./search.css";
import { BiSearch } from "react-icons/bi";
function SearchBar({ dispArt }) {
  return (
    <>
      <div>
        <div class="search-box">
          <BiSearch
            style={{
              marginLeft: "3%",
              color: "black",
              marginTop: "3%",
              width: "25px",
              height: "25px",
            }}
          />
          <input
            style={{
              fontSize: "15px",
              textAlign: "center",
              borderRadius: "20px",
            }}
            onInput={dispArt}
            type="text"
            placeholder="what you want to hear?"
          />
        </div>
      </div>
    </>
  );
}
export default SearchBar;
