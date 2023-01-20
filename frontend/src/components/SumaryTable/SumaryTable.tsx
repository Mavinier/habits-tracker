import { v4 as uuidV4 } from 'uuid';

export function SumaryTable() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay) => {
          return (
            <div
              key={`${weekDay}-${uuidV4()}`}
              className="tezt-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>
    </div>
  );
}
