import { Dimensions } from 'react-native';

import { generateRangeDatesFromYearStart } from './generate-range-between-dates';

export const ABBREVIATED_WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export const AVALIABLE_WEEK_DAYS = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

export const SUMMARY_DATES = generateRangeDatesFromYearStart();

const MINIMUM_SUMMARY_DATES_SIZE = 18 * 5;

export const AMOUNT_OF_DAYS_TO_FILL =
  MINIMUM_SUMMARY_DATES_SIZE - SUMMARY_DATES.length;

const WEEK_DAYS = 7;

const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  Dimensions.get('screen').width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5);
