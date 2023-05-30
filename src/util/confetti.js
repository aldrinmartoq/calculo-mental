import confetti from 'canvas-confetti'

let exploding = false
const defaults = {
  particleCount: 500,
  spread: 80,
  angle: 90
}

const fire = (particle_ratio, opts) => {
  confetti(
    Object.assign({}, defaults, opts, { particleCount: Math.floor(defaults.particleCount * particle_ratio) })
  )
}

export default {
  explode() {
    if (exploding) return

    exploding = true
    setTimeout(() => {
      fire(0.25, {
        spread: 26,
        startVelocity: 55
      })
      fire(0.2, {
        spread: 60,
      })
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      })
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      })
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      })
      setTimeout(() => {
        exploding = false
      }, 300)
    }, 300)
  }
}
