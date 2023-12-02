import playground from './playground';
import shader from './shader';
import infrastructureSchema from './infrastructureSchema';
import editableTitles from './editableTitles';
import menu from './menu';
import images from './images';
import customPortPosition from './customPortPosition';
import resizeNodes from './resize';
import layouts from './layouts';
import thumbnail from './thumbnail';
import gridSnap from './gridSnap';
import customNodes from './customNodes';

import dropToCreateNodes from './dropToCreateNodes';
import editModes from './editModes';
import serializationDeserialization from './serializationDeserialization';

type ExampleImports = {
  [key: string]: any;
}


export const exampleImports: Record<string, any> = {
  playground,
  shader,
  infrastructureSchema,
  editableTitles,
  menu,
  images,
  customPortPosition,
  resizeNodes,
  layouts,
  thumbnail,
  gridSnap,
  customNodes,
  dropToCreateNodes,
  editModes,
  serializationDeserialization,
};
