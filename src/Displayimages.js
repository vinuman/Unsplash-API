const Displayimages = ({ images }) => {
  return (
    <>
      {images.map((pic, index) => {
        return (
          <>
            <img
              alt={pic.alt_description}
              key={index}
              src={pic.urls.small}
            ></img>
          </>
        );
      })}
    </>
  );
};

export default Displayimages;
