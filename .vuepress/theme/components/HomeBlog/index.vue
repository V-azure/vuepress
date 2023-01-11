<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...bgImageStyle }">
      <div>
        <ModuleTransition>
          <img
            class="hero-img"
            v-if="recoShowModule && $frontmatter.heroImage"
            :style="heroImageStyle || {}"
            :src="$withBase($frontmatter.heroImage)"
            alt="hero"
          />
        </ModuleTransition>

        <ModuleTransition delay="0.04">
          <h1 v-if="recoShowModule && $frontmatter.heroText !== null">
            {{ $frontmatter.heroText || $title || "vuePress-theme-reco" }}
          </h1>
        </ModuleTransition>

        <ModuleTransition delay="0.08">
          <p
            v-if="recoShowModule && $frontmatter.tagline !== null"
            class="description"
          >
            {{
              $frontmatter.tagline ||
              $description ||
              "Welcome to your vuePress-theme-reco site"
            }}
          </p>
        </ModuleTransition>
      </div>
    </div>

    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract
            :data="$recoPosts"
            @paginationChange="paginationChange"
          />
        </div>
        <div class="info-wrapper">
          <PersonalInfo />
          <h4>
            <reco-icon icon="reco-category" /> {{ $recoLocales.category }}
          </h4>
          <ul class="category-wrapper">
            <li
              class="category-item"
              v-for="(item, index) in this.$categories.list"
              :key="index"
            >
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span
                  class="post-num"
                  :style="{ backgroundColor: getOneColor() }"
                  >{{ item.pages.length }}</span
                >
              </router-link>
            </li>
          </ul>
          <hr />
          <h4 v-if="$tags.list.length !== 0">
            <reco-icon icon="reco-tag" /> {{ $recoLocales.tag }}
          </h4>
          <TagList @getCurrentTag="getPagesByTags" />
          <h4
            v-if="
              $themeConfig.friendLink && $themeConfig.friendLink.length !== 0
            "
          >
            <reco-icon icon="reco-friend" /> {{ $recoLocales.friendLink }}
          </h4>
          <FriendLink />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom />
    </ModuleTransition>
    <div class="scroll-down"></div>
    <RunTime v-show="showrunt"/>
    <div class="sz"></div>
    <!-- 过年 -->
    <div class="content">
        <div class="lantern-box">
            <div class="lantern-line"></div>
            <div class="lantern-body">
                <!-- 灯笼中间的线条 -->
                <div class="lantern-circle">
                    <div class="lantern-rect">
                        <!-- 灯笼中间的文字内容 -->
                        <div class="lantern-text">新年快乐</div>
                    </div>
                </div>
                <!-- 灯笼穗 -->
                <div class="lantern-tassel"></div>
            </div>
        </div>
        <div class="lantern-box">
            <div class="lantern-line"></div>
            <div class="lantern-body">
                <!-- 灯笼中间的线条 -->
                <div class="lantern-circle">
                    <div class="lantern-rect">
                        <!-- 灯笼中间的文字内容 -->
                        <div class="lantern-text">新年快乐</div>
                    </div>
                </div>
                <!-- 灯笼穗 -->
                <div class="lantern-tassel"></div>
            </div>
        </div>
  </div>
</template>

<script>
import {
  defineComponent,
  toRefs,
  reactive,
  computed,
  onMounted,
} from "vue-demi";
import TagList from "@theme/components/TagList";
import FriendLink from "@theme/components/FriendLink";
import NoteAbstract from "@theme/components/NoteAbstract";
import { ModuleTransition, RecoIcon } from "@vuepress-reco/core/lib/components";
import PersonalInfo from "@theme/components/PersonalInfo";
import { getOneColor } from "@theme/helpers/other";
import { useInstance } from "@theme/helpers/composable";
import RunTime from "../../customComp/runtime.vue"

export default defineComponent({
  data() {
    return {
      showrunt:true,
    };
  },
  components: {
    NoteAbstract,
    TagList,
    FriendLink,
    ModuleTransition,
    PersonalInfo,
    RecoIcon,
    RunTime
  },
  setup(props, ctx) {
    const instance = useInstance();

    const state = reactive({
      recoShow: false,
      heroHeight: 0,
    });

    const recoShowModule = computed(
      () => instance && instance.$parent.recoShowModule
    );

    const heroImageStyle = computed(
      () => instance.$frontmatter.heroImageStyle || {}
    );

    const bgImageStyle = computed(() => {
      const url = instance.$frontmatter.bgImage
        ? instance.$withBase(instance.$frontmatter.bgImage)
        : require("../../../public/6.jpg");

      const initBgImageStyle = {
        textAlign: "center",
        overflow: "hidden",
        background: `url(${url}) center/cover no-repeat`,
      };

      const { bgImageStyle } = instance.$frontmatter;

      return bgImageStyle
        ? { ...initBgImageStyle, ...bgImageStyle }
        : initBgImageStyle;
    });

    onMounted(() => {
      state.heroHeight = document.querySelector(".hero").clientHeight;
      state.recoShow = true;
    });

    return {
      recoShowModule,
      heroImageStyle,
      bgImageStyle,
      ...toRefs(state),
      getOneColor,
    };
  },

  methods: {
    paginationChange(page) {
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight);
      }, 100);
    },
    getPagesByTags(tagInfo) {
      this.$router.push({ path: tagInfo.path });
    },
  },
  created(){
    this.showrunt=true;
  },
  beforeDestroy(){
    this.showrunt=false;
  }
});
</script>

<style lang="stylus">
.home-blog {
  padding: 0;
  margin: 0px auto;

  .hero {
    margin: $navbarHeight auto 0;
    position: relative;
    box-sizing: border-box;
    padding: 0 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .hero-img {
      max-width: 300px;
      margin: 0 auto 1.5rem;
    }

    h1 {
      display: block;
      margin: 0 auto 1.8rem;
      font-size: 2.5rem;
    }

    .description {
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }

  .home-blog-wrapper {
    display: flex;
    align-items: flex-start;
    margin: 20px auto 0;
    padding: 0 20px;
    max-width: $homePageWidth;

    .blog-list {
      flex: auto;
      width: 0;

      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0px;
        }
      }
    }

    .info-wrapper {
      position: -webkit-sticky;
      position: sticky;
      top: 70px;
      overflow: hidden;
      transition: all 0.3s;
      margin-left: 15px;
      flex: 0 0 300px;
      height: auto;
      box-shadow: var(--box-shadow);
      border-radius: $borderRadius;
      box-sizing: border-box;
      padding: 0 15px;
      background: var(--background-color);

      &:hover {
        box-shadow: var(--box-shadow-hover);
      }

      h4 {
        color: var(--text-color);
      }

      .category-wrapper {
        list-style: none;
        padding-left: 0;

        .category-item {
          margin-bottom: 0.4rem;
          padding: 0.4rem 0.8rem;
          transition: all 0.5s;
          border-radius: $borderRadius;
          box-shadow: var(--box-shadow);
          background-color: var(--background-color);

          &:hover {
            transform: scale(1.04);

            a {
              color: $accentColor;
            }
          }

          a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--text-color);

            .post-num {
              width: 1.6rem;
              height: 1.6rem;
              text-align: center;
              line-height: 1.6rem;
              border-radius: $borderRadius;
              background: #eee;
              font-size: 13px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    .hero {
      height: 450px;

      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem;
        font-size: 2rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display: block !important;

      .blog-list {
        width: auto;
      }

      .info-wrapper {
        // display none!important
        margin-left: 0;

        .personal-info-wrapper {
          display: none;
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    .hero {
      height: 450px;

      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display: block !important;

      .blog-list {
        width: auto;
      }

      .info-wrapper {
        // display none!important
        margin-left: 0;

        .personal-info-wrapper {
          display: none;
        }
      }
    }
  }
}

/* ***************************部分修改 */
body {
  background-image: url('https://wimg.588ku.com/gif620/21/07/20/70bca84f1e6d44b4b7baef8e97545b43.gif');
}

.sz { /* *遮罩 */
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../../public/bk.png');
}

.navbar {
  background: var(--default-color-2) !important;
}

.links {
  background: var(--default-color-1) !important;
}

.hero {
  position: relative;
  top: -60px;
}

h1 {
  font-weight: bolder !important;
  color: yellow;
  transition: all 0.3s !important;
  letter-spacing: 8px;
  cursor: pointer;
  position: relative;
  z-index: 10;
}

h1:hover {
  color: ivory;
  letter-spacing: 15px;
  text-shadow: 15px 10px 2px yellow;
}

.abstract-item {
  height: 150px;
}

.abstract-item .title {
  text-align: center;
  display: block !important;
  text-shadow: 0 0 2px black;
  text-shadow: 0 0 2px black;
}

.abstract {
  height: 40px;
}

.scroll-down {
  position: absolute;
  z-index: 99;
  bottom: 30px;
  left: calc(50% - 44px);
  width: 88px;
  height: 88px;
  background: url('../../../public/scroll-down.png');
  background-size: contain;
  animation: scroll-down 1.6s infinite;
}

@keyframes scroll-down {
  0% {
    bottom: 30px;
    opacity: 0.2;
  }

  100% {
    bottom: 0px;
    opacity: 1;
  }
}


// 猫咪鼠标
body {
  cursor: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/normal.cur'), auto; // cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/normal.cur), auto;
}

a {
  cursor: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur'), auto; // cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur), auto
}

a:active {
  cursor: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/work.cur'), alias; // cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/work.cur), alias
}

p {
  cursor: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/texto.cur'), auto; // cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/texto.cur), auto
}

span {
  cursor: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/No_Disponible.cur'), auto; // cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/No_Disponible.cur), auto;
}

/* **********************************************图片错乱效果 */
.hero {
  background-image: url('../../../public/6.jpg');
  animation: main-img-hide 16s infinite step-end;
}

.hero::before, .hero::after {
  position: absolute;
  z-index: -9;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: inherit;
}

.hero::after {
  content: '';
  -webkit-animation: glitch-one 16s infinite step-end;
  animation: glitch-one 16s infinite step-end;
}

.hero::before {
  content: '';
  -webkit-animation: glitch-two 16s infinite 1s step-end;
  animation: glitch-two 16s infinite 1s step-end;
}

@keyframes main-img-hide {
  5% {
    -webkit-filter: invert(1);
    filter: invert(1);
  }

  5.2% {
    -webkit-filter: none;
    filter: none;
  }

  10% {
    opacity: 0.5;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }

  11% {
    -webkit-filter: none;
    filter: none;
    opacity: 1;
  }

  45% {
    opacity: 0.5;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }

  46% {
    -webkit-filter: none;
    filter: none;
    opacity: 1;
  }

  53.5% {
    opacity: 0.5;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }

  54% {
    -webkit-filter: none;
    filter: none;
    opacity: 1;
  }

  54.5% {
    opacity: 0.5;
    -webkit-filter: hue-rotate(30deg);
    filter: hue-rotate(30deg);
  }

  55% {
    -webkit-filter: none;
    filter: none;
  }

  55.5% {
    background-image: none;
    -webkit-filter: none;
    filter: none;
    opacity: 1;
  }

  56% {
    background-image: url('../../../public/6.jpg');
    opacity: 0.5;
  }

  56.5% {
    background-image: none;
  }

  57% {
    background-image: url('../../../public/8.jpg');
    opacity: 0.8;
  }

  57.5% {
    opacity: 0.3;
  }

  58% {
    opacity: 1;
  }
}

@keyframes glitch-one {
  10% {
    -webkit-clip-path: inset(107px 0 217px);
    clip-path: inset(107px 0 217px);
    left: 66px;
  }

  10.5% {
    -webkit-clip-path: inset(239px 0 82px);
    clip-path: inset(239px 0 82px);
    left: -47px;
  }

  11% {
    -webkit-clip-path: inset(272px 0 56px);
    clip-path: inset(272px 0 56px);
    left: 92px;
  }

  11.5% {
    -webkit-clip-path: inset(12px 0 307px);
    clip-path: inset(12px 0 307px);
    left: 58px;
  }

  12% {
    -webkit-clip-path: inset(23px 0 294px);
    clip-path: inset(23px 0 294px);
    left: 19px;
  }

  12.5% {
    -webkit-clip-path: inset(286px 0 49px);
    clip-path: inset(286px 0 49px);
    left: 91px;
  }

  13% {
    -webkit-clip-path: inset(254px 0 74px);
    clip-path: inset(254px 0 74px);
    left: 14px;
  }

  13.5% {
    -webkit-clip-path: inset(67px 0 282px);
    clip-path: inset(67px 0 282px);
    left: -61px;
  }

  14% {
    -webkit-clip-path: inset(149px 0 178px);
    clip-path: inset(149px 0 178px);
    left: 32px;
  }

  14.5% {
    -webkit-clip-path: inset(21px 0 305px);
    clip-path: inset(21px 0 305px);
    left: -45px;
  }

  15.5% {
    -webkit-clip-path: inset(10px 0 320px);
    clip-path: inset(10px 0 320px);
    left: -20px;
  }

  16% {
    -webkit-clip-path: inset(10px 0 320px);
    clip-path: inset(10px 0 320px);
    left: -10px;
    opacity: 0;
  }

  45% {
    opacity: 0.5;
    left: -20px;
    -webkit-filter: hue-rotate(90deg) saturate(1.3);
    filter: hue-rotate(90deg) saturate(1.3);
  }

  45.5% {
    left: 0px;
    -webkit-filter: invert(1);
    filter: invert(1);
  }

  46% {
    -webkit-clip-path: inset(150px 0 160px);
    clip-path: inset(150px 0 160px);
    left: 15%;
  }

  46.5% {
    -webkit-clip-path: inset(20px 0 200px);
    clip-path: inset(20px 0 200px);
    left: -10%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  47% {
    -webkit-clip-path: inset(240px 0 20px);
    clip-path: inset(240px 0 20px);
    left: -11%;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  47.5% {
    -webkit-clip-path: inset(20 0 20px);
    clip-path: inset(20 0 20px);
    left: 13%;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-filter: invert(0);
    filter: invert(0);
  }

  48% {
    -webkit-clip-path: inset(120 0 120px);
    clip-path: inset(120 0 120px);
    left: 15%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  48.5% {
    -webkit-clip-path: inset(260px 0 10px);
    clip-path: inset(260px 0 10px);
    left: -11%;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-filter: none;
    filter: none;
  }

  49% {
    -webkit-clip-path: inset(5px 0 350px);
    clip-path: inset(5px 0 350px);
    left: 11%;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  49.5% {
    -webkit-clip-path: inset(105px 0 210px);
    clip-path: inset(105px 0 210px);
    left: 0%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  50% {
    -webkit-clip-path: inset(175px 0 160px);
    clip-path: inset(175px 0 160px);
    left: -11%;
  }

  50.5% {
    -webkit-clip-path: inset(95px 0 230px);
    clip-path: inset(95px 0 230px);
    left: -14%;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  51% {
    -webkit-clip-path: inset(235px 0 12px);
    clip-path: inset(235px 0 12px);
    left: -14%;
  }

  51.5% {
    -webkit-clip-path: inset(350px 0 7px);
    clip-path: inset(350px 0 7px);
    left: -14%;
  }

  52% {
    -webkit-clip-path: inset(320px 0 27px);
    clip-path: inset(320px 0 27px);
    left: -12%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  52.5% {
    -webkit-clip-path: inset(190px 0 127px);
    clip-path: inset(190px 0 127px);
    left: -11%;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-filter: hue-rotate(90deg) saturate(1.3);
    filter: hue-rotate(90deg) saturate(1.3);
  }

  54% {
    -webkit-clip-path: inset(20px 0 20px);
    clip-path: inset(20px 0 20px);
    left: 12%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: none;
    filter: none;
  }

  58% {
    -webkit-clip-path: inset(20px 0 20px);
    clip-path: inset(20px 0 20px);
    left: 12%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: none;
    filter: none;
  }

  59% {
    opacity: 0;
  }
}

@keyframes glitch-two {
  20% {
    -webkit-clip-path: inset(12px 0 322px);
    clip-path: inset(12px 0 322px);
    left: -66px;
  }

  20.5% {
    -webkit-clip-path: inset(98px 0 221px);
    clip-path: inset(98px 0 221px);
    left: 64px;
  }

  21% {
    -webkit-clip-path: inset(240px 0 100px);
    clip-path: inset(240px 0 100px);
    left: 3px;
  }

  21.5% {
    -webkit-clip-path: inset(96px 0 240px);
    clip-path: inset(96px 0 240px);
    left: -18px;
  }

  22% {
    -webkit-clip-path: inset(257px 0 72px);
    clip-path: inset(257px 0 72px);
    left: -41px;
  }

  22.5% {
    -webkit-clip-path: inset(137px 0 192px);
    clip-path: inset(137px 0 192px);
    left: -5px;
  }

  23% {
    -webkit-clip-path: inset(265px 0 61px);
    clip-path: inset(265px 0 61px);
    left: -77px;
  }

  23.5% {
    -webkit-clip-path: inset(98px 0 219px);
    clip-path: inset(98px 0 219px);
    left: -25px;
  }

  24% {
    -webkit-clip-path: inset(105px 0 229px);
    clip-path: inset(105px 0 229px);
    left: -38px;
  }

  24.5% {
    -webkit-clip-path: inset(237px 0 90px);
    clip-path: inset(237px 0 90px);
    left: 34px;
  }

  25.5% {
    -webkit-clip-path: inset(10px 0 320px);
    clip-path: inset(10px 0 320px);
    left: -20px;
  }

  26% {
    -webkit-clip-path: inset(10px 0 320px);
    clip-path: inset(10px 0 320px);
    left: -10px;
    opacity: 0;
  }

  45% {
    opacity: 0.3;
    left: -20px;
    -webkit-filter: hue-rotate(45deg) saturate(1.1);
    filter: hue-rotate(45deg) saturate(1.1);
  }

  45.5% {
    left: 0px;
    -webkit-filter: invert(1.2);
    filter: invert(1.2);
  }

  46% {
    -webkit-clip-path: inset(50px 0 260px);
    clip-path: inset(50px 0 260px);
    left: -12%;
  }

  46.5% {
    -webkit-clip-path: inset(120px 0 100px);
    clip-path: inset(120px 0 100px);
    left: 8%;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  47% {
    -webkit-clip-path: inset(40px 0 300px);
    clip-path: inset(40px 0 300px);
    left: 8%;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  47.5% {
    -webkit-clip-path: inset(220 0 70px);
    clip-path: inset(220 0 70px);
    left: -9%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: invert(1.1);
    filter: invert(1.1);
  }

  48% {
    -webkit-clip-path: inset(240px 0 120px);
    clip-path: inset(240px 0 120px);
    left: 11%;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  48.5% {
    -webkit-clip-path: inset(0px 0 310px);
    clip-path: inset(0px 0 310px);
    left: -12%;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-filter: none;
    filter: none;
  }

  49% {
    -webkit-clip-path: inset(255px 0 50px);
    clip-path: inset(255px 0 50px);
    left: 11%;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  49.5% {
    -webkit-clip-path: inset(10px 0 240px);
    clip-path: inset(10px 0 240px);
    left: 6%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  50% {
    -webkit-clip-path: inset(275px 0 90px);
    clip-path: inset(275px 0 90px);
    left: -12%;
  }

  50.5% {
    -webkit-clip-path: inset(195px 0 90px);
    clip-path: inset(195px 0 90px);
    left: 14%;
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
  }

  51% {
    -webkit-clip-path: inset(35px 0 282px);
    clip-path: inset(35px 0 282px);
    left: -14%;
  }

  51.5% {
    -webkit-clip-path: inset(350px 0 7px);
    clip-path: inset(350px 0 7px);
    left: 14%;
  }

  52% {
    -webkit-clip-path: inset(20px 0 270px);
    clip-path: inset(20px 0 270px);
    left: -12%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  52.5% {
    -webkit-clip-path: inset(90px 0 227px);
    clip-path: inset(90px 0 227px);
    left: -11%;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-filter: hue-rotate(150deg) saturate(1.3);
    filter: hue-rotate(150deg) saturate(1.3);
  }

  54% {
    -webkit-clip-path: inset(220px 0 100px);
    clip-path: inset(220px 0 100px);
    left: 12%;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: none;
    filter: none;
  }

  54% {
    background-image: none;
  }
  }
  
  
  
  
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 50px;
    margin-bottom: 250px;
    position: fixed;
    top: 0;
    z-index: 99;
}
.lantern-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 设置旋转点 */
    transform-origin: top center;
    animation: swing 3s infinite ease-in-out;
}
.lantern-line {
    width: 5px;
    height: 80px;
    background-color: #dc8f03;
}
.lantern-body {
    position: relative;
    width: 300px;
    height: 220px;
    background-color: #f00;
    border-radius: 120px;
    box-shadow: 0 30px 115px -10px #f00;
    /* 设置旋转点 */
    transform-origin: top center;
    animation: swing 3s infinite ease-in-out;
}
.lantern-body::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100px;
    height: 20px;
    background-color: #dc8f03;
    border-radius: 5px 5px 0 0;
}
.lantern-body::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100px;
    height: 20px;
    background-color: #dc8f03;
    border-radius: 0 0 5px 5px;
}
/* 灯笼的动画效果 */
@keyframes swing {
    0% {
      transform: rotate(-6deg);
    }
  
    50% {
      transform: rotate(6deg);
    }
  
    100% {
      transform: rotate(-6deg);
    }
}
.lantern-circle {
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 240px;
    height: 230px;
    border: 2px solid #dc8f03;
    border-radius: 50%;
}
.lantern-rect {
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90px;
    height: 240px;
    border: 2px solid #dc8f03;
    border-radius: 50%;
}
.lantern-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    font-size: 24px;
    color: #dc8f03;
    font-weight: 700;
}
.lantern-tassel {
    position: absolute;
    bottom: -40%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 5px;
    height: 75px;
    background-color: #dc8f03;
    /* 设置旋转点 */
    animation: swing 3s infinite ease-in-out;
}
.lantern-tassel::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 30px;
    height: 30px;
    background-color: #dc8f03;
    border-radius: 50%;
}
.lantern-tassel::after {
    content: '';
    position: absolute;
    bottom: -100%;
    left: 50%;
    transform: translate(-50%, 20%);
    width: 20px;
    height: 100px;
    background-color: #ffa500;
    border-radius: 0 0 5px 10px;
}
.switch {
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    border: 1px solid #000;
    margin: 0 auto;
    border-radius: 50px;
}
.switch_item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: #f00;
    cursor: pointer;
}
.move_block {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 33.3%;
    height: 44px;
    background-color: #000;
    border-radius: 50px;
    z-index: -1;
}
</style>
