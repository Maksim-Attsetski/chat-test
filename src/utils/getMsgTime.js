export const getMsgTime = time => {
  const date = new Date(time);
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return hours + ':' + minutes;
};
