import clsx from 'clsx';

export function stylesProgressBar(completedPercentage: number) {
  return clsx(
    'w-10 h-10  border-2  rounded-lg',
    { 'bg-zinc-900 border-zinc-800': completedPercentage === 0 },
    {
      'bg-violet-900 border-violet-700':
        completedPercentage > 0 && completedPercentage < 20,
    },
    {
      'bg-violet-800 border-violet-600':
        completedPercentage >= 20 && completedPercentage < 40,
    },
    {
      'bg-violet-700 border-violet-500':
        completedPercentage >= 40 && completedPercentage < 60,
    },
    {
      'bg-violet-600 border-violet-400':
        completedPercentage >= 60 && completedPercentage < 80,
    },
    {
      'bg-violet-500 border-violet-300': completedPercentage >= 80,
    },
  );
}
