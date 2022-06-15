import moment from "moment";
const transformDate = (date: string): string => {
  const parsedDate = moment(date);
  return (
    parsedDate.format("YYYY MMM DD") +
    " at " +
    parsedDate.format("hh:mma") +
    " (UTC)"
  );
};
export default transformDate;
