<template>
    <img alt="logo" src="../assets/lo.png" class="image-style">
    <h1 class="heading"> SignUp </h1>
    <div class="register">
        <input type="text" placeholder="Enter Name">
        <input type="text" placeholder="Enter Email">
        <input type="password" placeholder="Enter Password">
        <button> SignUp</button>
    </div>
</template>

<script>
export default {
    name:'SignUp'
}
</script>
<style scoped>
.heading{
    color: aquamarine;
}
.image-style {
        float: center;
        margin-left: 10px;
        width:100px;
        height:auto;
        }
.register input {
    width: 300px;
    height:40px;
    padding-left:20px;
    display: block;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:30px;
    border: 1px solid skyblue;
}
.register button {
    width:200px;
    height:50px;
    border:1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>