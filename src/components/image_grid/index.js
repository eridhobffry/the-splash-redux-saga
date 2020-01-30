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

const ImageGrid = props => {
  useEffect(() => {
    loadImages();
    // const URL = process.env.URL_BASE;
    // const KEY = process.env.KEY;
    // fetch(`${URL}${KEY}&per_page=3`)
    // .then(res => res.json())
    // .then(images => {
    // 	props
    // })
  });
  // const { isLoading, images, loadImages, error, imageStats } = props;

  ImageGrid.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    images: PropTypes.object,
    error: PropTypes.bool,
    imageStats: PropTypes.object
  };

  const ItemImage = props.images.map(image => (
    <Item key={image.id} gridRow={`${Math.ceil(image.height / image.width)}`}>
      <Image src={image.urls.small} alt={image.user.username}></Image>
    </Item>
  ));

  return (
    <Fragment>
      <Content>
        <Grid>
          {ItemImage}
          {/* {props.images.map(image => (
            <Item
              key={image.id}
              gridRow={`${Math.ceil(image.height / image.width)}`}
            >
              <Image src={image.urls.small} alt={image.user.username}></Image>
            </Item>
          ))} */}
        </Grid>
        {props.error && (
          <ErrorParagraph>{JSON.stringify(props.error)}</ErrorParagraph>
        )}
      </Content>
      <ButtonComponent
        onClick={() => !props.isLoading && loadImages()}
        loading={props.isLoading}
      >
        Load more
      </ButtonComponent>
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
