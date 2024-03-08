export default function getSystem() {
  const ua = navigator.userAgent.toLowerCase();
  const isMacOS = /macintosh|mac os x/i.test(ua);
  const isWindows = /win32|wow32/i.test(ua);
  return {
    isMacOS,
    isWindows,
  }
}
