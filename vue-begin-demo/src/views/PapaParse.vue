<template>
  <div class="papaParse">
    <h2>PapaParse</h2>
    <button @click="papaParse">PapaParse</button>
    <input type="file" name="file" id :v-model="file" @change="papaParse" />
  </div>
</template>

<script>
import Papa from 'papaparse'

export default {
  name: 'PapaParse',
  data () {
    return {
      file: {}
    }
  },
  methods: {
    papaParse (e) {
      console.log(e.target.files[0])
      // var results = Papa.parse(e.target.files[0]);
      Papa.parse(e.target.files[0], {
        complete: function (results) {
          console.log(results);
        }
      });
      // console.log(results)
      // console.log(results.meta.delimiter);
      // Papa.parse("http://example.com/file.csv", {
      //   download: true,
      //   complete: function (results) {
      //     console.log(results);
      //   }
      // });
    },
  },
}
</script>
