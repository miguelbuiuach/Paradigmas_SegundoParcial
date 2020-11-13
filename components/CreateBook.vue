<template>
    <div>
        <h1>Create books</h1>

        <form @submit.prevent="addBook"> 
            <p>
                Book's id number:
                <input type = "text" v-model = "id">
            </p>

            <p>
                Book's title:
                <input type = "text" v-model = "titulo">
            </p>

            <p>
                Book's autor:
                <input type = "text" v-model = "autor">
            </p>

            <p>
                Book's editorial:
                <input type = "text" v-model = "editorial">
            </p>

            <p>
                Book's genre:
                <input type = "text" v-model = "clasificacion">
            </p>

            <button type="submit">Save</button> 
        </form>

    </div>
</template>

<script>
    import{db} from '../firebase'
    import router from '../router'
    export default {
        name: "BookCreate",
        data(){
            return {
                id : "",
                titulo : "",
                autor : "",
                editorial : "",
                clasificacion : ""
            }
        },
        methods: {
            async addBook(){
                await db.collection('books').add(
                    {
                        id : this.id,
                        titulo : this.titulo,
                        autor : this.autor,
                        editorial : this.editorial,
                        clasificacion : this.clasificacion
                    })
                this.id=""; 
                this.titulo = "";
                this.autor = "";
                this.editorial = "";
                this.clasificacion = "";
                router.push("/")
            }
        }
    }
</script>