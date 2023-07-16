<style scoped>
li a {
  color: white !important
}

.droop li a {
  color:black !important;
}

</style>
<template>
   <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary px-5 py-3">
  <div class="container-fluid" style="color:white !important">
    <a class="navbar-brand" href="#">Launch</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="color:white !important">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" >Home</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu droop" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#testimonial">Testimonial</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#feat">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#price">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#abt">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#cnt">Contact</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
      
      <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2 rounded-pill">Login</button>
          <button type="button" class="btn btn-warning rounded-pill">Sign-up</button>
      </div>
    </div>
  </div>
</nav>
</template>