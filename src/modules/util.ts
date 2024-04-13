type ThrottleFunction = (...args: any[]) => void;
export const util = {
  throttle: (func: ThrottleFunction, ms: number): ThrottleFunction => {
    let throttled = false;

    return (...args: any[]) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  },
} as const;
