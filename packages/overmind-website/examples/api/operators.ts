export default (ts) =>
  ts
    ? [
        {
          code: `
import { Operator, action } from 'overmind'

export const changeFoo: Action = fromOperator(
  action(({ state }) => {
    state.foo = 'bar'
  })
)
`,
        },
      ]
    : [
        {
          code: `
import { action } from 'overmind'

export const changeFoo = action(({ state }) => {
  state.foo = 'bar'
})
`,
        },
      ]
