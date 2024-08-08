<template>
  <div class="app-container">
    <div class="sidebar">
      <h3>DASHBOARD</h3>
      <div class="sidebar-content">
        <ul>
          <li class="nav-item">
            <i class="bi bi-house-fill"></i>
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <i class="bi bi-person-lines-fill"></i>
            <router-link to="/">Profile</router-link>
          </li>
          <li class="nav-item">
            <i class="bi bi-person-circle"></i>
            <router-link to="/">About</router-link>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="container-fluid main">
      <div class="d-flex justify-content-center">
        <div class="row pt-5 pb-5">
          <div class="d-flex justify-content-center"></div>
          <div class="content">Disney Movies</div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="img-container shadow">
            <img
              :src="require('@/assets/tangled.jpg')"
              alt="Tangled"
              class="img-dash"
            />
            <div class="mt-3">Tangled</div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="img-container shadow">
            <img
              :src="require('@/assets/snow white.jpg')"
              alt="Snow White"
              class="img-dash"
            />
            <div class="mt-3">Snow White</div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="img-container shadow">
            <img
              :src="require('@/assets/cinderella.jpg')"
              alt="Luca"
              class="img-dash"
            />
            <div class="mt-3">Luca</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  background-image: url("@/assets/images.jpg"); /* Correct path to the image */
  background-size: cover; /* Ensure the background image covers the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat;
}

.sidebar {
  width: 200px;
  background-color: #dac9f580;
  transition: width 0.3s;
}

.sidebar-content {
  padding: 0 20px;
}

.sidebar-content ul {
  list-style: none;
  padding: 0;
}

.sidebar-content li {
  margin: 15px 0;
}

.main {
  flex: 1; /* Take up the remaining space */
  padding: 20px;
}

.img-dash {
  max-width: 100%; /* Make sure the image is responsive */
  height: auto; /* Maintain aspect ratio */
  margin-top: 20px; /* Add margin at the top */
  border-radius: 10px; /* Optional: rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.img-container {
  margin-bottom: 20px;
}

.content {
  text-align: center;
  font-size: 2rem; /* Larger text size */
  color: #0e0909; /* Text color */
  padding: 10px 500px; /* Padding around the text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin-top: 10px; /* Space above the content */
}
</style>
