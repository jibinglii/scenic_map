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
      map: null,
      markercsList: [],
      markerzxList: [],
      markerwifiList: [],
      markerfdList: [],
      markercsgroup: null,
      markerzxgroup: null,
      markerwifigroup: null,
      markerfdgroup: null,
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
        var center = [0, 0];
        if (result.F_Center && result.F_Center.indexOf(',') > -1) {
          center = result.F_Center.split(',');
        }
        var map = L.map("map", {
          crs: L.CRS.EPSG4326,
          center: [center[1], center[0]],
          maxZoom: result.F_MaxZoom,
          zoom: result.F_Zoom,
          minZoom: result.F_MinZoom,
          attributionControl: true
        });
        L.supermap.tiledMapLayer(
          result.F_URL
        ).addTo(map);
        this.map = map
        this.$store.dispatch('setmap', this.map)
        this.getListCs(map)
        this.getListZx(map)
        this.getListWIFI(map)
        this.getListFd(map)
      })
    },
    async getListCs (map) {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var keyword = this.$store.state.F_Id[0]
      await this.$http.get('/scenicareaaround/getlist/' + keyword, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.csList = res.data.data
        for (var i = 0; i < this.csList.length; i++) {
          var latlng = L.latLng(this.csList[i].F_XPoint * 1, this.csList[i].F_YPoint * 1)
          var marker0 = L.marker(latlng, {
            icon: L.icon({
              iconUrl: require("../assets/images/cs.png"),
              iconSize: [30, 38],
            }),
          }).addTo(map).bindPopup(this.csList[i].F_Name)
          this.markercsList.push(marker0)
        }
        this.markercsgroup = L.layerGroup(this.markercsList);
        this.map.addLayer(this.markercsgroup);
        this.$store.dispatch('setmarkercsList', this.markercsgroup)
      });
    },
    async getListZx (map) {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var keyword = this.$store.state.F_Id[1]
      await this.$http.get('/scenicareaaround/getlist/' + keyword, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.zxList = res.data.data
        for (var i = 0; i < this.zxList.length; i++) {
          var latlng = L.latLng(this.zxList[i].F_XPoint * 1, this.zxList[i].F_YPoint * 1)
          var marker1 = L.marker(latlng, {
            icon: L.icon({
              iconUrl: require("../assets/images/zx.png"),
              iconSize: [30, 38],
            }),
          }).addTo(map).bindPopup(this.zxList[i].F_Name)
          this.markerzxList.push(marker1)
        }
        this.markerzxgroup = L.layerGroup(this.markerzxList);
        this.map.addLayer(this.markerzxgroup);
        this.$store.dispatch('setmarkerzxList', this.markerzxgroup)
      });
    },
    async getListWIFI (map) {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var keyword = this.$store.state.F_Id[2]
      await this.$http.get('/scenicareaaround/getlist/' + keyword, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.wifiList = res.data.data

        for (var i = 0; i < this.wifiList.length; i++) {
          var latlng = L.latLng(this.wifiList[i].F_XPoint * 1, this.wifiList[i].F_YPoint * 1)
          var marker2 = L.marker(latlng, {
            icon: L.icon({
              iconUrl: require("../assets/images/wifi.png"),
              iconSize: [30, 38],
            }),
          }).addTo(map).bindPopup(this.wifiList[i].F_Name)
          this.markerwifiList.push(marker2)
        }
        this.markerwifigroup = L.layerGroup(this.markerwifiList);
        this.map.addLayer(this.markerwifigroup);
        this.$store.dispatch('setmarkerwifiList', this.markerwifigroup)
      });
    },
    async getListFd (map) {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var keyword = this.$store.state.F_Id[3]
      await this.$http.get('/scenicareaaround/getlist/' + keyword, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.fdList = res.data.data
        for (var i = 0; i < this.fdList.length; i++) {
          var latlng = L.latLng(this.fdList[i].F_XPoint * 1, this.fdList[i].F_YPoint * 1)
          var marker3 = L.marker(latlng, {
            icon: L.icon({
              iconUrl: require("../assets/images/fd.png"),
              iconSize: [30, 38],
            }),
          }).addTo(map).bindPopup(this.fdList[i].F_Name)
          this.markerfdList.push(marker3)
        }
        this.markerfdgroup = L.layerGroup(this.markerfdList);
        this.map.addLayer(this.markerfdgroup);
        this.$store.dispatch('setmarkerfdList', this.markerfdgroup)
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