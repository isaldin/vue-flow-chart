<script setup>
import { nextTick, ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { initialEdges, initialNodes, surveyEdges, surveyNodesArray } from '@/initial-elements.ts'
import { useLayout } from '@/useLayout.ts'
import ProcessNode from '@/ProcessNode.vue'

/**
 * useVueFlow provides all event handlers and store properties
 * You can pass the composable an object that has the same properties as the VueFlow component props
 */
const { onPaneReady,  onConnect, addEdges, fitView } = useVueFlow()

const { graph, layout, previousDirection } = useLayout()

// const nodes = ref(surveyNodesArray)
const nodes = ref(surveyNodesArray)

// const edges = ref(surveyEdges)
const edges = ref(surveyEdges)

// our dark mode toggle flag
const dark = ref(false)

/**
 * This is a Vue Flow event-hook which can be listened to from anywhere you call the composable, instead of only on the main component
 * Any event that is available as `@event-name` on the VueFlow component is also available as `onEventName` on the composable and vice versa
 *
 * onPaneReady is called when viewpane & nodes have visible dimensions
 */
onPaneReady(({ fitView }) => {
  fitView()
})

/**
 * onConnect is called when a new connection is created.
 *
 * You can add additional properties to your new edge (like a type or label) or block the creation altogether by not calling `addEdges`
 */
onConnect((connection) => {
  addEdges(connection)
})

async function layoutGraph() {
  await stop()

 // reset(nodes.value)

  nodes.value = layout(nodes.value, edges.value)

  await nextTick(() => {
    fitView()
  })
}

</script>

<template>
  <VueFlow
    :nodes="nodes"
    :edges="edges"
    :class="{ dark }"
    class="basicflow"
    :default-viewport="{ zoom: 1.5 }"
    :min-zoom="0.2"
    :max-zoom="4"
    @nodes-initialized="layoutGraph()"
  >
  </VueFlow>
</template>