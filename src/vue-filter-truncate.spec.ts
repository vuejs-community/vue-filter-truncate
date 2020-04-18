import ava, { TestInterface } from 'ava';
import { truncate } from './vue-filter-truncate';

const test = ava as TestInterface<{}>;

const macro = (t, input: string, length: number, expected: string) => {
  t.is(truncate(input, config), expected);
};

test('This is sample => This is sample', macro, 'This is sample', 20, 'This is sample');

test('This is sample => This …', macro, 'This is sample', 3, 'This …');
