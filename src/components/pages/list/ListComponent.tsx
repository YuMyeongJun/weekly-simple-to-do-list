import { Flex, PageLayout, PageSection } from "@components/layout";
import PageMeta from "@components/layout/page/PageMeta";
import { ListWeather } from "./ListWeather";
import { ListTodo } from "./ListTodo";

export const ListComponent = () => {
  return (
    <PageLayout>
      <PageMeta title="THIS WEEK" subTitle="신나는 일주일을 계획합시다!" />
      <PageSection title="이번주 날씨">
        <ListWeather />
      </PageSection>
      <PageSection title="이번주 ToDo">
        <Flex gap={10} vertical>
          <button className="w-full min-h-7 bg-[var(--weekly-secondary-color-light)]">
            추가버튼
          </button>
          <ListTodo />
        </Flex>
      </PageSection>
    </PageLayout>
  );
};
