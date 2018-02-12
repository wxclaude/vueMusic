export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join('')
}

export function hasClass (el, className) {
  return new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className)
}
