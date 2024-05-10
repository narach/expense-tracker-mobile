import moment from 'moment';

const DEFAULT_DATE_FORMAT = 'DD-MM-YYYY';

export function formatDate(selDate: Date) {
  return moment(selDate).format(DEFAULT_DATE_FORMAT);
}

export function formatUnixTime(unixTime: number) {
  return moment(new Date(unixTime)).format(DEFAULT_DATE_FORMAT);
}
