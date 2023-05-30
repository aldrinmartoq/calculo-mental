<template lang="pug">
.container-fluid.d-flex.flex-column.vh-100
  .navbar.navbar-expand-lg.bg-body-tertiary
    .container-fluid
      button.btn.btn-outline-success(@click="limpiar_puntaje") Ptos 
        template(v-for="(key, value) in puntaje") {{ textos[value] }}  {{ puntaje[value] + '  '}}
      a.navbar-brand 🤔 Cálculo Mental 😬
  .d-flex.flex-column.flex-grow-1
    .d-flex.justify-content-center.p-2
      h2(@click="pregunta") ¿Cuánto es {{ a }} {{ oper }} {{ b }}?
    .d-flex.justify-content-center
      button.btn(:class="class_boton_respuesta(respuesta)" v-for="respuesta in respuestas" @click="validar(respuesta)" :disabled="correcto") {{ respuesta }}
    .d-flex.justify-content-center.p-2.confetti-anim
      .d-flex.flex-column(v-if="correcto")
        h2 🎉 ¡Correcto, es {{ r }} ! 🎉
          button.btn.btn-success.mx-2(:style="correcto ? 'opacity: 100' : 'opacity: 0'" @click="próxima_suma" :disabled="!correcto") Siguiente »
        small.d-flex.justify-content-center {{ frase }}
      h2(v-else-if="incorrecto") intenta de nuevo… 🧐
      h2(v-else) …
    .d-flex.flex-grow-1.align-items-center.flex-column.justify-content-center
      template(v-if="mostrar_ayuda")
        .d-flex
          .rect
          .rect(v-for="i in [...Array(b - a).keys()]" v-if="b > a")
          .rect(:class="class_anim(i)" v-for="i in [...Array(a).keys()]")
            img(:src="asset_url(imagenes[0])")
        .d-flex
          .caja
          .caja(v-for="i in [...Array(b - a).keys()]" v-if="b > a")
          .caja(:class="class_anim(i)" v-for="i in [...Array(a).keys()]")
            p(:class="{ ocultar: !mostrar_super_ayuda}") {{ i + 1 }}
        .d-flex
          .rect.align-items-end(:class="class_anim(a + 1)"): h1 {{ oper }}
          .rect(v-for="i in [...Array(a - b).keys()]" v-if="a > b")
          .rect(:class="class_anim(i + a + 2)" v-for="i in [...Array(b).keys()]")
            img(:src="asset_url(imagenes[1])")
        .d-flex
          .caja
          .rect(v-for="i in [...Array(a - b).keys()]" v-if="a > b")
          .caja(:class="class_anim(i)" v-for="i in [...Array(b).keys()]")
            p(:class="{ ocultar: !mostrar_super_ayuda}" v-if="oper == '+'") {{ i + a + 1 }}
            p(:class="{ ocultar: !mostrar_super_ayuda}" v-if="oper == '-'") {{ a - i - 1 }}
        .d-flex
          .caja
          button.btn.btn-light(@click="mostrar_super_ayuda = true" v-if="!mostrar_super_ayuda") Más ayuda
      button.btn.btn-light(v-else @click="mostrar_ayuda = true") Ayúdame
</template>

<script>
import speech from '../util/speech'
import confetti from '../util/confetti'

const isObject = (x) => typeof x === 'object' && x !== null
const isNumber = (x) => typeof x === 'number'

let opers = ['+', '-']
let images = ['dot', 'yakko', 'wakko', 'brain', 'pinky']
let frases = ['¿por qué no aparece pinky y cerebro al mismo tiempo?', 'quiero sopaipillas', 'ojala tomar la leche pronto', 'espero no cansarme pronto', 'esto es muy entretenido', 'estoy muy contento', '¿a que jugaremos después?', 'jugar ro-blox sería mas entretenido', 'ya me dio hambre', 'vamos', 'esto es muy fácil', 'que las sumas las haga mi mascota', 'quiero mucho a mi mascota', 'mis papás son los mejores']

window.opers = opers

export default {
  data() {
    return {
      a: null,
      b: null,
      r: null,
      mc: null, // marcado correcto
      mi: null, // marcado incorreto
      respuestas: [],
      imagenes: [],
      mostrar_ayuda: false,
      mostrar_super_ayuda: false,
      super_ayuda: false,
      correcto: false,
      incorrecto: false,
      rotando: false,
      animado: false,
      oper: '+',
      puntaje: {},
      frase: null,
      textos: {
        '+': 'sumas',
        '-': 'restas'
      }
    }
  },
  mounted() {
    this.próxima_suma()
    try {
      this.puntaje = JSON.parse(localStorage.getItem('puntaje'))
    } catch(error) {
    }
    isObject(this.puntaje) || (this.puntaje = {})
    isNumber(this.puntaje['+']) || (this.puntaje['+'] = 0)
    isNumber(this.puntaje['-']) || (this.puntaje['-'] = 0)
  },
  methods: {
    class_boton_respuesta(respuesta) {
      if (respuesta == this.mc) {
        return 'btn-success'
      } else if (respuesta == this.mi) {
        return 'btn-danger'
      } else {
        return 'btn-light btn-outline-secondary'
      }
    },
    class_anim(i) {
      return `anim anim_${i}`
    },
    limpiar_puntaje() {
      Object.keys(this.puntaje).forEach(key => {
        this.puntaje[key] = 0
      })
    },
    asset_url(asset) {
      return new URL(`../assets/${asset}.png`, import.meta.url).href
    },
    rotar_transition_left(i) {
      if (this.rotando) {
        let cal = (3 + 1) * (this.b + 1)
        return `transition: 2s ease-in-out; --from-translate: ${cal}em; --to-translate: 0; }`
      }
      return null
    },
    rotar_transition_right(i) {
      if (this.rotando) {
        let cal = (3 + 1) * (this.a + 1)
        return `transition: 2s ease-in-out; --from-translate: -${cal}em; --to-translate: 0; }`
      }
      return null
    },
    próxima_suma() {
      this.oper = opers.sort(() => 0.5 - Math.random())[0]
      if (this.oper == '+') {
        this.a = Math.floor(Math.random() * 11)
        this.b = Math.floor(Math.random() * 11)
        this.r = this.a + this.b
      } else {
        this.a = Math.floor(Math.random() * 11)
        this.b = Math.floor(Math.random() * 11)
        if (this.a < this.b) {
          this.b = this.a
        }
        this.r = this.a - this.b
      }
      let min = this.r - Math.floor(Math.random() * 10)
      min = min < 0 ? 0 : min
      this.respuestas = [...Array(10).keys()].map(i => min + i)
      this.imagenes = images.sort(() => 0.5 - Math.random()).slice(0, 2)

      this.pregunta()
      this.mostrar_super_ayuda = this.mostrar_ayuda = this.correcto = this.incorrecto = this.rotando = false

      this.animado = true
      this.rotando = false
      this.mc = this.mi = null
    },
    validar(respuesta) {
      if (respuesta == this.r) {
        this.mc = respuesta
        this.correcto = true
        confetti.explode()
        this.frase = frases.sort(() => 0.5 - Math.random()).slice(0, 1)[0]

        !this.mostrar_super_ayuda && (this.puntaje[this.oper] += 1)

        localStorage.setItem('puntaje', JSON.stringify(this.puntaje))

        speech.speak(`¡Correcto! es ${this.r}! ${this.frase}`)
      } else {
        this.mi = respuesta
        this.incorrecto = true
        if (this.mostrar_ayuda) {
          this.mostrar_super_ayuda = true
        } else {
          this.mostrar_ayuda = true
        }
        speech.speak('Intenta de nuevo')
      }
    },
    pregunta() {
      let oper = this.oper == '+' ? 'mas' : 'menos'
      speech.speak(`¿Cuánto es ${this.a} ${oper} ${this.b}?`)
    },
    rotar() {
      if (this.oper == '+') {
        this.rotando = true
        this.animado = false
        let a = this.a
        let b = this.b
        this.a = b
        this.b = a
        this.pregunta()
        this.imagenes = this.imagenes.reverse()
        this.cancel_rotar && clearTimeout(this.cancel_rotar)
        this.cancel_rotar = setTimeout(() => {
          this.rotando = false
        }, 2500)
      }
    }
  }
}
</script>

<style scoped>
h2 {
  cursor: help;
}

.rect {
  width: 3em;
  height: 6em;
  /* outline: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.caja {
  width: 3em;
  height: 3em;
  /* outline: 1px solid tomato; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.rect img {
  max-width: 200%;
  max-height: 100%;
}


.box p {
  border: 1px solid red;
  height: 2em;
  display: flex;
  align-items: center;
  place-content: center;
  font-size: 1.5em;
}

.ocultar {
  opacity: 0;
}
.anim {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.anim.anim_1 { animation-delay: calc(1*0.2s); }
.anim.anim_2 { animation-delay: calc(2*0.2s); }
.anim.anim_3 { animation-delay: calc(3*0.2s); }
.anim.anim_4 { animation-delay: calc(4*0.2s); }
.anim.anim_5 { animation-delay: calc(5*0.2s); }
.anim.anim_6 { animation-delay: calc(6*0.2s); }
.anim.anim_7 { animation-delay: calc(7*0.2s); }
.anim.anim_8 { animation-delay: calc(8*0.2s); }
.anim.anim_9 { animation-delay: calc(9*0.2s); }
.anim.anim_10 { animation-delay: calc(10*0.2s); }
.anim.anim_11 { animation-delay: calc(11*0.2s); }
.anim.anim_12 { animation-delay: calc(12*0.2s); }
.anim.anim_13 { animation-delay: calc(13*0.2s); }
.anim.anim_14 { animation-delay: calc(14*0.2s); }
.anim.anim_15 { animation-delay: calc(15*0.2s); }
.anim.anim_16 { animation-delay: calc(16*0.2s); }
.anim.anim_17 { animation-delay: calc(17*0.2s); }
.anim.anim_18 { animation-delay: calc(18*0.2s); }
.anim.anim_19 { animation-delay: calc(19*0.2s); }
.anim.anim_20 { animation-delay: calc(20*0.2s); }

.anim.anim_21 { animation-delay: calc(21*0.2s); }
.anim.anim_22 { animation-delay: calc(22*0.2s); }
.anim.anim_23 { animation-delay: calc(23*0.2s); }
.anim.anim_24 { animation-delay: calc(24*0.2s); }
.anim.anim_25 { animation-delay: calc(25*0.2s); }
.anim.anim_26 { animation-delay: calc(26*0.2s); }
.anim.anim_27 { animation-delay: calc(27*0.2s); }
.anim.anim_28 { animation-delay: calc(28*0.2s); }
.anim.anim_29 { animation-delay: calc(29*0.2s); }


@keyframes rotar {
  0% {
    transform: translate(var(--from-translate), 0);
  }
  100% {
    transform: translate(var(--to-translate), 0);
  }
  
}

.rotando * {
  animation-name: rotar;
  animation-duration: 2s;
  animation-fill-mode: both;
}

.puntajes {
  display: flex;
  place-content: center;
  gap: 5em;
}
</style>
