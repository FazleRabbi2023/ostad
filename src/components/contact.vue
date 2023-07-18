<script setup>
import { contact } from '../data/data'
</script>

<template>
    <!--Section: Contact v.2-->
    <div  class="card container px-4 py-5 shadow-lg my-5" id="cnt">
    <header>
    

    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1  class="display-4 fw-normal">{{contact.title}}</h1>
      <p class="fs-5 text-muted">{{contact.detail}}</p></div>
    </header>
    <!--Section description-->

    <div class="row p-5">

        <!--Grid column-->
        <div class="card col-md-9 mb-md-0 mb-5 shadow-lg p-5">
            <form id="contact-form" name="contact-form" :action="contact.formAction" method="POST">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6 pb-3">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6 pb-3">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control">
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row pb-3">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class=" card col-md-3 text-start shadow-lg py-5" >
            <ul class="mb-0">
                <li v-for="(value,index) in contact.address" :key="key"><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>{{index}}:{{ value }}</p>
                </li>
            </ul>
        </div>
        <!--Grid column-->

    </div>

</div>
<!--Section: Contact v.2-->
</template>