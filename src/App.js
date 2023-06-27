import { useState } from "react";

import Searchimages from "./Searchimages";
import Displayimages from "./Displayimages";

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <>
        <h1>Image Bazaar</h1>
        <Searchimages setImages={setImages} />
        <Displayimages images={images} />
      </>
    </div>
  );
}

export default App;
