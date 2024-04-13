export interface ICreateTodoVO {
  /**
   * 제목
   * @type string
   */
  title: string;
  /**
   * 내용
   * @type string
   */
  content: string;
  /**
   * Due Date
   * @type Date
   */
  date?: Date;
}
