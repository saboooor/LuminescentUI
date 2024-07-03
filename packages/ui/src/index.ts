import plugin from 'tailwindcss/plugin';
import { readdirSync } from 'fs';

export default plugin(function (plugin) {
  const components = readdirSync(__dirname + '/components').map((file: string) => file.split('.')[0]) as string[];
  components.forEach((component) => {
    import(`./components/${component}`).then((module) => module.default(plugin));
  });
});