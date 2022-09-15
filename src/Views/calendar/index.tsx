import React from "react";
import { CalendarC } from "./components";
import { SyntheticEvent, useState } from "react";
import {} from "../../hooks";
import { useEffect } from "react";
import { useAppSelector, useUiStore, useCalendarStore } from "../../hooks";
import { TEvent } from "../../store/calendar/types";

export const CalendarV = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { toggleDateModal } = useUiStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const { events, setActiveEvent, hasEventSelected, startLoadingEvents } =
    useCalendarStore();

  useEffect(() => {
    startLoadingEvents();
  }, []);

  const eventStyleGetter = (event: TEvent) => {
    const isMyEvent = user.uid === event?.user?.uid;

    const style = {
      backgroundColor: isMyEvent ? "#fafa" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return { style };
  };

  const onDoubleClick = (event: any) => {
    toggleDateModal();
  };

  const onSelect = (event: any) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event: any) => {
    localStorage.setItem("lastView", event);
  };
  return (
    <CalendarC
      data={{ events }}
      eventStyleGetter={eventStyleGetter}
      onDoubleClick={onDoubleClick}
      onSelect={onSelect}
      onViewChanged={onViewChanged}
    />
  );
};
