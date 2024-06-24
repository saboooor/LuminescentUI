import plugin from 'tailwindcss/plugin';

import lum from './components/lum';
import btn from './components/btn';

export default plugin(function (plugin) {
  lum(plugin);
  btn(plugin);
});