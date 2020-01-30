import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { ButtonComponent } from "../button";
import PropTypes from "prop-types";

import {
  Content,
  Image,
  Item,
  Grid,
  ErrorParagraph
} from "../../style/image_grid_style";
import { loadImages } from "../../actions";
import { Stats } from "../stats";

const ImageGrid = props => {
  const { isLoading, images, loadImages, error, imageStats } = props;
  useEffect(() => {
    loadImages();
  });

  ImageGrid.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    images: PropTypes.object,
    error: PropTypes.bool,
    imageStats: PropTypes.object
  };

  const ItemImage = images.map(image => (
    <Item key={image.id} gridRow={`${Math.ceil(image.height / image.width)}`}>
      <Stats stats={imageStats[image.id]}></Stats>
      <Image src={image.urls.small} alt={image.user.username} />
    </Item>
  ));

  return (
    <Fragment>
      <Content>
        <Grid>{ItemImage}</Grid>
        {error && <ErrorParagraph>{JSON.stringify(error)}</ErrorParagraph>}
        <ButtonComponent
          onClick={() => !isLoading && loadImages()}
          loading={isLoading}
        >
          Load more
        </ButtonComponent>
      </Content>
    </Fragment>
  );
};

const mapStateToProps = ({ isLoading, images = [], error, imageStats }) => ({
  isLoading,
  images,
  error,
  imageStats
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
