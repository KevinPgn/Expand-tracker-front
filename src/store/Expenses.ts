import {create} from 'zustand';
import tags from '../data/Tags';

type Expense = {
  id: number;
  amount: number;
  tag: string;
  createAt: string;
};

let date = new Date();

type ExpensesState = {
  expenses: Expense[];
  isCreate: boolean;
  tags: typeof tags;
  addExpense: (expense: Expense) => void;
  addTag: (emoji: string, tab: string) => void;
  setCreate: (isCreate: boolean) => void;
};

export const useExpenses = create<ExpensesState>((set) => ({
  expenses: [
    {id: 1, amount: 100, tag: 'Food', createAt: `${date.getHours()}:${date.getMinutes()}h`},
  ],
  isCreate: false,
  tags: tags,
  
  addExpense: (expense) => set((state) => ({expenses: [...state.expenses, {...expense}]})),
  addTag: (emoji: string, tag: string) => set((state) => ({tags: [...state.tags, {id: state.tags.length + 1, emoji: emoji, tag: tag}]})),
  setCreate: (isCreate) => set({isCreate: isCreate}),
}));