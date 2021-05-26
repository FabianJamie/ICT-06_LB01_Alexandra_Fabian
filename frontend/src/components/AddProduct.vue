<template>
  <div>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 


export default {
  name: "AddProduct",
  data() {
    return {
      productName: "",
      productPrice: "",
      //@Work hier noch unsere zusätzlichen Felder hinzufügen
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
        //@Work hier noch unsere zusätzlichen Felder hinzufügen, mit der GENAU gleichen Schreibweise wie im DataGrip

          product_name: this.productName,
          product_price: this.productPrice,
        });
        //@Work hier noch unsere zusätzlichen Felder hinzufügen
        this.productName = "";
        this.productPrice = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>