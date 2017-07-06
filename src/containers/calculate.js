import Big from 'big.js'

function isNumber (item) {
  return !!item.match(/[0-9]+/)
}

function oprate (output, input, opration) {
  const to = Big(output)
  const from = Big(input)

  if (opration === '+') {
    return to.plus(from).toString()
  }

  if (opration === '-') {
    return to.minus(from).toString()
  }

  if (opration === '*') {
    return to.times(from).toString()
  }

  if (opration === '/') {
    return to.div(from).toString()
  }

  if (opration === '%') {
    return to.mod(from).toString()
  }

  throw Error(`illegal opration : '${opration}'`)
}

export default function calculate (obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      opration: null
    }
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {}
    }

    if (obj.opration) {
      if (obj.next) {
        return {
          next: obj.next + buttonName
        }
      }

      return {
        next: buttonName
      }
    }

    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null
      }
    }

    return {
      next: buttonName,
      total: null
    }
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {}
      }

      return {
        next: obj.next + '.'
      }
    }

    if (obj.opration) {
      return {
        next: '0.'
      }
    }

    if (obj.total) {
      if (obj.total.includes('.')) {
        return {}
      }

      return {
        total: obj.total + '.'
      }
    }

    return {
      total: '0.'
    }
  }

  if (buttonName === '=') {
    if (obj.next && obj.opration) {
      return {
        total: oprate(obj.total, obj.next, obj.opration),
        next: null,
        opration: null
      }
    } else {
      return {}
    }
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return {
        next: (-1 * parseFloat(obj.next)).toString()
      }
    }

    if (obj.total) {
      return {
        total: (-1 * parseFloat(obj.total)).toString
      }
    }

    return {}
  }

  if (obj.opration) {
    return {
      total: oprate(obj.total, obj.next, obj.opration),
      next: null,
      opration: buttonName
    }
  }

  if (!obj.next) {
    return {
      opration: buttonName
    }
  }

  return {
    total: obj.next,
    next: null,
    opration: buttonName
  }
}
