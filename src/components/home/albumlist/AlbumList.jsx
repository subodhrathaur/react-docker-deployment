import React, { useState, useEffect } from "react";
import useFetch from "../../../utils/useFetch";
import { API_ENDPOINTS, appConfig, buildUrl } from "../../../config/config";
import { Button, Card } from "react-bootstrap";
import './AlbumList.css';
import { getRandomImage, getTags } from "../../../utils/utils";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

function AlbumList() {
  const { data, error, loading } = useFetch(
    `${appConfig.API_URL}${buildUrl(API_ENDPOINTS.GET_ALBUMS)}`,
    {}
  );
  const navigate = useNavigate();  // Initialize the navigate function

  useEffect(() => {
    if (data) {
      // console.log("Data", data);
    }

    if (error) {
      console.log(`Error is ${error}`);
    }
  }, [data, error]);

  // Function to handle button click and navigate to AlbumDetail
  const handleViewAlbum = (albumId) => {
    navigate(`/album/${albumId}`); // Navigate to the album detail page with the specific ID
  };

  return (
    <div className="album-list-container">
      <h1 className="album-list-heading">List Of Albums</h1>
      <div className="album-card-container">
        {data?.map((dataItem, index) => {
          return (
            <Card key={`${index + 1}`} className="album-card" style={{ width: "18rem" }}>
              <Card.Img className="card-image" variant="top" src={getRandomImage()} />
              <Card.Body>
                <Card.Title>{`Album ${dataItem.id}`}</Card.Title>
                <Card.Text className="album-title">{dataItem.title}</Card.Text>
                <Button variant="primary" onClick={() => handleViewAlbum(dataItem.id)}>Check the Album</Button>
              </Card.Body>
              <Card.Footer className="album-card-footer">
                {getTags().map((tag, idx) => (
                  <span key={idx} className="album-tag">{tag}</span>
                ))}
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default AlbumList;
