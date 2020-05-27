import _ from "lodash";
import jsonPlaceholder from "../../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // refactored below using _.chain
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => {
  // getState can be omitted here but included for reference
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => {
  // getState can be omitted here but included for reference
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/users/" + id);

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
