import React from 'react';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const VideoList = ({ videos, handleClick }) => {
  return (
    <Col
      className='d-inline-block mt-md-0 mt-xs-4'
      style={{ fontSize: '1.2rem' }}
      md={3}
      xs={12}
    >
      {videos && videos.length > 0 ? (
        <ListGroup className='list-group v-scroll'>
          {videos.map((v, ind) => (
            <ListGroupItem
              onClick={handleClick}
              key={ind}
              className='font-weight-bolder text-dark text-center list-item'
            >
              {v.title}
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : null}
    </Col>
  );
};

export default VideoList;
