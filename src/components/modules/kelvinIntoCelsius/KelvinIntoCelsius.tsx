
// Types
type KelvinIntoCelsiusProps = {
  kelvin: number
}

export default function KelvinIntoCelsius({kelvin}: KelvinIntoCelsiusProps) {
  return Math.round((kelvin - 273.15) * 100) / 100
}
