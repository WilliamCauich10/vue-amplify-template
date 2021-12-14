<template v-slot:prepend>
    <div class="avatar ma-1 pl-5">
      <!-- <span v-html="$t('lblWelcome')" class="white--text body-2"></span> -->
        <span class="white--text body-2">Welcome</span>
        <p class="white--text subtitle-2 d-block mb-0">{{username}}</p>
    </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

@Component({
  name: 'AppAvatar',
})
export default class AppAvatar extends Vue {
  @Prop({
    type: String,
    default: 'Usuario',
  })
  username!: string;
}
</script>
