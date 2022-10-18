<template>
  <div>{{ cls.標題 }}</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'MagazinePageView',
  data() {
    return {
      cls: {},
    };
  },
  async mounted() {
    let { data } = await axios.get(
      "https://www.hpa.gov.tw/wf/newsapi.ashx"
    );
    for (let i = 0; i < data.length; i++) {
      if (i == this.$route.params.id) {
        this.cls = data[i];
      }
    }
  },
}
</script>
