<template>
  <div id="main">
    <sm-web-map :map-options="mapOptions">
      <sm-tile-layer :url="url"></sm-tile-layer>
    </sm-web-map>
  </div>
</template>
<script>

export default {
  name: "vmap",
  data () {
    return {
      url: '',
      mapOptions: {
        center: [39.94, 116.31],
        zoom: 18,
        crs: L.CRS.EPSG4326
      }
    };
  },
  created () {
    this.gissetting2d()
  },
  methods: {
    async gissetting2d () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get('/gissetting/2d', {
        params: {
          token: token,
          loginMark: loginmark
        }

      }).then(res => {
        console.log(res)
        let result = res.data.data
        this.url = result.F_URL
        // this.mapOptions.center = result.F_Center.split(',')
        // this.mapOptions.zoom = result.F_Zoom
        // this.$set(this.mapOptions, 'center', result.F_Center.split(','))
        this.$set(this.mapOptions, 'zoom', result.F_Zoom)
        // this.mapOptions.crs = result.F_Coordinate
        console.log(this.mapOptions.zoom)

      })
    }
  }
};
</script>
<style lang="scss" scoped>
#main {
  margin: 0;
  overflow: hidden;
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>