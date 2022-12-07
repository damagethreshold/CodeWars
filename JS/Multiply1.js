function multiply(a, b){
    if (undefined == a || undefined == b
      || isNaN(a) || isNaN(b))
      throw new Error('Both arguments should be numbers')
    return a * b
  }