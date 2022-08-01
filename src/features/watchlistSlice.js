import { createSlice } from '@reduxjs/toolkit';

export const watchlistSlice = createSlice ({
  name: 'watchlist',
  initialState : {
    watchlist: [],
    watched: [],
  },
  reducers: {
    addToWatchlist: (state, action) => {
        const dupeItem = state.watchlist.find((item) => item.id === action.payload.id);
        if (!dupeItem) {
            {state.watchlist = [...state.watchlist, action.payload]}
        } 
    },
    removeFromWatchlist: (state, action) => {
        state.watchlist = state.watchlist.filter((watchlistItem) => watchlistItem.id !== action.payload)
    },
    addToWatched: (state, action) => {
        const dupeItem = state.watched.find((item) => item.id === action.payload.id);
        if (!dupeItem) {
            {state.watched = [...state.watched, action.payload]}
        } 
    },
    removeFromWatched: (state, action) => {
        state.watched = state.watched.filter((watchlistItem) => watchlistItem.id !== action.payload)
    }
  },
});

export const { 
  addToWatchlist,
  removeFromWatchlist, 
  addToWatched,
  removeFromWatched, 
} = watchlistSlice.actions;

export const watchlist = (state) => state.watchlist.watchlist;
export const watched = (state) => state.watchlist.watched;

export default watchlistSlice.reducer;