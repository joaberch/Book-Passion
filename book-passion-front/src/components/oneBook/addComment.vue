<script setup>
import axios from "axios";
import { decodeToken } from "@/utils/decodeTokenTool.mjs";
import { defineEmits, ref } from "vue";

const props = defineProps(["bookId"])
const emit = defineEmits(["update-rate"])

let rate = ref(0);
let commentTitle = ref("");
let commentContent = ref("");

function postComment() {

    if (commentTitle.value == '') return;
    if (commentContent.value == '') return;
    if (rate.value == 0) return;

    const APICall = 'http://localhost:3000/api/comments'

    const utilisateurId = decodeToken(localStorage.token).userId

    axios.post(APICall,
        {
            title: commentTitle.value,
            comment: commentContent.value,
            rate: rate.value,
            fk_user: utilisateurId,
            fk_book: parseInt(props.bookId),
        },
        {
            headers: {
                Authorization:
                    "Bearer " + localStorage.token,
            }

        })
        .then((result) => {
            emit('update-rate', rate.value)
            location.reload()
        })
        .catch((err) => {
            console.log(err);
        });

}
</script>
<template>
    <div class="addComment">
        <div class="input">
            <form @submit.prevent="postComment()">
                <label for="Title" id="commentTitle">Titre du commentaire :</label>
                <input type="text" id="commentTitleInput" v-model="commentTitle">

                <label id="commentNote">Note :</label>
                <input type="number" min="1" max="5" value="1" v-model="rate">

                <label for="comment" id="commentComment">Commentaire :</label>
                <input id="commentCommentInput" type="text" v-model="commentContent">

                <button>Envoyer</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
.colorYellow {
    color: yellow;
}

button {
    height: 50%;
}

input,
button {
    width: 50%;
    margin-left: 25%;
}

.input > input {
    display: flex;
    justify-content: center;
}

.input >p,
.input >input,
.input >button,
.input >label {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    grid-row: 3;
    grid-column: 2;
}

#commentCommentInput {
    grid-row: 4;
    grid-column: 1;
}

#commentComment {
    grid-row: 3;
    grid-column: 1;
}

#commentNoteInput {
    grid-row: 2;
    grid-column: 2;
}

#commentNote {
    grid-row: 1;
    grid-column: 2;
}

#commentTitleInput {
    grid-row: 2;
    grid-column: 1;
}

#commentTitle {
    grid-row: 1;
    grid-column: 1;
}

input {
    border-radius: 10px;
    outline: none;
    color: black;
}

* {
    color: white;
    font-family: kanit;
}

p,
label {
    color: black;
}

.addComment {
    background-color: rgb(128, 201, 156);
    border-radius: 30px 30px 0 0;
    width: 50%;

}

.input form {
    display: grid;
    grid-template: repeat(4, 1fr) 25px / 50% 50%;
}

.input {
    width: 90%;
}

/*Snippet*/

button {
    background-color: #EA4C89;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

button:hover,
button:focus {
    background-color: #F082AC;
}

button {
    margin-left: 25%;
}
</style>