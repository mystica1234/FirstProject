<template>
  <div id="main-header">
    <div class="container-fluid">
      <div class="d-flex justify-content-center">
        <img src="@/assets/lo.png" class="img" />
      </div>
      <div class="d-flex justify-content-center"></div>
      <div class="content">
        <strong>Explore Disney Movies</strong>
      </div>
      <div class="row pt-5">
        <div class="col-md-6 col-sm-12 col-lg-3">
          <div class="form-floating mb-2">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Name"
            />
            <label for="floatingInput">Name</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-lg-3">
          <div class="form-floating mb-2">
            <input
              type="email"
              class="form-control"
              id="floatingInput2"
              placeholder="Email"
            />
            <label for="floatingInput2">Email</label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="fs-1 text-center pt-5">
      <strong>Browse by Category</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style scoped>
#main-header {
  background-image: url(@/assets/images.jpg);
  background-size: cover;
  width: 100%;
  height: 600px;
  align-items: center;
  display: flex;
}
.multi {
  height: calc(3.5rem + 2px);
  width: 100%;
}
.multi:focus {
  border: 1px solid#21afb4;
}
.img-container {
  position: relative;
  text-align: center;
  color: white;
}

.img-container img {
  width: 100%;
  min-height: 300px;
}
.img {
  max-width: 150px; /* Adjust the size as needed */
  margin-top: 5px;
  margin-bottom: 20px;
}
.content {
  text-align: center;
  font-size: 2rem; /* Larger text size */
  color: #000000; /* White text color */
  padding: 10px 20px; /* Padding around the text */
  box-shadow: 0 4px 8px rgba(5, 0, 0, 0.1); /* Subtle shadow */
  margin-top: 20px;
}
</style>
