<template>
  <div id="section-navigation" class="inv-section inv-sticky fixed-transition fixed" style="">
    <div class="section-inner">
      <div class="container">
        <div class="row">
          <div class="inv-region region-logo  col-sm-3">
            <router-link to="/" title="首页" rel="home">
              <img src="../assets/img/logo.png" alt="首页" class="logo">
            </router-link>
          </div>
          <div class="inv-region region-navigation col-sm-9">
            <ul id="superfish-main" class="menu sf-menu clearfix">
              <li id="main-standardfront-page" class="active-trail sf-depth-1 sf-no-children">
                <router-link to="/" class="sf-depth-1">首页</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/about" class="sf-depth-1">精英律师</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/cases" class="sf-depth-1">成功案例</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/knowledge" class="sf-depth-1">刑事法律法规及政策动向</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/news" class="sf-depth-1">热点评析</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/contact" class="sf-depth-1">联系我们</router-link>
              </li>
              <!-- <li class="sf-depth-1 sf-no-children">
                <router-link to="/news" class="sf-depth-1">刑事热点</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/team" class="sf-depth-1">团队动态</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/special" class="sf-depth-1">专题一览</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/practice" class="sf-depth-1">刑辩业务</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/articles" class="sf-depth-1">刑辩研究</router-link>
              </li>
              <li class="sf-depth-1 sf-no-children">
                <router-link to="/knowledge" class="sf-depth-1">罪名百科</router-link>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayerHeader",
  data() {
    return {
      msg: 'Ecosystem'
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
  height: 70px;
}
.region-navigation {
  padding-top: 15px;
}
ul.sf-menu {
  padding-left: 0;
  list-style: none;
  li {
    float: left;
    a {
      padding: 0 15px;
      font-size: 16px;
      color: #1e243a;
      line-height: 40px;
      text-decoration: none;
    }
    &:hover {
      border-bottom: 3px solid #eab100;
      transition: all .5s linear;
    }
  }
}
</style>
