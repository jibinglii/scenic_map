<template>
  <div id="map"></div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import "@supermap/iclient-leaflet";
import "leaflet/dist/leaflet";
import L from "leaflet";
export default {
  name: "vmap",
  data () {
    return {
      scenicLists: [],
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
        let result = res.data.data
        var map = L.map("map", {
          crs: L.CRS.EPSG4326,
          center: [39.94, 116.31],
          maxZoom: 24,
          zoom: 18,
          minZoom: 0,
          attributionControl: true
        });
        L.supermap.tiledMapLayer(
          result.F_URL
        ).addTo(map);
        this.getLists(map)
      })
    },
    async getLists (map) {
      var fId = this.$store.state.fId
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get('/gisscenicarea/getlist/' + fId, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.scenicLists = res.data.data
        for (var i = 0; i < this.scenicLists.length; i++) {
          var latlng = L.latLng(this.scenicLists[i].F_YPoint * 1, this.scenicLists[i].F_XPoint * 1)
          var marker = L.marker(latlng, {
            title: this.scenicLists[i].F_Name,
            icon: L.icon({
              iconUrl: require("../assets/images/scenic_icon.png"),
              iconSize: [34, 42],
            }),
          }).addTo(map).bindPopup(this.scenicLists[i].F_Name)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#map {
  margin: 0;
  overflow: hidden;
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>