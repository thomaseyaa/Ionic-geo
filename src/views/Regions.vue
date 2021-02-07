<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Ionic-geo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item color="primary">
          <ion-select interface="action-sheet" v-model="selectedRegion">
            <ion-select-option :value="region.code" v-for="region in allRegions" :key="region">{{ region.code }} - {{ region.nom }}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-card>

      <section>
        <ion-button type="submit" expand="block" color="dark" @click="searchDepartements">Recherche</ion-button>
      </section>

      <div v-if="display">
        <ion-card class="ion-text-center">
          <p><strong>{{ resultRegions.length }}</strong> {{ resultRegions.length > 2  ? 'résultats' : 'résultat' }}</p>
        </ion-card>

        <ion-card v-for="departement in resultRegions" :key="departement">
          <ion-card-header>
            <ion-card-title>{{ departement.nom }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <p>Code INSEE: <text>{{ departement.codeRegion }}</text></p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonSelect, IonSelectOption, IonButton,
} from '@ionic/vue';

export default {
  name: 'Regions',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonButton
  },
  data(){
    return{
      allRegions: [],
      selectedRegion: "",
      resultRegions: [],
      display: false,
    }
  },
  mounted(){
    fetch(`https://geo.api.gouv.fr/regions`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.allRegions = data;
        })
        .catch(function (error){
          console.log(error);
        });
  },
  methods: {
    searchDepartements(){
      fetch(`https://geo.api.gouv.fr/regions/${this.selectedRegion}/departements`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.resultRegions = data;
            this.display = true;
          })
          .catch(function (error){
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>
section:not(.full-width),
.full-width > header{
  padding: 0 14px;
}
text {
  color: #3880ff;
}
ion-select-option{
  margin-top: 40px;
}
</style>