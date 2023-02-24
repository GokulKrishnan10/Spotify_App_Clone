import "./search.css";
import { BiSearch } from "react-icons/bi";
function SearchBar() {
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
            style={{ fontSize: "15px", textAlign: "center" }}
            type="text"
            placeholder="what you want to hear?"
          />
        </div>
      </div>
    </>
  );
}
export default SearchBar;
