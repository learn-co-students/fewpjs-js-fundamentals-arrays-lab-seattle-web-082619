'use strict';

const append = ["Milo", "Otis", "Garfield"]
const prepend = append.slice(0)
const removeLast = append.slice(0)
const removeFirst = append.slice(0)
const odie = "Odie"

append.push(odie)
prepend.unshift(odie)
removeLast.pop()
removeFirst.shift()