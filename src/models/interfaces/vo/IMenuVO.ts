import React from 'react';

export interface IMenuVO {
  key: string;
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  navigateUrl: string;
}
