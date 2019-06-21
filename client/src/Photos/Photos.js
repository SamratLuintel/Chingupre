import React, { useEffect, useState } from "react";
import SinglePhoto from "./SinglePhoto/SinglePhoto";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";

import "./Photos.css";
import axios from "axios";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Photos = props => {
  const [fetched, setFetched] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async (sol, camera) => {
    try {
      const res = await axios.get(`/photos/${sol}/${camera}`);
      const photos = res.data;
      console.log(photos);
      setFetched(true);
      setPhotos(photos);
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToHome = () => props.history.push("/");
  useEffect(() => {
    const sol = props.match.params.sol;
    const camera = props.match.params.camera;
    console.log(sol, camera);
    fetchPhotos(sol, camera);
  }, []);

  let photosContent;
  if (fetched && photos.length === 0) photosContent = <p>No results found</p>;
  else {
    photosContent = photos.map(photo => <SinglePhoto photo={photo} />);
  }
  return (
    <div className="Photos">
      <div className="photos-wrapper">
        <h1 onClick={redirectToHome} className="photos-header">
          Go Back
        </h1>
        <div className="loading-section">
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={120}
            color={"#123abc"}
            loading={!fetched}
          />
        </div>
        <div className="main-area">{photosContent}</div>
      </div>
    </div>
  );
};

export default Photos;
