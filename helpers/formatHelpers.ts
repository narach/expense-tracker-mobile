import moment from 'moment';

const DEFAULT_DATE_FORMAT = 'DD-MM-YYYY';

export function formatDate(selDate: Date) {
  return moment(selDate).format(DEFAULT_DATE_FORMAT);
}
