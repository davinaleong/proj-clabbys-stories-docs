export default function getOS(): string {
  const { userAgent, platform } = navigator

  if (/Win/.test(platform)) return "Windows"
  if (/Mac/.test(platform)) return "macOS"
  if (/Linux/.test(platform)) return "Linux"
  if (/Android/.test(userAgent)) return "Android"
  if (/iPhone|iPad|iPod/.test(userAgent)) return "iOS"

  return "Unknown"
}
