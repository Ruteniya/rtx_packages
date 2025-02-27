export type Answer = {
    id: string
    userId: string
    groupId: string
    nodeId: string
    answerValue: string
    userComment: string
    createdAt: Date
    accepted: boolean
    correct: boolean
}