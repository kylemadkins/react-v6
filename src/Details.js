import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  state = { loading: true, petNotFound: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    if (!json.pets.length) {
      this.setState({ loading: false, petNotFound: true });
    } else {
      this.setState(
        Object.assign({ loading: false, hasError: false }, json.pets[0])
      );
    }
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else if (this.state.petNotFound) {
      throw new Error("Pet not found");
    } else {
      const { name, animal, breed, city, state, description, images } =
        this.state;
      return (
        <div className="details">
          <Carousel images={images} />
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <p>{description}</p>
          <button>Adopt {name}</button>
        </div>
      );
    }
  }
}

export default function DetailsWithErrorBoundary() {
  const DetailsWithRouter = withRouter(Details);
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
