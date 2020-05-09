<template>
  <div id="map"></div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import "@supermap/iclient-leaflet";
import "leaflet/dist/leaflet";
import L from "leaflet";
export default {
  name: "vmapsur",
  data () {
    return {
      csList: [],
      zxList: [],
      wifiList: [],
      fdList: [],
    };
  },
  created () {
    this.$nextTick(() => {
      this.gissetting2d()
    })
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
        this.getListCs(map)
        this.getListZx(map)
        this.getListWIFI(map)
        this.getListFd(map)
      })
    },
    async getListCs (map) {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var keyword = this.$store.state.F_Name[0]
      await this.$http.get('/scenicareaaround/getlistforsearch/' + keyword, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.csList = res.data.data
        for (var i = 0; i < this.csList.length; i++) {
          var latlng = L.latLng(this.csList[i].F_XPoint * 1, this.csList[i].F_YPoint * 1)
          var marker = L.marker(latlng, {
            icon: L.icon({
              iconUrl: require("../assets/images/cs.png"),
              iconSize: [30, 38],
            }),
          }).addTo(map).bindPopup(this.csList[i].F_Name)
        }
      });
    },
    async getListZx (map) {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var keyword = this.$store.state.F_Name[1]
      await this.$http.get('/scenicareaaround/getlistforsearch/' + keyword, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.zxList = res.data.data
        for (var i = 0; i < this.zxList.length; i++) {
          var latlng = L.latLng(this.zxList[i].F_XPoint * 1, this.zxList[i].F_YPoint * 1)
          var marker = L.marker(latlng, {
            icon: L.icon({
              iconUrl: require("../assets/images/zx.png"),
              iconSize: [30, 38],
            }),
          }).addTo(map).bindPopup(this.zxList[i].F_Name)
        }
      });
    },
    async getListWIFI (map) {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var keyword = this.$store.state.F_Name[2]
      await this.$http.get('/scenicareaaround/getlistforsearch/' + keyword, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.wifiList = res.data.data
        for (var i = 0; i < this.wifiList.length; i++) {
          var latlng = L.latLng(this.wifiList[i].F_XPoint * 1, this.wifiList[i].F_YPoint * 1)
          var marker = L.marker(latlng, {
            icon: L.icon({
              iconUrl: require("../assets/images/wifi.png"),
              iconSize: [30, 38],
            }),
          }).addTo(map).bindPopup(this.wifiList[i].F_Name)
        }
      });
    },
    async getListFd (map) {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var keyword = this.$store.state.F_Name[3]
      await this.$http.get('/scenicareaaround/getlistforsearch/' + keyword, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.fdList = res.data.data
        for (var i = 0; i < this.fdList.length; i++) {
          var latlng = L.latLng(this.fdList[i].F_XPoint * 1, this.fdList[i].F_YPoint * 1)
          var marker = L.marker(latlng, {
            icon: L.icon({
              iconUrl: require("../assets/images/fd.png"),
              iconSize: [30, 38],
            }),
          }).addTo(map).bindPopup(this.fdList[i].F_Name)
        }
      });
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