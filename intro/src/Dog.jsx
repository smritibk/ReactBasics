const animalStyle = {
  objectFit: "cover",
  height: "600px",
  width: "700px",
};

function Dog() {
  return (
    <div>
      <img src="bernese-mountain-dog.jpg" alt="dog" style={animalStyle} />
    </div>
  );
}

export default Dog;
