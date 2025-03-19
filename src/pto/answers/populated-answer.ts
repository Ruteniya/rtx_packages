import { Group } from '../groups'
import { Node } from '../nodes'
import { Answer } from './answer'

export type PopulatedAnswer = Answer & {
  node: Node
  group: Group
}
