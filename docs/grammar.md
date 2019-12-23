# Command grammar

1. `<command> ::= <dirverb> <direction>`
1. `<direction> ::= up|down|left|right|etc. `
1. `<command> ::= <dirverb> to <destination>`
1. `<destination> ::= (uh, same as object?)`
1. `<dirverb> ::= walk|run|go|etc. `

1. `<command> ::= <object action> <object>`
1. `<object action> ::= inspect|look at|grab|take|throw|etc.`
1. `<object> ::= door|key|note|chair|etc.`
    (check applicable action)

1. `<command> ::= <singular action>`
1. `<singular action> ::= leave|sleep|wait|fight|flee|etc. `

## LR parse table IDs

Index in parse table for lookaheads:

Undetermined is 0. Keep looking. (or just keep looking when undetermined?)
1. singular action
1. dirverb
1. direction
1. object action
1. object

I'm realizing that this grammar might be a tad too simple.

## Parse table

| Current state | Current rule(s)    | singular action | dirverb | direction | object action | object | eof | command |
|---------------|--------------------|-----------------|---------|-----------|---------------|--------|-----|---------|
|      0        | <com> -> * any eof |        1        |    2    |           |       3       |        |     |         |
|      1        | <com> -> any * eof |                 |         |           |               |        | yes |         |
|      2        |  dverb * dir eof   |                 |         |     1     |               |        |     |         |
|      3        | obj act * obj eof  |                 |         |           |               |    1   |     |         |
