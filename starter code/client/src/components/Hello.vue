<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Bienvenue sur la communauté des communes du Jura, situé à l'intérieur du parc naturel des ballons des Vosges cette communauté des communes vous propose un ensemble d'activité afin de profitez de ce paysage semi montagneux unique en France  </h2>
    <FORM>
      <SELECT name="nom" size="1">
        <OPTION>"Canyoning aux corbeaux"</OPTION>
        <OPTION>Canyoning Hesbach</OPTION>
        <OPTION>les eaux d'Oderen</OPTION>
        <OPTION>rafting à Raingott</OPTION>
        <OPTION>les eaux de Bergenbach</OPTION>
        <OPTION>les pedales du Jura</OPTION>
        <OPTION>mont Schliffels</OPTION>
        <OPTION>6 barres à vélo</OPTION>
        <OPTION>prince de Bel Air</OPTION>
      </SELECT>
    </FORM>
    <FORM>
      <SELECT name="date" size="1">
        <OPTION>lundi</OPTION>
        <OPTION>mardi</OPTION>
        <OPTION>mercredi</OPTION>
        <OPTION>jeudi</OPTION>
        <OPTION>vendredi</OPTION>
      </SELECT>
    </FORM>
    <FORM>
      <SELECT name="foo" size="1">
        <OPTION>9h à 11h</OPTION>
        <OPTION>14 à 16h</OPTION>
        <OPTION>17 à 18h30</OPTION>
      </SELECT>
    </FORM>
    <h2>Map</h2>
    <gmap-map
    :center="center"
    :zoom="8"
    style="width: 500px; height: 300px"
    >
    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      {{infoContent}} <img :src="imgUrl" alt="" >
    </gmap-info-window>
    <gmap-marker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="false"
    @click="toggleInfoWindow(m,index)"
    ></gmap-marker>
  </gmap-map>
</div>
</template>

<script>
// var googleApiWrapper = require('js-google-api-wrapper');
import axios from "axios";

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      infoContent: '',
      imgUrl: "http://montemedio.com/wp-content/uploads/2016/12/Canyoning-Annecy-Monte-Medio-15-2.jpg",
      //imgUrl: 'http://medias.tourismebretagne.com/images/o/r/t/-/B/full_Aerosport-Bretagne-Parachute-Club-4.jpg',
      infoWinOpen: false,
      center: {lat: 47.911858, lng: 6.979305999999951},
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      currentMidx : null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: []
    }
  },
  created() {
    //var contentString='blablablobli';
    //var infowindow = new google.maps.InfoWindow({
    //content: contentString
    //});
    axios.get('http://localhost:3000/api/activities', {})
    .then((response) => {
      // console.log(response.data[0]);
      this.markers = [];
      for (var i = 0; i < response.data.length; i++) {
        this.markers.push({
          position: {
            lat: response.data[i].organisation.latitude,
            lng: response.data[i].organisation.longitude,
          },
          content:{
            //imgUrl:response.data[i].content.imgUrl,
            infoText: response.data[i].content.name +" "+ response.data[i].content.description,
          },
        })
      }

    });
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.content.infoText;
      //this.imgUrl=marker.imgUrl;
      this.center=marker.position;
      if(this.currentMidx == idx){
        this.infoWinOpen = !this.infoWinOpen;
      }
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: blue;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
