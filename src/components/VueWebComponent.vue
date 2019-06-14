<template>
  <div>
    <h1>GARAIO webcomponent PoC</h1>
    <p>{{ msg }}</p>
    <div class="tile is-flippable" :data-flipped="flipped">
      <div>
        <a class="btn btn-function flip-toggler" @click="flipped = !flipped">
          <svg class="gfx inline">
            <use class="icon" xlink:href="#svg-flip"></use>
            <use class="close" xlink:href="#svg-close"></use>
          </svg>
        </a>
        <div class="tile-frontface tile-presentational tile-blue">
          <div>
            <h2>
              Warum die digitale Transformation für Ihr Unternehmen relevant ist
            </h2>
          </div>
        </div>
        <div class="tile-backface">
          <div>
            <header>
              <div class="tile-live">
                <time></time>
                <span class="text-label"></span>
              </div>
            </header>
            <h6>
              Warum die digitale Transformation für Ihr Unternehmen relevant ist
            </h6>
            <p>
              Digitale Technologien entwickeln sich in einer unglaublichen
              Geschwindigkeit. Und jede neue Technologie begünstigt wiederum die
              Entstehung einer weiteren Technologie. Unternehmen sind ob dieser
              Geschwindigkeit gefordert – denn neue Technologien schnüren auch
              immer neue Erwartungen bei Anwendern, Mitarbeitenden und Kunden.
              Wer mangels Agilität und Anpassungsfähigkeit nicht mithalten kann,
              wird von der Konkurrenz überholt. Setzen Sie die neuen
              Technologien also für sich ein. Hinterfragen Sie regelmässig Ihre
              Prozesse, Ihr Portfolio oder gar Ihr Businessmodell. Seien Sie
              aktiv in der Gestaltung der unmittelbaren Zukunft. Und setzen Sie
              eigene Standards in Ihrem Tätigkeitsgebiet.
            </p>
            <div class="tile-btn">
              <a
                class="btn btn-primary"
                href="/page(afe759ff-5fc6-4bc3-8060-d306d8a5214f)"
                >Mehr erfahren</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["msg"],
  data() {
    return {
      flipped: false
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #31afe1;
  margin-top: 60px;
}

p {
  color: white;
  text-align: center;
}
</style>
