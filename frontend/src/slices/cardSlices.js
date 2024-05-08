import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    cardsList: [],
    selectedCard: {},
    isLoading: false,
    error: ''
}

const BASE_URL = 'http://localhost:4000/api/card';

// GET
export const getCardsFromServer = createAsyncThunk(
    "card/getCardsFromServer",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(BASE_URL);
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                return rejectWithValue({ error: 'No Cards Found' });
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);


 //post
export const addCardToServer = createAsyncThunk(
    "card/addCardToServer",
    async (card, { rejectWithValue }) => {
        try {
            const response = await axios.post(BASE_URL, card, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            return response.data;
        } catch (error) {
            console.log(error)
            return rejectWithValue({ error: error.message });
        }
    }
);
// PATCH 
export const updateCardInServer = createAsyncThunk(
    "card/updateCardInServer",
    async (card, { rejectWithValue }) => {
        try {
            const options = {
                method: 'PATCH',
                body: JSON.stringify(card),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            };
            const response = await fetch(BASE_URL + '/' + card._id, options);
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                return rejectWithValue({ error: 'Card Not Updated' });
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

// DELETE 
export const deleteCardFromServer = createAsyncThunk(
    "card/deleteCardFromServer",
    async (cardId, { rejectWithValue }) => {
        console.log(cardId)
        try {
            const options = {
                method: 'DELETE',
            };
            const response = await fetch(BASE_URL + '/' + cardId._id, options);
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                return rejectWithValue({ error: 'Card Not Deleted' });
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState,
    reducers: {
        removeCardFromList: (state, action) => {
            state.cardsList = state.cardsList.filter(card => card._id !== action.payload._id);
        },
        setSelectedCard: (state, action) => {
            state.selectedCard = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCardsFromServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCardsFromServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.cardsList = action.payload;
            })
            .addCase(getCardsFromServer.rejected, (state, action) => {
                state.error = action.payload.error || 'Failed to fetch cards';
                state.isLoading = false;
                state.cardsList = [];
            })
            .addCase(addCardToServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addCardToServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.cardsList.push(action.payload);
            })
            .addCase(addCardToServer.rejected, (state, action) => {
                state.error = action.payload.error || 'Failed to add card';
                state.isLoading = false;
            })
            .addCase(updateCardInServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCardInServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.cardsList = state.cardsList.map((card) => card._id === action.payload._id ? action.payload : card);
            })
            .addCase(updateCardInServer.rejected, (state, action) => {
                state.error = action.payload.error || 'Failed to update card';
                state.isLoading = false;
            })
            .addCase(deleteCardFromServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCardFromServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
            })
            .addCase(deleteCardFromServer.rejected, (state, action) => {
                state.error = action.payload.error || 'Failed to delete card';
                state.isLoading = false;
            });
    }
});

export const { removeCardFromList, setSelectedCard } = cardsSlice.actions;

export default cardsSlice.reducer;