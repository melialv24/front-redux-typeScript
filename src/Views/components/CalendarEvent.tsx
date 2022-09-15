import { TEvent } from "../../store/calendar/types";

export const CalendarEvent = ({ event }: { event: TEvent }) => {
  const { title, user } = event;
  return (
    <div>
      <strong>{title}</strong>
      <span>- {user?.name}</span>
    </div>
  );
};
