export type TPayload = {
  isLoadingEvents: boolean;
  events: TEvent;
  activeEvent: null;
};

export type TEvents = {
  id: string;
  title: string;
  notes: string;
  start: Date;
  end: Date;
  user: {
    uid: string;
    name: string;
  };
}[];

export type TEvent = {
  id?: string;
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor?: string;
  user?: {
    uid: string;
    name: string;
  };
};
