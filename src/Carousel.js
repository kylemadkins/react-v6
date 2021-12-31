import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (index) => {
    this.setState({ active: index });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="Pet" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // I know this should be a button
            // eslint-disable-next-line
            <img
              key={image}
              src={image}
              onClick={() => this.handleIndexClick(index)}
              className={index === active ? "active" : ""}
              alt="Pet thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
