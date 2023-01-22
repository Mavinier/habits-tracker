import { generateDates } from './generate-dates';

export const ABBREVIATED_WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export const WEEKDAYS = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const SUMMARY_DATES = generateDates();

const MINIMUM_SUMMARY_DATES_SIZE = 18 * 7;
export const AMOUNT_OF_DAYS_TO_FILL =
  MINIMUM_SUMMARY_DATES_SIZE - SUMMARY_DATES.length;
