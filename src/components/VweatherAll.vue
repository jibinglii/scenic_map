<template>
  <div class="weather">
    <iframe src="http://weather.seniverse.com/?token=baab943b-0200-4e73-ae33-c93686246f9a"
            id="_weather"
             frameborder="0"
                width="100%"
            height="100%"></iframe>
  </div>
</template>
<script>
export default {
  name: 'vweather',
}
</script>
<style lang="scss" scoped>
.weather {
  width: 100%;
  height: 100%;
}
</style>