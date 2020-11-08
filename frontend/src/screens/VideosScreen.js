import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import VideoList from '../components/VideoList';
import VideoPlayer from '../components/VideoPlayer';
import { listVideos } from '../actions/VideoActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  // @ts-ignore
  const videoList = useSelector(state => state.videoList);
  const { loading, error, videos } = videoList;

  useEffect(() => {
    dispatch(listVideos());
  }, [dispatch]);

  const handleClick = e => {
    const title = e.target.innerText;
    const vlink = videos.find(x => x.title === title).v;

    vlink !== null && setUrl(vlink);
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Row>
      <VideoPlayer vurl={url} />
      <VideoList handleClick={handleClick.bind(this)} videos={videos} />
    </Row>
  );
};

export default HomeScreen;
