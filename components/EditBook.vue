<template>
    <div>
        <h1>Edit Books</h1>
        <form @submit.prevent="updateBook">
            
            <p>
                Edit id:
                <input type="text" v-model="id">
            </p>
            <p>
                Edit title:
                <input type="text" v-model="titulo">
            </p>
            <p>
                Edit autor:
                <input type="text" v-model="autor">
            </p>
            <p>
                Edit editorial:
                <input type="text" v-model="editorial">
            </p>
            <p>
                Edit genre:
                <input type="text" v-model="clasificacion">
            </p>
            <button type="submit">Save</button>
        </form>




        <hr>

        <button @click="deleteb = !deleteb" v-if="deleteb===false">Delete</button>
        <div v-if="deleteb===true">
            <h4>¿Are you sure?</h4>
            <button @click="deleteBook">Yes</button> 
            <button @click="deleteb = !deleteb">No</button>
        </div>
    </div>
</template>

<script>
 import { db } from '../firebase'
  import router from '../router'
    export default {
        name: 'EditBook',
         data(){
            return {
                id: "",
                titulo: "",
                autor: "",
                editorial: "",
                clasificacion: "",
                deleteb: false
            }
        },
        created(){
           this.getBook(); 
        },
        methods:{
            async getBook() {
                const id = this.$route.params.id;
                const data = await db.collection("books").doc(id).get()
                const book = (data.data())
                this.id = book.id;
                this.titulo = book.titulo;
                this.autor = book.autor;
                this.editorial = book.editorial;
                this.clasificacion = book.clasificacion;
            },
            async updateBook() {
                const id = this.$route.params.id;
                await db.collection('books').doc(id).set({
                    id: this.id,
                    titulo: this.titulo,
                    autor: this.autor,
                    editorial: this.editorial,
                    clasificacion: this.clasificacion
                })
                router.push("/");
            },
            async deleteBook() {
                const id = this.$route.params.id;
                await db.collection('books').doc(id).delete();
                router.push("/");
            }
        }
    }
</script>