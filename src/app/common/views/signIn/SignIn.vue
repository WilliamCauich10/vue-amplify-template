<template>
  <layout>
    <slot name="content">
      <div class="login-container">
        <v-main
          align="center"
          justify="center"
        >
          <v-row class="pa-0 ma-0">
            <v-col class="d-flex d-sm-none pr-bg-login header-login"></v-col>
          </v-row>
          <v-container
            class="px-8 login-form"
            fluid
          >
            <v-row
              align="center"
              justify="center"
              class
            >
              <v-img
                :src="require('@/app/assets/Frame.svg')"
                class="mt-12"
                max-width="180"
              ></v-img>
            </v-row>
            <v-row
              align="center"
              justify="center"
              class
            >
              <v-col
                xs="10"
                xl="8"
              >
                <v-container
                  offset="1"
                  cols="10"
                >
                  <v-breadcrumbs
                    class="ma-0 text-center d-inline-flex ml-n6 c-font-weight-bold justify-start"
                    :items="itemsBc"
                    large
                    :active-class="'active-bc'"
                  >
                    <template v-slot:divider>
                      <v-icon large>mdi-power-on</v-icon>
                    </template>
                    <template v-slot:item="{ item }">
                      <v-breadcrumbs-item
                        class="c-breadcrumbs__item"
                        :to="!item.disabled ? item.href : ''"
                        :disabled="item.disabled"
                        active-class="active-bc"
                      >
                        {{ $t(item.text) }}
                      </v-breadcrumbs-item>
                    </template>
                  </v-breadcrumbs>
                  <v-card
                    flat
                    :disabled="loading"
                  >
                    <h4
                      class="ma-0 mt-6 font-weight-bold letter-spacing-2 custom-title-login"
                      v-html="$t('lblTitle').toUpperCase()"
                    />

                    <p
                      class="c-pr-headline"
                      v-html="$t('lblSubtitle')"
                    />

                    <p class="text-center d-inline-flex mb-12">
                      <v-img
                        :src="require('@/app/assets/corona.svg')"
                        width="20"
                        text-center
                      ></v-img>
                    </p>

                    <v-form
                      ref="signin"
                      lazy-validation
                      v-model="isFormValid"
                    >
                      <v-row no-gutters>
                        <v-col no-gutters>
                          <v-text-field
                            dense
                            outlined
                            v-model="username"
                            :rules="usernameRules"
                            :placeholder="$t('lblUsernameTip')"
                            :label="$t('lblUsername')"
                            prepend-inner-icon="mdi-account"
                            required
                            @keydown.enter="$refs.txtPassword.focus()"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col no-gutters>
                          <v-text-field
                            ref="txtPassword"
                            dense
                            outlined
                            prepend-inner-icon="mdi-lock"
                            v-model="password"
                            :rules="passwordRules"
                            :placeholder="$t('lblPasswordTip')"
                            :label="$t('lblPassword')"
                            :append-icon="isClearPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="isClearPassword = !isClearPassword"
                            :type="isClearPassword ? 'text' : 'password'"
                            required
                            @keydown.enter="doSubmit()"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col
                          align="right"
                          justify="right"
                        >
                          <v-btn
                            block
                            class="mt-2 pa-6 text-none btn-primary-font"
                            min-width="100"
                            color="primary"
                            dark
                            :loading="loading"
                            @click.stop="go('Home')"
                            v-html="!loading ? $t('btnSubmit') : ''"
                          />
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="d-flex justify-space-between caption version-container">
            <locale-control></locale-control>
            <span
              v-html="`v ${build.current}`"
              class="col-start-1 col-end-6"
            ></span>
          </v-container>
        </v-main>
      </div>
    </slot>
  </layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LocaleControl from '@/app/common/components/LocaleControl.vue';
import Layout from '@/app/common/layout/Anonimous.layout.vue';
import i18nMessages from './messages';

@Component({
  name: 'SignIn',
  components: {
    LocaleControl,
    Layout,
  },
  i18n: i18nMessages,
})
export default class SignIn extends Vue {
  loading = false;

  username = '';

  password = '';

  isClearPassword = false;

  build = {
    current: 0.1,
  };

  isFormValid = true;

  passwordRules = [(v: any) => !!v || this.$t('lblRule4Password6')];

  usernameRules = [(v: any) => !!v || this.$t('lblRule4User1')];

  itemsBc = [
    {
      text: 'lblTitle',
      disabled: true,
      href: '/signin',
    },
  ];

  go(url: string): any {
    this.$router.push({ name: url });
  }
}
</script>
