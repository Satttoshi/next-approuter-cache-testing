export default async function WorldTimeApi({ label }: { label: string }) {
  const worldTime = await fetch(
    'https://timeapi.io/api/Time/current/zone?timeZone=Europe/London',
    { cache: 'no-store' },
  );

  const { dateTime } = await worldTime.json();
  const time = dateTime?.split('T')[1].split('.')[0];

  return (
    <div className="m-8">
      <label>{label}</label>
      <p className="text-3xl">{time}</p>
    </div>
  );
}
