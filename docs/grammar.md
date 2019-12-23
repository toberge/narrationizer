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
(will keep looking with next word included when undeterminable)

```
[0] singular action
[1] dirverb
[2] direction
[3] object action
[4] object
```

I'm realizing that this grammar might be a tad too simple.

## Parse table

See [LR parsing on Wikipedia](https://en.wikipedia.org/wiki/LR_parser), as that is where I learnt this.  
This grammar has rules that are so simple I saw no need for the LHS columns.

| Current state | Current rule(s)    | singular action | dirverb | direction | object action | object |  eof  |
|---------------|--------------------|-----------------|---------|-----------|---------------|--------|-------|
|      0        |  com -> * any eof  |        1        |    2    |           |       3       |        |       |
|      1        |  com -> any * eof  |                 |         |           |               |        | done  |
|      2        |  dverb * dir eof   |                 |         |     1     |               |        |       |
|      3        | obj act * obj eof  |                 |         |           |               |    1   |       |
