<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Ionic-geo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
        <ion-toolbar>
          <ion-searchbar :value="inputCommune" v-model="inputCommune" show-cancel-button="never"></ion-searchbar>
        </ion-toolbar>
        <section>
          <ion-button type="submit" expand="block" color="dark" @click="searchCommunes">Recherche</ion-button>
        </section>
      </div>

      <div v-if="display">
        <ion-card class="ion-text-center" color="danger">
          <p v-if="resultCommunes.length == 0">Cette commune n'existe pas</p>
        </ion-card>

        <ion-card class="ion-text-center">
          <p><strong>{{ resultCommunes.length }}</strong> {{ resultCommunes.length > 2  ? 'résultats' : 'résultat' }}</p>
        </ion-card>

        <ion-card v-for="commune in resultCommunes" :key="commune">
          <ion-card-header>
            <ion-card-subtitle>{{ commune.code }}</ion-card-subtitle>
            <ion-card-title>{{ commune.nom }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <p>Département: <text>{{ commune.departement.code }}</text></p>
            <p>Région: <text>{{ commune.region.code }}</text></p>
            <p>Code postaux: <text>{{ commune.codesPostaux.join() }}</text></p>
            <p>Population: <text>{{ commune.population }}</text></p>
          </ion-card-content>
        </ion-card>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSearchbar, IonButton } from '@ionic/vue';

export default({
  name: 'Communes',
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
    IonSearchbar,
    IonButton
  },
  data(){
    return{
      inputCommune: "",
      resultCommunes: [],
      display: false,
    }
  },
  methods: {
    searchCommunes(){
      fetch(`https://geo.api.gouv.fr/communes?nom=${this.inputCommune}&boost=population&fields=population,departement,codesPostaux,region`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.resultCommunes = data;
            this.display = true;
          })
          .catch(function (error){
            console.log(error);
          });
    }
  }
});
</script>

<style scoped>
section:not(.full-width),
.full-width > header{
  padding: 0 14px;
}
text {
  color: #3880ff;
}
ion-searchbar{
  margin-top: 40px;
}
</style>