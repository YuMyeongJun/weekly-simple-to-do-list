import { Flex, PageLayout, PageSection, PageMeta } from "@components/layout";
import { TodoListWeather } from "./TodoListWeather";
import { TodoList } from "./TodoList";
import { useNavigate } from "react-router";
import { Button } from "@components/data-entry";

export const TodoComponent = () => {
  const navigation = useNavigate();
  return (
    <PageLayout>
      <PageMeta title="THIS WEEK" subTitle="신나는 일주일을 계획합시다!" />
      <PageSection title="이번주 날씨">
        <TodoListWeather />
      </PageSection>
      <PageSection title="이번주 To-Do">
        <Flex gap={10} vertical>
          <Button className="weekly-btn" onClick={() => navigation("/create")}>
            추가버튼
          </Button>
          <TodoList />
        </Flex>
      </PageSection>
    </PageLayout>
  );
};
