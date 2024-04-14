import { IcClose } from "@assets/icon";
import { Checkbox } from "@components/data-entry";
import { Col, Row } from "@components/layout";
import { dateUtils } from "@modules";
import { useTodoStore } from "@store";
import classNames from "classnames";
import { Children } from "react";

export const TodoListTodo = () => {
  const { todos, deleteTodo, completeTodo } = useTodoStore((state) => state);
  return (
    <div
      className={classNames("hidden p-2", {
        "!block bg-[var(--weekly-secondary-color-light)]": todos.length > 0,
      })}
    >
      {Children.toArray(
        todos?.map((todo, index) => (
          <Row gutter={[8, 0]} align="start">
            <Col span={22}>
              <Checkbox
                color="dark"
                label={todo.title}
                subLabel={dateUtils.convertDateToYYYYMMDDDueDateFormat(
                  todo.date,
                )}
                slotProps={{
                  label: {
                    className: classNames(
                      { "line-through": todo?.complete },
                      {
                        "text-red-500":
                          dateUtils.todayOverDate(todo.date) && !todo?.complete,
                      },
                    ),
                  },
                  subLabel: {
                    className: classNames({
                      "text-red-500":
                        dateUtils.todayOverDate(todo.date) && !todo?.complete,
                    }),
                  },
                }}
                defaultChecked={todo?.complete}
                onChange={() => completeTodo(index)}
              />
            </Col>
            <Col span={2}>
              <div className="pt-1.5">
                <IcClose
                  width={10}
                  height={10}
                  className="weekly-delete-icon cursor-pointer"
                  onClick={() => deleteTodo(index)}
                />
              </div>
            </Col>
          </Row>
        )),
      )}
    </div>
  );
};
