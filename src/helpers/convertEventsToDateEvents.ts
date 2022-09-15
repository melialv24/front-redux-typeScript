import { parseISO } from "date-fns";
import { TEvents } from "../store/calendar/types";

export const convertEventsToDateEvents = (events: TEvents) => {
  return events.map((event) => {
    event.start = parseISO(String(event.start));
    event.end = parseISO(String(event.end));
    return event;
  });
};
