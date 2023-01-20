import { v4 as uuidV4 } from 'uuid';

import { generateDates } from '../../utils/generate-dates';
import { HabitDay } from '../HabitDay/HabitDay';

export function SumaryTable() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const summaryDates = generateDates();

  const minimumSummaryDatesSize = 18 * 7;
  const amoutOfDaystoFill = minimumSummaryDatesSize - summaryDates.length;

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

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {generateDates().map((date) => {
          return <HabitDay key={date.toString()} />;
        })}

        {amoutOfDaystoFill > 0 &&
          Array.from({ length: amoutOfDaystoFill }).map(() => {
            return (
              <div
                key={uuidV4()}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}
