import {
  differenceInDays,
  format,
  formatDistanceStrict,
  isThisYear
} from 'date-fns'

export function formatDate(date: Date, now: Date) {
  if (differenceInDays(now.getUTCDate(), date) >= 1) {
    if (isThisYear(date)) {
      return format(date, 'd MMM')
    } else {
      return format(date, 'd MMM yyyy')
    }
  } else {
    return formatDistance(date, now)
  }
}

function formatDistance(date: Date, now: Date) {
  const dateFormat = formatDistanceStrict(date, now).split(' ')
  dateFormat[1] = dateFormat[1].charAt(0)

  return dateFormat.join('')
}
