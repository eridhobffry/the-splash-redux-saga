import React, { Component } from "react";
import { connect } from "react-redux";

import { ButtonComponent } from "../button";
// import Stats from '../Stats';
import { loadImages } from "../../actions";
import "./styles.css";

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { isLoading, images, loadImages, error, imageStats } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              {/* <Stats stats={imageStats[image.id]} /> */}
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <ButtonComponent
          onClick={() => !isLoading && loadImages()}
          loading={isLoading}
        >
          Load More
        </ButtonComponent>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
  isLoading,
  images,
  error,
  imageStats
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
