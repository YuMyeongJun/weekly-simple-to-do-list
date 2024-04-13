import { Slider } from "@components/data-display";

export const ListWeather = () => {
  return (
    <Slider index={0} className="overflow-hidden" limit={4} gap={10}>
      <div className="bg-[var(--weekly-secondary-color-light)]">
        <div>8/31(월)</div>
        <div>(비구름)</div>
        <div>27도</div>
      </div>
      <div className="bg-[var(--weekly-secondary-color-light)]">
        <div>8/31(화)</div>
        <div>(비구름)</div>
        <div>27도</div>
      </div>
      <div className="bg-[var(--weekly-secondary-color-light)]">
        <div>8/31(수)</div>
        <div>(비구름)</div>
        <div>27도</div>
      </div>
      <div className="bg-[var(--weekly-secondary-color-light)]">
        <div>8/31(목)</div>
        <div>(비구름)</div>
        <div>27도</div>
      </div>
      <div className="bg-[var(--weekly-secondary-color-light)]">
        <div>8/31(금)</div>
        <div>(비구름)</div>
        <div>27도</div>
      </div>
      <div className="bg-[var(--weekly-secondary-color-light)]">
        <div>8/31(토)</div>
        <div>(비구름)</div>
        <div>27도</div>
      </div>
      <div className="bg-[var(--weekly-secondary-color-light)]">
        <div>8/31(일)</div>
        <div>(비구름)</div>
        <div>27도</div>
      </div>
    </Slider>
  );
};
