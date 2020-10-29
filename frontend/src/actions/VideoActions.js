import * as VideoConst from '../constants/VideoConstants';
// import axios from 'axios';
import data from '../data/vlinks';

export const listVideos = () => async dispatch => {
  try {
    dispatch({ type: VideoConst.VIDEO_LIST_REQUEST });

    // const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: VideoConst.VIDEO_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: VideoConst.VIDEO_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
