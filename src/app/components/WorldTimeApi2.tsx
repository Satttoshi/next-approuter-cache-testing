export default async function WorldTimeApi({ label }: { label: string }) {
  const worldTime = await fetch(
    'https://worldtimeapi.org/api/timezone/Europe/London',
    { next: { tags: ['test2'] } },
  );

  const { datetime } = await worldTime.json();
  const time = datetime?.split('T')[1].split('.')[0];

  return (
    <div className="m-8">
      <label>{label}</label>
      <p className="text-3xl">{time}</p>
    </div>
  );
}
