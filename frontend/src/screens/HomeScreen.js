import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
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

    vlink !== null ? console.log(vlink) : console.log(`\n\n\t\tNope\n\n`);
    setUrl(vlink);
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container fluid>
      <Row>
        <VideoPlayer vurl={url} />
        <VideoList handleClick={handleClick.bind(this)} videos={videos} />
      </Row>
    </Container>
  );
};

export default HomeScreen;
