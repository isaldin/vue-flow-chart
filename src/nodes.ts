export type SurveyNode = {
  id: number,
  label: string,
  body: string,
  nodeType: string,
  isEndNode: boolean | null,
  sendDelay: number | null,
  nodes?: SurveyNode[]
}

export const surveyNodes: { nodes: SurveyNode[] } = {
  "nodes": [
    {
      "id": 13,
      "label": "rootNode",
      "body": "question body",
      "nodeType": "q",
      "isEndNode": null,
      "sendDelay": null,
      "nodes": [
        {
          "id": 14,
          "label": "answer",
          "body": "answer body",
          "nodeType": "a",
          "isEndNode": true,
          "sendDelay": null,
          "nodes": [
            {
              "id": 16,
              "label": "rootNode2",
              "body": "question body2",
              "nodeType": "q",
              "isEndNode": null,
              "sendDelay": null
            }
          ]
        },
        {
          "id": 15,
          "label": "answer2",
          "body": "answer body2",
          "nodeType": "a",
          "isEndNode": true,
          "sendDelay": null,
          "nodes": [
            {
              "id": 17,
              "label": "rootNode2",
              "body": "question body3",
              "nodeType": "q",
              "isEndNode": null,
              "sendDelay": null,
              "nodes": [
                {
                  "id": 18,
                  "label": "answer3",
                  "body": "answer body3",
                  "nodeType": "a",
                  "isEndNode": true,
                  "sendDelay": null,
                  "nodes": [
                    {
                      "id": 19,
                      "label": "rootNode2",
                      "body": "question body4",
                      "nodeType": "q",
                      "isEndNode": null,
                      "sendDelay": null
                    }
                  ]
                },
                {
                  "id": 20,
                  "label": "answer4",
                  "body": "answer body4",
                  "nodeType": "a",
                  "isEndNode": true,
                  "sendDelay": null,
                  "nodes": [
                    {
                      "id": 21,
                      "label": "rootNode2",
                      "body": "question body5",
                      "nodeType": "q",
                      "isEndNode": null,
                      "sendDelay": null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}