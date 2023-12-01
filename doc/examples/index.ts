import { PlaygroundApp } from './playground';
import { ShaderApp } from './shader';
import { InfrastructureSchemaApp } from './infrastructureSchema';
import { App as EditableTitlesApp } from './editableTitles';
import { App as MenuApp } from './menu';

export const exampleImports = {
  playground: {
    'App.vue': PlaygroundApp,
  },
  shader: {
    'App.vue': ShaderApp,
  },
  infrastructureSchema: {
    'App.vue': InfrastructureSchemaApp,
  },
  editableTitles: {
    'App.vue': EditableTitlesApp,
  },
  Menu: {
    'App.vue': MenuApp,
  },
};
