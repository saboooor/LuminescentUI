import plugin from 'tailwindcss/plugin';
import { readdirSync } from 'fs';

export default plugin(async function (plugin) {
  const components = readdirSync(__dirname + '/components').map((file: string) => file.split('.')[0]) as string[];
  components.forEach(async (component) => (await import(`./components/${component}`)).default(plugin));
});