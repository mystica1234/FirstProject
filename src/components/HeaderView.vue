<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <img src="@/assets/lo.png" alt="logo" class="img-logo" />
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/"
              >Home
              <span class="visually-hidden">(current)</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="sign-up">SignUp</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-sm-2"
            type="search"
            placeholder="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style scoped>
.header {
  background-color: rgb(147, 194, 194);
  padding: 10px;
  height: 50px;
  text-align: center;
  color: white;
}
.img-logo {
  float: center;
  margin-left: 10px;
  width: 100px;
  height: auto;
}
</style>
