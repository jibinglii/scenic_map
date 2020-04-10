<template>
  <div id="main">
    <sm-web-map :map-options="mapOptions">
      <sm-tile-layer :url="url"></sm-tile-layer>
    </sm-web-map>
  </div>
</template>
<script>
// import L from "leaflet";
// import { WebMap } from "@supermap/vue-iclient-leaflet";
// import { SmTileLayer } from "@supermap/vue-iclient-leaflet";
// import { tiledMapLayer } from "@supermap/vue-iclient-leaflet";
export default {
  name: "vmap",
  data() {
    return {
      url:
        "http://119.3.248.197:8090/iserver/services/map-new-2D/rest/maps/YXX@data",
      mapOptions: {
        center: [39.94, 116.31],
        zoom: 18,
        crs: L.CRS.EPSG4326
      }
    };
  },
  // components: {
  //   "sm-web-map": WebMap,
  //   "sm-tile-layer": SmTileLayer
  // }
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