import React from 'react';
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ vurl }) => {
  if (vurl != undefined) {
    console.clear();
    console.log(`\n\n\tReceived video link: ${vurl}\n\n`);
  }

  return (
    <Col className="wrapper" md={9} xs={12}>
      <ReactPlayer controls={true} width={'100%'} height={'70vh'} url={vurl} />
    </Col>
  );
};

export default VideoPlayer;
