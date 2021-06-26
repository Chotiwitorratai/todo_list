<template>
<div class="home">
    <div id="app" class="flex w-screen h-auto p-4">
        <div class="container ">
            <h1 class="flex-1 font-sans font-thin text-center text-5xl text-grey-darkest mb-5">What you gonna do?</h1>
            <div class="input-group items-center mb-3 flex items-center">
                <input type="text" class="form-control" placeholder="New Todo" v-model="newTodoInput" v-on:keydown.enter="addTodo(newTodoInput)">
                <button class=" btn btn-primary" type="button" @click="addTodo(newTodoInput)">เพิ่มเข้าไปเล้ย</button>
            </div>
            <ul class="todos-list mb-5">
                <li class="todo-item" v-for="(todo , index) in todo" :key="todo + index">
                    <span class="todo-content" :class="{ done: todo.done }" @click="markItDone(todo)">{{ todo.text }}</span>
                    <span class="btn btn-success btn-todo btn-done" v-if="!todo.done" @click="markItDone(index)">เสร็จละ</span>
                    <span class="btn btn-danger btn-todo" @click="deleteTodo(index)">ไม่ทำละ</span>
                </li>
            </ul>
            <div>
                <router-link to='/'>
                    <button class=" btn btn-outline-primary btn-lg" style="float:left;" type="button">ไปหน้าต่อไปกันเล้ยย</button>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Todo',
    data() {
        return {
            newTodoInput: "",
            todo: this.$store.state.todos,
        }
    },
    methods: {
        addTodo(newTodo) {
            this.$store.commit("addTodo", newTodo);
            this.newTodoInput =  ''
        },
        markItDone(index) {
            this.$store.commit("missionCompleted", index);
        },
        deleteTodo(index) {
            this.$store.commit("deleteTodo", index);
        }
    },
}
</script>

<style scoped>
.input-group {
    width: 80%;
    margin: auto;
}

#app {
    margin-top: 100px;
}

.btn-todo {
    float: right;
    margin-left: 5px;
}

.todo-item {
    margin-top: 20px;
}

.done {
    text-decoration: line-through;
    color: #dadadc;
    font-weight: normal
}
</style>
