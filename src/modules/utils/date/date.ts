export const dateUtils = {
  thisWeekList: () => {
    const currentDay = new Date();
    const theYear = currentDay.getFullYear();
    const theMonth = currentDay.getMonth();
    const theDate = currentDay.getDate();
    const theDayOfWeek = currentDay.getDay();

    const thisWeek = [];

    for (let i = 1; i < 8; i++) {
      const resultDay = new Date(
        theYear,
        theMonth,
        theDate + (i - theDayOfWeek),
      );

      thisWeek[i] = resultDay;
    }
    return thisWeek;
  },
  convertDateToBanksaladDateWeekFormat: (date: Date) => {
    // 한글을 사용하는 요일을 위해서는 추가적으로 배열을 만들어서 사용
    const day = ["일", "월", "화", "수", "목", "금", "토"];
    const _date = new Date(date);

    return `${_date.getMonth() + 1}/${_date.getDate()}(${day[_date.getDay()]})`;
  },
  convertDateToYYYYMMDDFormat: (date?: Date) => {
    if (!date) return "";
    const _date = new Date(date);
    const year = _date.getFullYear();
    const month = ("0" + (_date.getMonth() + 1)).slice(-2);
    const day = ("0" + _date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  },
  convertDateToYYYYMMDDDueDateFormat: (date?: Date) => {
    if (!date) return "";
    const _date = new Date(date);
    const year = _date.getFullYear();
    const month = ("0" + (_date.getMonth() + 1)).slice(-2);
    const day = ("0" + _date.getDate()).slice(-2);
    return `due date: ${year}.${month}.${day}`;
  },
  todayOverDate: (date?: Date) => {
    if (!date) return false;
    const nowDate = dateUtils.convertDateToYYYYMMDDFormat(new Date());
    const _date = new Date(date);
    return new Date(nowDate) >= _date;
  },
};
