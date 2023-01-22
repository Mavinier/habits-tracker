import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import clsx from 'clsx';
import dayjs from 'dayjs';

import { DAY_SIZE } from '../../utils/consts';
import { generateProgressPercentage } from '../../utils/generate-progress-percentage';

interface HabitDayProps extends TouchableOpacityProps {
  amountOfHabits?: number;
  amountCompleted?: number;
  date: Date;
}

export function HabitDay({
  amountOfHabits = 0,
  amountCompleted = 0,
  date,
  ...rest
}: HabitDayProps) {
  const amoutAcomplishedPercentage =
    amountOfHabits > 0
      ? generateProgressPercentage(amountCompleted, amountOfHabits)
      : 0;

  const today = dayjs().startOf('day').toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return (
    <TouchableOpacity
      className={clsx('rounded-xl border-2 m-1', {
        'bg-zinc-900 border-zinc-800': amoutAcomplishedPercentage === 0,
        'bg-violet-900 border-violet-700-800':
          amoutAcomplishedPercentage > 0 && amoutAcomplishedPercentage < 20,
        'bg-violet-800 border-violet-600':
          amoutAcomplishedPercentage > 20 && amoutAcomplishedPercentage < 40,
        'bg-violet-700 border-violet-500':
          amoutAcomplishedPercentage > 40 && amoutAcomplishedPercentage < 60,
        'bg-violet-600 border-violet-500':
          amoutAcomplishedPercentage > 60 && amoutAcomplishedPercentage < 80,
        'bg-violet-500 border-violet-400': amoutAcomplishedPercentage > 80,
        'border-white border-2': isCurrentDay,
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
  );
}
