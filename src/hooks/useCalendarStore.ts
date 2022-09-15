import { useDispatch } from "react-redux";
import { useAppSelector } from "./index";
import {
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
} from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";
import { TEvent } from "../store/calendar/types";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { events, activeEvent } = useAppSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent: TEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent: TEvent) => {
    //TODO: Update event
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }
      const { data } = await calendarApi.post("/events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.id, user }));
    } catch (error: any) {
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const events = convertEventsToDateEvents(data.eventos);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log(error);
    }
  };

  const startDeletingEvent = async () => {
    try {
      //TODO: LLEGAR AL BACKEND
      console.log(activeEvent.id, "IDDDDDDDDDDDD", 0);
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error: any) {
      Swal.fire(
        "Error al eliminar el evento",
        error.response.data.msg,
        "error"
      );
    }
  };

  return {
    // Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //Método
    setActiveEvent,
    startDeletingEvent,
    startSavingEvent,
    startLoadingEvents,
  };
};
