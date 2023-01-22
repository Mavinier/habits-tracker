import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { HabitDay } from '../components/HabitDay/HabitDay';
import { Header } from '../components/Header/Header';
import { Loading } from '../components/Loading/Loading';
import { api } from '../lib/axios';
import {
  ABBREVIATED_WEEK_DAYS,
  AMOUNT_OF_DAYS_TO_FILL,
  DAY_SIZE,
  SUMMARY_DATES,
} from '../utils/consts';

interface SummaryProps {
  id: string;
  date: string;
  amount: number;
  completed: number;
}

export function Home() {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryProps[] | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get('/summary');
      setSummary(response.data);
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {ABBREVIATED_WEEK_DAYS.map((weekDay) => (
          <Text
            key={uuidv4()}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {summary && (
          <View className="flex-row flex-wrap">
            {SUMMARY_DATES.map((date) => {
              const dayWithHabits = summary.find((day) => {
                return dayjs(date).isSame(day.date);
              });
              return (
                <HabitDay
                  key={date.toISOString()}
                  date={date}
                  amountOfHabits={dayWithHabits?.amount}
                  amountCompleted={dayWithHabits?.completed}
                  onPress={() =>
                    navigate('habit', { date: date.toISOString() })
                  }
                />
              );
            })}

            {AMOUNT_OF_DAYS_TO_FILL > 0 &&
              Array.from({ length: AMOUNT_OF_DAYS_TO_FILL }).map((_, i) => (
                <View
                  key={uuidv4()}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
