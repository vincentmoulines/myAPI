// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: 'AIzaSyCsliW5kmhxBed3M7j5Lmo5MAO-qK9iatY',
    libraries: 'places'
  }
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

function startMap() {
  var map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: parachuting
    }
  );

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const user_location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      map.setCenter(user_location);
   }, function () {
     console.log('Error in the geolocation service.');
   });
 } else {
   console.log('Browser does not support geolocation.');
}
}


// startMap();

// module.exports = app;
