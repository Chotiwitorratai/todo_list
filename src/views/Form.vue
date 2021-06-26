<template>
<div class="container" style="margin-top: 100px;">
    <div class="row">
        <h1 class="flex-1 font-sans font-thin text-center text-5xl text-grey-darkest mb-5">Form</h1>

        <form id="form" @submit="sentForm">
            <div class="form mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="form.name" name="name" placeholder="Your name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="form.email" name="email" placeholder="Your email">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone number</label>
                <input type="text" class="form-control" id="phone" name="phone" v-model="form.phone" placeholder="Your Phone number">
            </div>
            <div class="mb-5">
                <button class=" btn btn-primary" value="Submit" type="submit">บันทึกไปเล้ย</button>
            </div>
            <div class="output mb-5">
                <h1 class="flex-1 font-sans font-thin text-center text-5xl text-grey-darkest mb-5">Data</h1>

                <ul class="list-group">
                    <li class="list-group-item" v-for="data in datas" :key="data.id">Name:{{data.name}} Email:{{data.email}}Phone Number:{{data.phone}}</li>
                </ul>
            </div>
        </form>
        <router-link to='/todo'>
                    <button class=" btn btn-outline-primary btn-lg" style="float:left;" type="button">กลับดีกว่าๆ</button>
                </router-link>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Form',
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: ''
            }
        }
    },
    methods: {
        sentForm(e) {
            axios.post('https://vulcan.houseofdev.tech/training/api/user', this.form)
                .then((res) => {
                    if (res) {
                        this.getData();
                        console.log(this.items);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                e.preventDefault();
        },
        getData() {
            axios.get('https://vulcan.houseofdev.tech/training/api/user').then(res => {
                this.$store.commit("getData", res.data.data);
            })
        }
    
    },
    computed: {
        datas : function() {
            return this.$store.state.datas
        }
    }
}
</script>
