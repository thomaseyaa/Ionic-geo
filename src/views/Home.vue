<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Home page"/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Home',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  }
}
</script>

<style scoped>
section:not(.full-width),
.full-width > header{
  padding: 0 14px;
}
</style>