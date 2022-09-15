import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { TEvent, TEvents, TPayload } from "./types";

const tempEvents = {
  _id: new Date().getTime(),
  title: "Cumple de melissa",
  notes: "HAY QUE COMPRAR ALGO",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafa",
  user: {
    uid: "123123",
    name: "Melissa",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoadingEvents: true,
    events: [
      //tempEvents
      {
        id: "",
        title: "",
        notes: "",
        start: new Date(),
        end: addHours(new Date(), 2),
        user: {
          uid: "",
          name: "",
        },
      },
    ],
    activeEvent: {
      id: "",
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      user: {
        uid: "",
        name: "",
      },
    },
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = {
        id: "",
        title: "",
        notes: "",
        start: new Date(),
        end: addHours(new Date(), 2),
        user: {
          uid: "",
          name: "",
        },
      };
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent?.id
        );
        state.activeEvent = {
          id: "",
          title: "",
          notes: "",
          start: new Date(),
          end: addHours(new Date(), 2),
          user: {
            uid: "",
            name: "",
          },
        };
      }
    },
    onLoadEvents: (state, { payload }: PayloadAction<TEvents>) => {
      state.events = payload;
      state.isLoadingEvents = false;
      payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onLoadEvents,
  onUpdateEvent,
  onDeleteEvent,
} = calendarSlice.actions;
