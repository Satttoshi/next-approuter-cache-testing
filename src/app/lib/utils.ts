export function currentTimeWithoutDateInIso() {
  const currentTime = new Date();
  const currentTimeInIso = currentTime.toISOString();
  return currentTimeInIso.slice(11, 19);
}

export async function currentTimeWithoutDateInIsoWithDelay() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return currentTimeWithoutDateInIso() + ' A';
}
