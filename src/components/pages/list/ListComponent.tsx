import { Carousel } from "@components/data-display";
import { PageLayout, PageSection } from "@components/layout";
import PageMeta from "@components/layout/page/PageMeta";

export const ListComponent = () => {
  return (
    <PageLayout>
      <PageMeta title="THIS WEEK" subTitle="신나는 일주일을 계획합시다!" />
      <PageSection title="이번주 날씨">
        <Carousel>
          >
        </Carousel>
      </PageSection>
    </PageLayout>
  );
};
