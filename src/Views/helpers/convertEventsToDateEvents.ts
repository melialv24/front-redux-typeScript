import { parseISO } from "date-fns";
import { TEvent } from "../../store/calendar/types";

export const convertEventsToDateEvents = (events: TEvent) => {
  return events.map((event) => {
    event.start = parseISO(event.start);
    event.end = parseISO(event.end);
    return event;
  });
};
