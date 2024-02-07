<template>
  <div>
    <div v-if="screenSize > 800">
      <v-app-bar app class="topbar" :height="topBarHeight" :style="{ transition: 'height 0.5s' }">
        <v-container fluid>
          <v-row align-center>
            <v-col cols="12">
              <v-img src="@/assets/logotipo.png" class="logo mt-n5" :style="{ opacity: logoOpacity, transform: `translateY(${logoTranslateY}px)` }" />
            </v-col>
            <v-col cols="12" class="buttons mt-n7" :style="{ transform: `translateY(${buttonsTranslateY}px)` }">
              <router-link v-for="(item, i) in items" :key="i" :to="item.link" @click.native="selectItem(i)">
                <div class="custom-btn mt-n1" :class="{ active: selectedItem === i }">{{ item.text }}</div>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
    </div>
    <div v-else>
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item>
            <img src="@/assets/blazon.png" class="blazon" />
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group v-model="selectedItem" color="#23832c">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="custom-btn-resize" v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app class="topbarResize">
        <v-app-bar-nav-icon @click="drawer = !drawer" color="#fff"></v-app-bar-nav-icon>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topBarHeight: 160,
      logoOpacity: 1,
      logoTranslateY: -10,
      buttonsTranslateY: 0,
      scrollTop: 0,
      selectedItem: 0,
      items: [
        { link: "/", text: "Home", icon: "mdi-home" },
        { link: "/Courses", text: "Cursos", icon: "mdi-book-open-variant" },
        { link: "/Internship", text: "Estágio", icon: "mdi-account-file-text" },
        { link: "/Registration", text: "Matrícula", icon: "mdi-account-plus"}
      ],
      drawer: null,
      screenSize: document.documentElement.clientWidth,
    };
  },
  mounted() {
    window.addEventListener("load", this.adjustTopBarOnLoad);
    window.addEventListener("scroll", this.handleScroll);
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  methods: {
    onResize() {
      this.screenSize = document.documentElement.clientWidth;
    },
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.logoTranslateY = Math.min(0, -1 * this.scrollTop);
      this.logoOpacity = Math.max(0, 1 - 1 * this.scrollTop);
      const maxButtonsTranslateY = this.topBarHeight - 15;
      this.buttonsTranslateY = Math.max(-maxButtonsTranslateY, -1.5 * this.scrollTop);
      this.topBarHeight = Math.max(60, 160 - 1 * this.scrollTop);
    },
    adjustTopBarOnLoad() {
      this.handleScroll();
    },
    selectItem(index) {
      this.selectedItem = index;
    },
  },
  beforeDestroy() {
    window.removeEventListener("load", this.adjustTopBarOnLoad);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
}
.topbar {
  background: linear-gradient(to right, #23832c, #40e0d0);
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Arial", sans-serif;
  font-size: 24px;
}
.logo {
  width: 70%;
  max-width: 100%;
  display: block;
  transition: opacity 0.5s, transform 0.3s;
  margin: 0 auto;
}
.blazon {
  margin: 10%;
  margin-left: 22%;
  width: 50%;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
}
.custom-btn {
  margin-right: 20px;
  margin-left: 20px;
  padding: 6px;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.custom-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 7px;
}
.custom-btn.active {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 7px;
}
.v-list-item__title.custom-btn-resize {
  font-size: 16px;
}
.topbarResize {
  background: linear-gradient(to right, #23832c, #40e0d0);
  margin: 0;
}
</style>
