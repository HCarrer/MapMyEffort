export const to_kph = (mps_speed: number) => {
  return (mps_speed * 3.6).toFixed(2)
}

export const to_km = (meters: number) => {
  return (meters / 1000).toFixed(2)
}

export const format_date = (date: string) => {
  const separated_date = date.split(/[-T:Z]+/)
  const year = separated_date[0]
  const month = separated_date[1]
  const day = separated_date[2]
  const hour = separated_date[3]
  const minute = separated_date[4]
  return `${day}/${month}/${year} às ${hour}:${minute}`
}