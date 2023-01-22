import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import { v4 as uuidV4 } from 'uuid';

import { api } from '../../lib/axios';
import {
  ABBREVIATED_WEEKDAYS,
  AMOUNT_OF_DAYS_TO_FILL,
} from '../../utils/consts';
import { generateDates } from '../../utils/generate-dates';
import { HabitDay } from '../HabitDay/HabitDay';

interface Summary {
  id: string;
  date: string;
  amount: number;
  completed: number;
}

export function SumaryTable() {
  const [summary, setSummary] = useState<Summary[]>([]);

  useEffect(() => {
    api.get('summary').then((response) => setSummary(response.data));
  }, []);

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-2">
        {ABBREVIATED_WEEKDAYS.map((weekDay) => {
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

      <div className="grid grid-rows-7 grid-flow-col gap-2">
        {generateDates().map((date) => {
          const dayInSummary = summary.find((day) => {
            return dayjs(date).isSame(day.date, 'day');
          });

          return (
            <HabitDay
              key={date.toString()}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
              date={date}
            />
          );
        })}

        {AMOUNT_OF_DAYS_TO_FILL > 0 &&
          Array.from({ length: AMOUNT_OF_DAYS_TO_FILL }).map(() => {
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
