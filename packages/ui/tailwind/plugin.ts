import plugin from 'tailwindcss/plugin';

import bg from './components/bg';
import btn from './components/btn';
import input from './components/input';
import pad from './components/pad';

export default plugin(function (plugin) {
  bg(plugin);
  btn(plugin);
  input(plugin);
  pad(plugin);
});