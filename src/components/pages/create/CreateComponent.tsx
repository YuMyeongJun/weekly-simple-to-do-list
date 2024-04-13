import { PageLayout, PageSection } from "@components/layout";
import PageMeta from "@components/layout/page/PageMeta";
import { useForm } from "react-hook-form";

export const CreateComponent = () => {
  const {} = useForm();
  return (
    <PageLayout>
      <PageMeta title="To-Do" />
      <form className="flex flex-col gap-3">
        <PageSection title="제목">
          <input
            type="text"
            className="weekly-input w-full"
            placeholder="텍스트 입력"
            defaultValue="텍스트 입력"
          />
        </PageSection>
        <PageSection title="내용">
          <textarea
            className="weekly-textarea"
            placeholder="텍스트 입력"
            defaultValue="텍스트 입력"
          ></textarea>
        </PageSection>
        <PageSection title="Due Date (Option)">
          <input
            type="date"
            className="weekly-input w-full"
            placeholder="날짜 입력"
          />
        </PageSection>
        <button type="button" className="weekly-btn">
          123
        </button>
      </form>
    </PageLayout>
  );
};
