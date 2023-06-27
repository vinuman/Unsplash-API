import { useState, useEffect } from "react";
import axios from "axios";

const Searchimages = ({ setImages }) => {
  const [search, setSearch] = useState("cat");

  function getImages() {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: "j_c0tbqHhYLzr7YBkEpzH6XL9wubjlzSXqXa-vlOj6M",
          query: search,
        },
      })
      .then((response) => setImages(response.data.results))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getImages();
  }, []);

  /*   function getImages() {
    const url = new URL("https://api.unsplash.com/search/photos");
    url.searchParams.append("client_id", process.env.REACT_APP_ACCESS_KEY);
    url.searchParams.append("query", search);

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } */

  return (
    <>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search images"
        value={search}
      ></input>
      <button onClick={getImages}>Search</button>
    </>
  );
};

export default Searchimages;
