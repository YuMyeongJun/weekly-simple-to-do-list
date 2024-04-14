import { PageLayout, PageSection, PageMeta } from "@components/layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import classNames from "classnames";
import { ICreateTodoVO } from "@models";
import { useTodoStore } from "@store";
import { useNavigate } from "react-router";

export const TodoCreateComponent = () => {
  const navigate = useNavigate();
  const { addTodo } = useTodoStore((state) => state);
  const schema = yup.object({
    title: yup.string().required("제목을 입력해주세요."),
    content: yup.string().required("내용을 입력해주세요."),
  });
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTodoVO>({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (data: ICreateTodoVO) => {
    console.log(data);
    addTodo(data);
    navigate("/");
  };
  return (
    <PageLayout>
      <PageMeta title="To-Do" />
      <form
        role="todo-create-form"
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <PageSection title="제목">
          <input
            role="todo-create-title"
            type="text"
            className={classNames("weekly-input w-full", {
              invalid: errors.title,
            })}
            placeholder="텍스트 입력"
            {...register("title")}
          />
          {errors.title?.message && (
            <span className="text-[var(--weekly-error-color-main)]">
              {errors.title?.message}
            </span>
          )}
        </PageSection>
        <PageSection title="내용">
          <textarea
            role="todo-create-content"
            className={classNames("weekly-textarea w-full", {
              invalid: errors.content,
            })}
            placeholder="텍스트 입력"
            rows={5}
            {...register("content")}
          ></textarea>
          {errors.content?.message && (
            <span className="text-[var(--weekly-error-color-main)]">
              {errors.content?.message}
            </span>
          )}
        </PageSection>
        <PageSection title="Due Date (Option)">
          <input
            role="todo-create-date"
            type="date"
            className={classNames("weekly-input", {
              "before:content-[attr(data-placeholder)] before:w-full before:h-full before:leading-loose before:text-[#9da3ae] before:text-sm":
                !watch("date"),
            })}
            data-placeholder="날짜 입력"
            {...register("date")}
          />
        </PageSection>
        <button role="todo-create-submit" type="submit" className="weekly-btn">
          저장 버튼
        </button>
      </form>
    </PageLayout>
  );
};
