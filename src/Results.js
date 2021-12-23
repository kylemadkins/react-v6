import Pet from "./Pet";

const Results = (props) => {
  return (
    <div className="results">
      {!props.pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        props.pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
