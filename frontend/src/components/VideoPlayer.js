import React from 'react';
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ vurl }) => {
  return (
    <Col className="wrapper" lg={9} xs={12}>
      <ReactPlayer
        controls={true}
        width={'100%'}
        height={'70vh'}
        url={vurl ? vurl : (vurl = 'https://youtu.be/Z5Ys92CxMBE')}
      />
    </Col>
  );
};

export default VideoPlayer;
