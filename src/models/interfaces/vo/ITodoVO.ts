export interface ITodoVO {
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
    /**
     * 해결 여부
     */
    complete?: boolean;
  }
  