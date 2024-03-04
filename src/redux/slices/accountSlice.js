import { createSlice } from '@reduxjs/toolkit';

import { account } from 'src/_mock/account';


const initialState = {
  email: '',
  favorited: [],
  displayName: undefined,
  imageUrl: '',
};

export const AccountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    onSetAccount: (state, action) => {
      state.email = action.payload.email;
      state.displayName = account.displayName;
      state.imageUrl = account.photoURL
    },
    onRemoveAccount: () => initialState,
  },
});

const accountReducer = AccountSlice.reducer;

export default accountReducer;

export const { onSetAccount,onRemoveAccount } = AccountSlice.actions;

export const getAccount = (state) => ({
  email: state.account?.email,
  displayName: state.account?.displayName,
  imageUrl: state.account?.imageUrl
});

export const getAccountFavorited = (state) => state.user.favorited;
