import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  favorited: [],
  displayName: undefined,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
      state.displayName = 'Assignment Tester';
    },
    onFavoriteMovieId: (
      state,
      action
    ) => {
      state.favorited = Array.from(new Set([...state.favorited, action.payload]));
    },
    unFavoriteMovieId: (
      state,
      action
    ) => {
      state.favorited.filter((favoritedMovieId) => favoritedMovieId !== action.payload);
    },
  },
});

const userReducer = UserSlice.reducer;

export default userReducer;

export const { setUserName, onFavoriteMovieId, unFavoriteMovieId } = UserSlice.actions;

export const getUserName = (state) => ({
  userName: state.user.userName,
  displayName: state.user.displayName,
});

export const getUserFavorited = (state) => state.user.favorited;
