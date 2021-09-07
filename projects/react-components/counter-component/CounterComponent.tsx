import './CounterComponent.scss';

import * as React from 'react';

import { FunctionComponent } from 'react';

export interface IMyComponentProps {
  counter: number;
  onClick?: () => void;
}

export const CounterComponent: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {



  const {counter: propsCounter, onClick} = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <div className={`my-graph-component`}>
    <div className={'comp-props'}>Tasks counter: {propsCounter}
      <span onClick={handleClick}
            className={'increase-button'}>Remove last one</span>
    </div>
  </div>;
};
