<script setup>
import {ref,reactive,onBeforeMount,onMounted} from 'vue'
import Layout from '@/views/layouts/admin.vue'
import axios from 'axios'

// let products = reactive([
//     {
//         title: 'product1',
//         description: 'detail1'
//     },
//     {
//         title: 'product2',
//         description: 'detail2'
//     },
// ])

const isSpin = ref(true);

let products = reactive({})

onBeforeMount(async ()=> {
    let res = await axios.get('https://fakestoreapi.com/products');
    products = res.data;
    isSpin.value = false;
    console.log(products);

})

const searchField = ["player","team","country","lastAttended"];
const searchValue = ref();


const Header = [
  { text: "Title", value: "title" },
  { text: "TEAM", value: "team"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
  { text: "NUMBER", value: "number"},
];

</script>
<template>



<Layout>
    <h1 v-if="isSpin">Loading..</h1>
<div v-else class="container-fluid">
    <div class="row g-3 px-5">
        <div class="">
            <router-link to="/product/add" class="btn btn-success" style="float: right;">Add Product</router-link >
        </div>
    </div>
    <div class="row g-3 p-5">
        <table class="table table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Title</td>
                    <td>Thumbnail</td>
                    <td>Unit Price</td>
                    <td>Stock Quantity</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,index) in products" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{product.title}}</td>
                    <td><img :src="product.image" style="width:100px;height:100px"></td>
                    <td>{{product.price}}</td>
                    <td>{{ product.category }}</td>
                    <td><RouterLink class="btn btn-sm btn-info" :to="`/product/${product.id}`">View Detail</RouterLink></td>
                </tr>
            </tbody>
        </table>
        <!-- <div>
                <input placeholder="Search..." class="form-control mb-2 w-auto form-control-sm" type="text" v-model="searchValue">
                <EasyDataTable buttons-pagination alternating :headers="Header" :items="Item" :rows-per-page="10" :search-field="searchField"  :search-value="searchValue">
                  <template #item-number="{ number,player }">
                    <button class="btn btn-success btn-sm" @click="itemClick(number,player)">Delete</button>
                  </template>
                </EasyDataTable>
        </div> -->
    </div>
</div>
</Layout>



</template>