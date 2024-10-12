import { add } from "date-fns";

export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}ч ${remainingMinutes}м`;
};

const formatDateToHoursAndMinutes = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const formatDate = (date: string, minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const forth = hours + ":" + remainingMinutes;
  const back = add(new Date(date), { minutes: minutes });
  return forth + " - " + formatDateToHoursAndMinutes(back);
};
