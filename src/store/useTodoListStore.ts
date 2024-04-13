import { ITodoVO } from "@models";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ITodoStore extends ITodoVO {}
export interface ITodoListStore {
  todos: ITodoStore[];
  addTodo: (todo: ITodoStore) => void;
  deleteTodo: (index: number) => void;
  completeTodo: (index: number) => void;
}

export const useTodoStore = create(
  persist<ITodoListStore>(
    (set) => ({
      todos: [],
      addTodo: (todo) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              ...todo,
            },
          ],
        })),
      deleteTodo: (index) =>
        set((state) => ({
          todos: state.todos.filter((_, _index) => _index !== index),
        })),
      completeTodo: (index) =>
        set((state) => ({
          todos: state.todos.map((todo, _index) => {
            if (_index === index) {
              return {
                ...todo,
                complete: !todo.complete,
              };
            }

            return todo;
          }),
        })),
    }),
    { name: "todo-list", storage: createJSONStorage(() => sessionStorage) },
  ),
);

export const useTodoStore2 = create<ITodoListStore>((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          ...todo,
        },
      ],
    })),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, _index) => _index !== index),
    })),
  completeTodo: (index) =>
    set((state) => ({
      todos: state.todos.map((todo, _index) => {
        if (_index === index) {
          return {
            ...todo,
            complete: true,
          };
        }

        return todo;
      }),
    })),
}));
