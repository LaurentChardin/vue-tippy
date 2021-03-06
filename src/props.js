const booleanProps = {
  a11y: true,
  allowHTML: true,
  animateFill: true,
  arrow: false,
  flip: true,
  flipOnUpdate: false,
  followCursor: false,
  hideOnClick: true,
  ignoreAttributes: false,
  inertia: false,
  interactive: false,
  lazy: true,
  multiple: false,
  showOnInit: false,
  sticky: false,
  touch: true,
  touchHold: false,
}
export default {
  animation: 'shift-away',
  appendTo: () => document.body,
  aria: 'describedby',
  arrowType: 'sharp',
  boundary: 'scrollParent',
  content: '',
  delay: 0,
  distance: 10,
  duration: [325, 275],
  flipBehavior: 'flip',
  interactiveBorder: 2,
  interactiveDebounce: 0,
  maxWidth: 350,
  offset: 0,
  onHidden() {},
  onHide() {},
  onMount() {},
  onShow() {},
  onShown() {},
  placement: 'top',
  popperOptions: {},
  role: 'tooltip',
  size: 'regular',
  target: '',
  theme: 'dark',
  trigger: 'mouseenter focus',
  updateDuration: 0,
  wait: null,
  zIndex: 9999,
  ...booleanProps,
}

export {
  booleanProps,
}