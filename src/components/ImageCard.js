import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    // ref for each image
    this.imageRef = React.createRef();
    // state object with spans for determining the amount of rows each image will span
    this.state = {
      spans: 0,
    };
  }
  // when each image mounts, we can setSpans to determine the spans needed
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  // function that takes the images height from the ref, and determines the amount of spans needed based on the height of the image
  setSpans = () => {
    const height = this.imageRef.current.height;

    const spans = Math.ceil(height / 10);

    // setting the spans to the spans variable
    this.setState({ spans });
  };

  render() {
    // pulling urls and alt-description from the image from props for DRYer code
    const { urls, alt_description } = this.props.image;
    return (
      // the gridRowEnd value is where I use the spans value
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
