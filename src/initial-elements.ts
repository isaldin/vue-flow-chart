import { MarkerType } from '@vue-flow/core'
import { type SurveyNode, surveyNodes } from '@/nodes'

export const initialNodes = [
  { id: '1',label: 'Node 1', position: { x: 250, y: 0 }, class: 'light' },
  { id: '2', label: 'Node 2', position: { x: 100, y: 100 }, class: 'light' },
  { id: '3', label: 'Node 3', position: { x: 400, y: 100 }, class: 'light' },
  { id: '4', label: 'Node 4', position: { x: 150, y: 200 }, class: 'light' },
  { id: '5', type: 'output', label: 'Node 5', position: { x: 300, y: 300 }, class: 'light' },
]

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', label: 'edge with arrowhead', source: '1', target: '3', markerEnd: MarkerType.ArrowClosed },
  {
    id: 'e4-5',
    type: 'step',
    label: 'step-edge',
    source: '4',
    target: '5',
    style: { stroke: 'orange' },
    labelBgStyle: { fill: 'orange' },
  },
  { id: 'e3-4', type: 'smoothstep', label: 'smoothstep-edge', source: '3', target: '4' },
]

const _nodes = [
  { "id": "13", "label": "question body", "parentId": "0" },
  { "id": "14", "label": "answer body", "parentId": "13" },
  { "id": "15", "label": "answer body2", "parentId": "13" },
  { "id": "16", "label": "question body2", "parentId": "14" },
  { "id": "17", "label": "question body2", "parentId": "15" },
  { "id": "18", "label": "answer body3", "parentId": "17" },
  { "id": "19", "label": "question body2", "parentId": "18" }
]

const _edges = [
  { "id": "e14-13", "source": "13", "target": "14" },
  { "id": "e16-14", "source": "14", "target": "16" },
  { "id": "e15-13", "source": "13", "target": "15" },
  { "id": "e17-15", "source": "15", "target": "17" },
  { "id": "e18-17", "source": "17", "target": "18" },
  { "id": "e19-18", "source": "18", "target": "19" }
]

const nodeType = 'process'
const edgeType = 'animation'
const position = { x: 0, y: 0 }

const collectNodes = (nodes: SurveyNode[]): Array<SurveyNode & {parentId: string}> => {
  const result: Array<SurveyNode & {parentId: string}> = [];

  const traverse = (node: SurveyNode, parentId: string) => {
    result.push({...node, parentId });
    if (node.nodes) {
      node.nodes.forEach(childNode => traverse(childNode, `${node.id}`));
    }
  };

  nodes.forEach(node => traverse(node, '0'));

  return result;
};

const surveyNodesArray = collectNodes(surveyNodes.nodes).map(rawNode => ({
  id: rawNode.id.toString(),
  label: rawNode.body,
  parentId: rawNode.parentId,
  position,
}))

const surveyEdges = surveyNodesArray.map(node => ({
  id: `e${node.parentId}-${node.id}`,
  source: node.parentId,
  target: node.id,
})).filter(edge => edge.source !== '0')

export {surveyNodesArray, surveyEdges}
