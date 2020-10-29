import * as VideoConst from '../constants/VideoConstants';

export const videoListReducer = (state = { videos: [] }, action) => {
  switch (action.type) {
    case VideoConst.VIDEO_LIST_REQUEST:
      return { loading: true, videos: [] };

    case VideoConst.VIDEO_LIST_SUCCESS:
      return { loading: false, videos: action.payload };

    case VideoConst.VIDEO_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
