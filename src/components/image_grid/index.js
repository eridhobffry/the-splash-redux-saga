import React, { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import {
  Content,
  Image,
  Item,
  Grid,
  ErrorParagraph
} from "../../style/image_grid_style";
import { loadImages } from "../../actions";

const ImageGrid = props => {
  useEffect = () => {
    loadImages();
  };

  const { isLoading, images, loadImages, error, imageStats } = props;

  ImageGrid.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    images: PropTypes.object,
    error: PropTypes.bool,
    imageStats: PropTypes.object
  };

  return (
    <Content>
      <Grid>
        {images.map(image => (
          <Item
            key={image.id}
            gridRow={`${Math.ceil(image.height / image.width)}`}
          >
            <Image src={image.urls.small} alt={image.user.username}></Image>
          </Item>
        ))}
      </Grid>
      {error && <ErrorParagraph>{JSON.stringify(error)}</ErrorParagraph>}
    </Content>
  );
};

const mapStateToProps = ({ isLoading, image, error, imageStats }) => ({
  isLoading,
  image,
  error,
  imageStats
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
