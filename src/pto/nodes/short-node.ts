import { Node } from './node'

export type ShortNode = Omit<Node, 'adminDescription' | 'correctAnswer'>
