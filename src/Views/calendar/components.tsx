import { FC } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
  Navbar,
} from "../components";
import { localizer, getMessagesES } from "../../helpers";
import { TCalendarC } from "./types";

// El evento lo único que pide como obligatorio es el titulo, fecha de inicio y fecha fin

export const CalendarC: FC<TCalendarC> = ({
  data: { events },
  eventStyleGetter,
  onDoubleClick,
  onSelect,
  onViewChanged,
}) => {
  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        //defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <FabAddNew />

      <FabDelete />
      <CalendarModal />
    </>
  );
};
