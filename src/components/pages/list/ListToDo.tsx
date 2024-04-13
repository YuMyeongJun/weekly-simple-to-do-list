import { IcClose } from "@assets/icon";
import { Checkbox } from "@components/data-entry";
import { Col, Row } from "@components/layout";

export const ListToDo = () => {
  return (
    <div className="bg-[var(--weekly-secondary-color-light)] p-2">
      <Row gutter={[8, 0]} align="center">
        <Col span={22}>
          <Checkbox
            color="dark"
            defaultChecked
            label="이번주 투두2"
            slotProps={{
              label: {
                className: "line-through",
              },
            }}
          />
        </Col>
        <Col span={2}>
          <IcClose width={10} height={10} />
        </Col>
      </Row>
      <Row gutter={[8, 0]} align="center">
        <Col span={22}>
          <Checkbox
            color="dark"
            defaultChecked
            label="이번주 투두2"
            subLabel="due date: 2020.09.01"
            slotProps={{
              label: {
                className: "line-through",
              },
            }}
          />
        </Col>
        <Col span={2}>
          <IcClose width={10} height={10} />
        </Col>
      </Row>
      <Row gutter={[8, 0]} align="center">
        <Col span={22}>
          <Checkbox
            color="dark"
            label="이번주 투두2"
            subLabel="due date: 2020.09.01"
            slotProps={{
              label: {
                className: "!text-red-500",
              },
              subLabel: {
                className: "!text-red-500",
              },
            }}
          />
        </Col>
        <Col span={2}>
          <IcClose width={10} height={10} />
        </Col>
      </Row>
    </div>
  );
};
