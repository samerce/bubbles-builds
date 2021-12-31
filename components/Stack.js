
export const HSnapStack = (p) => (
  <div {...p} className={'snap-x snap-mandatory flex overflow-x-scroll overflow-y-hidden ' + p.className}>
  </div>
)

export const HSnapItem = (p) => (
  <div {...p} className={'snap-start snap-always inline-flex ' + p.className}>
  </div>
)

export const VSnapStack = (p) => (
  <div {...p} className={'snap-y snap-mandatory overflow-x-visible overflow-y-scroll ' + p.className}>
  </div>
)

export const VSnapItem = (p) => (
  <div {...p} className={'snap-start snap-always ' + p.className}>
  </div>
)