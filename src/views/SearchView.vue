<template>
  <div class="mainContainer">
    <navbarComponent/>
    <div class="topPart">
      <div class="title">快速分析總覽</div>
      <div class="brownLine"></div>
      <div class="searchBar">
        <div class="area">
          <div>區域</div>
          <select name="areas">
            <option value="">選擇分類</option>
            <option value="Taiwan">Taiwan</option>
          </select>
        </div>
        <div class="year">
          <div>年分</div>
          <Datepicker style="width:320px"/>
        </div>
        <div class="btnGroup">
          <button class="clean">清除</button>
          <button class="send">送出</button>
        </div>
      </div>
    </div>
    <footerComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbarComponent from '@/components/BaseComponent/navbarComponent.vue'
import footerComponent from '@/components/BaseComponent/footerComponent.vue'

//Vue 日期選擇器
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';

export default {
  name: 'SearchView',
  components: {
    navbarComponent,
    footerComponent,
    Datepicker: VueDatepickerUi
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap');
  .mainContainer{
    max-width:100%;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
  }
  .topPart{
    max-width:100%;
    height:45px;
    margin-top:70px;
    margin-left:120px;
    margin-right:120px;
  }
  .title{
    height:54px;
    text-align: left;
    font-weight: 900;
    font-size: 28px;
    line-height: 28px;
    color: #000000;
    border-bottom:2px solid #C0C4CC;
  }
  .brownLine{
    position: absolute;
    left:120px;
    top:204px;
    width:50px;
    height:2px;
    background-color: #B89068;
  }
  .searchBar{
    width:474px;
    height:220px;
    margin-top:90px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .area{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  select {
    color: #7D8087;
    margin-right: 96px;
    width: 224px;
    height: 3em;
    padding: 8px;
    border-radius: 5px;
    border:1px solid #D8DCE5
  }
  .year{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btnGroup{
    width:228px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content: space-between;
  }
  .clean{
    width:95px;
    height:40px;
    border-radius: 40px;
    border:1px solid #124E96;
    background-color:rgba(160, 184, 213, 0.3);
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    color:#124E96;
  }
  .send{
    width:95px;
    height:40px;
    border-radius: 40px;
    border:transparent;
    background-color: #124E96;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    color: #fff;;
  }
  /* 使用:deep()，代表修改子组件内的样式*/
  :deep() input{
    width:100%;
  }
</style>