<template>
  <diagram :model="model" height="700" />
</template>

<script>
import { Diagram } from "vue-diagrams";

export default {
  components: {
    Diagram,
  },
  data() {
    const diagramModel = new Diagram.Model();

    const nBaseColor = diagramModel.addNode("baseColor", 10, 80, 70, 120);
    const nBaseColorC = nBaseColor.addOutPort("C");
    const nBaseColorR = nBaseColor.addOutPort("R");
    const nBaseColorG = nBaseColor.addOutPort("G");
    const nBaseColorB = nBaseColor.addOutPort("B");

    const nValue1 = diagramModel.addNode("value", 10, 220, 70, 66);
    const nValue1Value = nValue1.addOutPort("value");

    const nMetallic = diagramModel.addNode("metallic", 10, 290, 70, 66);
    const nMetallicValue = nMetallic.addOutPort("value");

    const nRoughness = diagramModel.addNode("roughness", 10, 360, 70, 66);
    const nRoughnessValue = nRoughness.addOutPort("value");

    const nOpacity = diagramModel.addNode("opacity", 10, 430, 70, 66);
    const nOpacityValue = nOpacity.addOutPort("value");

    const nIOR = diagramModel.addNode("IOR", 10, 430, 70, 66);
    const nIORValue = nIOR.addOutPort("value");

    const nMInputTransparent = diagramModel.addNode("M_InputTransparent", 310, 130, 170, 340);
    const nMInputTransparentBaseColor = nMInputTransparent.addInPort("Base color");
    const nMInputTransparentMetallic = nMInputTransparent.addInPort("Metallic");
    const nMInputTransparentSpecular = nMInputTransparent.addInPort("Specular");
    const nMInputTransparentRoughness = nMInputTransparent.addInPort("Roughness");
    const nMInputTransparentAnisotropy = nMInputTransparent.addInPort("Anisotropy");
    const nMInputTransparentEmissiveColor = nMInputTransparent.addInPort("Emissive color");
    const nMInputTransparentOpacity = nMInputTransparent.addInPort("Opacity");
    const nMInputTransparentOpacityMask = nMInputTransparent.addInPort("Opacity mask");
    const nMInputTransparentNormal = nMInputTransparent.addInPort("Normal");
    const nMInputTransparentTangent = nMInputTransparent.addInPort("Tangent");
    const nMInputTransparentWorldPositionOffset = nMInputTransparent.addInPort("World Position Offset");
    const nMInputTransparentSubsurfaceColor = nMInputTransparent.addInPort("Subsurface color");
    const nMInputTransparentAmbiantOcclusion = nMInputTransparent.addInPort("Ambiant Occlusion");
    const nMInputTransparentRefraction = nMInputTransparent.addInPort("Refraction");

    diagramModel.addLink(nBaseColorC, nMInputTransparentBaseColor);
    diagramModel.addLink(nMetallicValue, nMInputTransparentMetallic);
    diagramModel.addLink(nValue1Value, nMInputTransparentSpecular);
    diagramModel.addLink(nRoughnessValue, nMInputTransparentRoughness);
    diagramModel.addLink(nOpacityValue, nMInputTransparentOpacity);
    diagramModel.addLink(nIORValue, nMInputTransparentRefraction);

    return {
      model: diagramModel
    };
  },
};
</script>
