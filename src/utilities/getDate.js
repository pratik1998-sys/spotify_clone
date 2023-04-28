export const getDate = (date) => {
  const d = new Date(date)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}
