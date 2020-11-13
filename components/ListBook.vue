<template>
    <div>
        <h1>Listed Books</h1>
        <ul>
            <li v-for ="book in books" :key=book.id>
                {{book.id}} - {{book.titulo}} - {{book.autor}} - {{book.editorial}} - {{book.clasificacion}}
                - 
                <router-link :to="{name: 'EditBook', params: {id: book.id}}">Edit</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import{db} from '../firebase'
    export default {
        name: "ListBook",
        data(){
            return {
                books: []}
        },
        created(){
            this.listBooks();
        },
        methods: {
            async listBooks(){
                const data = await db.collection("books").get();
                this.books = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(this.books)
            }
        },
    }
</script>