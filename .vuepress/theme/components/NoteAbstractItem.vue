<template>
  <div
    class="abstract-item"
    @click="$router.push(item.path)">
    <div class="rimgv"><img :src="item.frontmatter.description" class="rimg" alt=""></div>
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="title">
      <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
      <router-link :to="item.path">{{item.title}}</router-link>
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
    <PageInfo
      :pageInfo="item"
      :currentTag="currentTag">
    </PageInfo>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag']
})
</script>

<style lang="stylus" scoped>
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  &:before{
    content: "";
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 0;
    width: 0%;
    height: 0%;
    border-bottom: 2px solid cornflowerblue;
    border-right: 2px solid cornflowerblue;
    transition all .6s
  }
  &:hover:before{
    width: 100%;
    height: 100%;
    border-bottom: 2px solid rgb(215,145,174);
    border-right: 2px solid rgb(100,247,245);
  }
  &:after{
    content: "";
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 0%;
    height: 0%;
    border-top: 2px solid cornflowerblue;
    border-left: 2px solid cornflowerblue;
    transition all .6s
  }
  &:hover:after{
    width: 100%;
    height: 100%;
    border-top: 3px solid rgb(255,108,168);
    border-left: 4px solid rgb(225,116,250);
  }
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;

    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    // &:after
    //   content: "";
    //   position: absolute;
    //   width: 100%;
    //   height: 2px;
    //   bottom: 0;
    //   left: 0;
    //   background-color: $accentColor;
    //   visibility: hidden;
    //   -webkit-transform: scaleX(0);
    //   transform: scaleX(0);
    //   transition: .3s ease-in-out;
    // &:hover a
    //   color $accentColor
    // &:hover:after
    //   visibility visible
    //   -webkit-transform: scaleX(1);
    //   transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
.rimgv{
  position: absolute;
  z-index:0;
  right: 0;
  bottom: 0;
  width: 300px;
  opacity: 0.5;
  transition: all 0.4s;
}
.rimg{
  width:100%;
}
.abstract-item:hover .rimgv{
  transform: scale(0.8);
  bottom: -160px;
  opacity: 1;
}
</style>
