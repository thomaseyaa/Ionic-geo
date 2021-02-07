<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="communes" href="/tabs/communes">
          <ion-icon :icon="locate" />
          <ion-label>Communes</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="departements" href="/tabs/departements">
          <ion-icon :icon="navigate" />
          <ion-label>Départements</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="regions" href="/tabs/regions">
          <ion-icon :icon="map" />
          <ion-label>Régions</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { locate, navigate, map } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      locate,
      navigate,
      map,
    }
  }
}
</script>