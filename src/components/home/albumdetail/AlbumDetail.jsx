import React, { useEffect, useState } from "react";
import useFetch from "../../../utils/useFetch";
import { API_ENDPOINTS, appConfig, buildUrl } from "../../../config/config";
import { LoremIpsum } from "lorem-ipsum";
import { ALBUM_URLS, randomNumber } from "../../../utils/utils";
import Comments from "../comments/Comments";
import "./AlbumDetail.css"; 
import { useParams } from 'react-router-dom';

function AlbumDetail() {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `${appConfig.API_URL}${buildUrl(API_ENDPOINTS.GET_ALBUMS,{id:id})}`, 
    {}
  );
  const [getRandomText, setRandomText] = useState("");
  const [getAlbumDetail, setAlbumDetail] = useState({});
  const [getAlbumImage, setAlbumImage] = useState(null);

  // Fetch album data
  const {
    data: albumData,
    error: albumError,
    loading: albumLoading,
  } = useFetch(
    `${appConfig.API_URL}${buildUrl(API_ENDPOINTS.GET_ALBUM_DETAILS, {
      id: 1,
    })}`
  );

  const {
    data: commentsData,
    error: commentsError,
    loading: commentsLoading,
  } = useFetch(
    `${appConfig.API_URL}${buildUrl(API_ENDPOINTS.GET_ALBUM_COMMENTS, {
      id: 1,
    })}`
  );

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  useEffect(() => {
    setAlbumImage(ALBUM_URLS[randomNumber(1, 20)]);
  }, []);

  useEffect(() => {
    setRandomText(lorem.generateSentences(5));
  }, []);

  useEffect(() => {
    if (albumData) {
      setAlbumDetail(albumData);
    }
  }, [albumData]);

  useEffect(() => {
    if (commentsData) {
      console.log("Comments data:", commentsData);
    }
  }, [commentsData]);

  return (
    <div className="album-detail-container">
      <div className="album-image-container">
        {getAlbumImage && <img src={getAlbumImage} alt="Album" />}
      </div>

      <div className="album-meta-container">
        <h2>
          {getAlbumDetail && getAlbumDetail.title
            ? getAlbumDetail.title
            : "Album title"}
        </h2>
        <p>{getRandomText}</p>

        <div className="user-posts-container">
          <h5>Comments</h5>
          {commentsData && commentsData.length > 0 ? (
            commentsData.map((comment, index) => {
                console.log("comment",comment);
                return <Comments
                key={index}
                comment={comment}
              />
            })
          ) : (
            <p>No comments available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AlbumDetail;
