// client function
export function currentTime() {
  const currentTime = new Date();
  const currentTimeInIso = currentTime.toISOString();
  return currentTimeInIso.slice(11, 19);
}

export async function currentTimeWithDelay() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const currentTime = new Date();
  const currentTimeInIso = currentTime.toISOString();
  const currentTimeString = currentTimeInIso.slice(11, 19);
  return currentTimeString + ' A';
}
