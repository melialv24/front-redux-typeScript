export type TStyle = {
  backgroundColor: string;
  borderRadius: string;
  opacity: number;
  color: string;
};

export type TCalendarC = {
  data: {
    events: TDataForm;
  };
  eventStyleGetter: (event: TEvent) => TReturn<TStyle>;
  onDoubleClick: (e: FormEvent<HTMLFormElement>) => void;
  onSelect: (e: any) => void;
  onViewChanged: (e: any) => void;
};
