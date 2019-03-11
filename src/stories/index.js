import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import DashBoard from '../component/layout/DashBoard';

import PieChartCategory from '../component/PieChartCategory';
import GraphCurve from '../component/GraphCurve';
import PieChartBudget from '../component/PieChartBudget';
import ProgressBarComponent from '../component/ProgressBarComponent';
import TodoList from '../component/TodoList';
import Calendrier from '../component/Calendrier';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('DashBoard', module).add('default', () => <DashBoard/>).add('PieChartCategory', () => <PieChartCategory/>).add('GraphCurve', () => <GraphCurve/>).add('PieChartBudget', () => <PieChartBudget/>).add('ProgressBarComponent', () => <ProgressBarComponent/>).add('Calendrier', () => <Calendrier/>);
storiesOf('PieChartCategory', module).add('default', () => <PieChartCategory/>);
storiesOf('GraphCurve', module).add('default', () => <GraphCurve/>);
storiesOf('PieChartBudget', module).add('default', () => <PieChartBudget/>);
storiesOf('ProgressBarComponent', module).add('default', () => <ProgressBarComponent/>);
storiesOf('Calendrier', module).add('default', () => <Calendrier/>);

