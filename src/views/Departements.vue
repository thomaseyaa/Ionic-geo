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
          <ion-select interface="action-sheet" v-model="selectedDepartement">
            <ion-select-option :value="departement.code" v-for="departement in allDepartements" :key="departement">{{ departement.code }} - {{ departement.nom }}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-card>

      <section>
        <ion-button type="submit" expand="block" color="dark" @click="searchCommunes">Recherche</ion-button>
      </section>

      <div v-if="display">
        <ion-card class="ion-text-center">
          <p><strong>{{ resultDepartements.length }}</strong> {{ resultDepartements.length > 2  ? 'résultats' : 'résultat' }}</p>
        </ion-card>

        <ion-card v-for="commune in resultDepartements" :key="commune">
          <ion-card-header>
            <ion-card-subtitle>{{ commune.code }}</ion-card-subtitle>
            <ion-card-title>{{ commune.nom }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <p>Département: <text>{{ commune.codeDepartement }}</text></p>
            <p>Région: <text>{{ commune.codeRegion }}</text></p>
            <p>Code postaux: <text>{{ commune.codesPostaux.join() }}</text></p>
            <p>Population: <text>{{ commune.population }}</text></p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonSelect, IonSelectOption, IonButton,
} from '@ionic/vue';

export default {
  name: 'Departements',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonButton
  },
  data(){
    return{
      allDepartements: [],
      selectedDepartement: "",
      resultDeparment: [],
      display: false,
    }
  },
  mounted(){
      fetch(`https://geo.api.gouv.fr/departements`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.allDepartements = data;
          })
          .catch(function (error){
            console.log(error);
          });
  },
  methods: {
    searchCommunes(){
      fetch(`https://geo.api.gouv.fr/departements/${this.selectedDepartement}/communes`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.resultDepartements = data;
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