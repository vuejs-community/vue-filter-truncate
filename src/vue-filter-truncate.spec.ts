import ava, { TestInterface } from 'ava';
import { truncate } from './vue-filter-truncate';

const test = ava as TestInterface<{}>;

test('This is sample => This is sample', t => {
  t.is(truncate('This is sample', 20), 'This is sample');
});

test('This is sample => This …', t => {
  t.is(truncate('This is sample', 4), 'This …');
});
