import { createSlice } from "@reduxjs/toolkit";

const clockSlice = new createSlice({
    name: "clock",
    initialState: {
        playerWhite: {
            active: false,
            time: 0
        },
        playerBlack: {
            actions: false,
            time: 0
        }
    },
    reducers: {
        setTime: (state, actions) => {
            state.playerWhite.time = actions.payload.playerWhite;
            state.playerBlack.time = actions.payload.playerBlack;
        },
        startTimer: (state, actions) => {
            if (state.playerBlack.active == false && state.playerWhite.active == false) {
                state.playerWhite.active = true;
            }
            else if (state.playerBlack.active == true) {
                state.playerBlack.active == false;
                state.playerWhite.active == true;
            }
            else if (state.playerWhite.active == true) {
                state.playerBlack.active == true;
                state.playerWhite.active == false;
            }
        }
    }
})

export const { setTime, setTimer } = clockSlice.actions;

export default clockSlice.reducers;