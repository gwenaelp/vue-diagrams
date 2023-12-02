<template>
  <Diagram :model="model" height="500" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Diagram } from 'vue-diagrams';

const model = ref(new Diagram.Model());

const node1 = model.value.addNode('test2', 300, 200);
const inPort = node1.addInPort('test');

const node2 = model.value.addNode('test', 10, 300, 144, 80);
const node2OutPort = node2.addOutPort('testOut');
node2.addOutPort('testOut2');
node2.color = '#00cc66';

const node3 = model.value.addNode('test3', 10, 100, 72, 100);
const node3OutPort = node3.addOutPort('testOut3');
node3.color = '#cc6600';
node3.deletable = false;

model.value.addLink(node2OutPort, inPort);
model.value.addLink(node3OutPort, inPort);

</script>
