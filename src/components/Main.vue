<script setup>
    import {faqs, features, details, pricing_plans, contact} from '../../public/js/data'
</script>
<template>
    <main id="main">
        <!-- ======= App Features Section ======= -->
        <section id="features" class="features">
            <div class="container">

                <div class="section-title">
                    <h2>App Features</h2>
                    <p>{{ features.description }}</p>
                </div>

                <div class="row no-gutters">
                    <div class="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
                    <div class="content d-flex flex-column justify-content-center">
                        <div class="row">
                            <div class="col-md-6 icon-box" data-aos="fade-up" v-for="(feature,index) in features.list" :key="index">
                                <i :class="feature.icon_class"></i>
                                <h4>{{ feature.title }}</h4>
                                <p>{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    <img :src="features.image.src" :class="features.image.class" :alt="features.image.alt">
                    </div>
                </div>

            </div>
        </section><!-- End App Features Section -->

        <!-- ======= Details Section ======= -->
        <section id="details" class="details">
        <div class="container">

        <div class="row content">
            <div class="col-md-4" data-aos="fade-right">
            <img :src="details.image.src" :class="details.image.class" :alt="details.image.alt">
            </div>
            <div class="col-md-8 pt-4" data-aos="fade-up">
                <h3>{{ details.title }}</h3>
                <p class="fst-italic"> {{ details.description }} </p>
                <ul>
                    <li v-for="(list, index) in details.lists" :key="index"><i class="bi bi-check"></i> {{ list }}</li>
                </ul>
                <p>{{ details.footer }}</p>
            </div>
        </div>

        <div class="row content">
            <div class="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src="/img/details-2.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Corporis temporibus maiores provident</h3>
            <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
            </p>
            <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>
                Inventore id enim dolor dicta qui et magni molestiae. Mollitia optio officia illum ut cupiditate eos autem. Soluta dolorum repellendus repellat amet autem rerum illum in. Quibusdam occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.
            </p>
            </div>
        </div>

        <div class="row content">
            <div class="col-md-4" data-aos="fade-right">
                <img src="/img/details-3.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-8 pt-5" data-aos="fade-up">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
                <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i class="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
            <p>
                Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est.
            </p>
            <p>
                Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.
            </p>
            </div>
        </div>

        <div class="row content">
            <div class="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src="/img/details-4.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
            </p>
            <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
                <li><i class="bi bi-check"></i> Et praesentium laboriosam architecto nam .</li>
                <li><i class="bi bi-check"></i> Eius et voluptate. Enim earum tempore aliquid. Nobis et sunt consequatur. Aut repellat in numquam velit quo dignissimos et.</li>
                <li><i class="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
            </div>
        </div>

        </div>
        </section><!-- End Details Section -->

        <!-- ======= Gallery Section ======= -->
        <section id="gallery" class="gallery">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Gallery</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
            </div>

            <div class="container-fluid" data-aos="fade-up">
                <div class="gallery-slider swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><a href="img/gallery/gallery-1.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-1.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-2.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-2.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-3.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-3.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-4.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-4.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-5.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-5.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-6.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-6.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-7.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-7.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-8.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-8.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-9.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-9.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-10.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-10.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-11.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-11.png" class="img-fluid" alt=""></a></div>
                        <div class="swiper-slide"><a href="img/gallery/gallery-12.png" class="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-12.png" class="img-fluid" alt=""></a></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section><!-- End Gallery Section -->

        <!-- ======= Testimonials Section ======= -->
        <section id="testimonials" class="testimonials section-bg">
            <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Testimonials</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <div class="testimonial-item">
                    <img src="/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonial-item">
                    <img src="/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonial-item">
                    <img src="/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonial-item">
                    <img src="/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="testimonial-item">
                    <img src="/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    </div>
                </div>

                </div>
                <div class="swiper-pagination"></div>
            </div>

            </div>
        </section><!-- End Testimonials Section -->

        <!-- ======= Pricing Section ======= -->
        <section id="pricing" class="pricing">
            <div class="container">
                <div class="section-title">
                    <h2>Pricing</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="row no-gutters">
                    <div class="col-lg-4 box" data-aos="fade-right" v-for="(plan, index) in pricing_plans" :key="index">
                        <h3>{{ plan.name }}</h3>
                        <h4>{{ plan.price }}<span>per month</span></h4>
                        <ul>
                            <li v-for="(feature,index) in plan.features" :key="index"><i class="bx bx-check"></i> {{ feature }}</li>                   
                        </ul>
                        <a :href="plan.link" class="get-started-btn">Get Started</a>
                    </div>
                </div>
            </div>
        </section><!-- End Pricing Section -->

        <!-- ======= Frequently Asked Questions Section ======= -->
        <section id="faq" class="faq section-bg">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="accordion-list">
                    <ul>
                        <li data-aos="fade-up" v-for="faq in faqs" :key="faq.id">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" :data-bs-target="'#accordion-list-'+faq.id">{{ faq.question }} <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div :id="'accordion-list-' + faq.id" class="collapse show" data-bs-parent=".accordion-list">
                            <p>{{ faq.answer }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section><!-- End Frequently Asked Questions Section -->

        <!-- ======= Contact Section ======= -->
        <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Contact</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-6 info">
                            <i class="bx bx-map"></i>
                            <h4>Address</h4>
                            <p>{{ contact.address }}</p>
                        </div>
                        <div class="col-lg-6 info">
                            <i class="bx bx-phone"></i>
                            <h4>Call Us</h4>
                            <p>{{ contact.phone }} </p>
                        </div>
                        <div class="col-lg-6 info">
                            <i class="bx bx-envelope"></i>
                            <h4>Email Us</h4>
                            <p>{{ contact.phone}}</p>
                        </div>
                        <div class="col-lg-6 info">
                            <i class="bx bx-time-five"></i>
                            <h4>Working Hours</h4>
                            <p>{{ contact.working_hours }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form" data-aos="fade-up">
                        <div class="form-group">
                            <input placeholder="Your Name" type="text" name="name" class="form-control" id="name" required>
                        </div>
                        <div class="form-group mt-3">
                            <input placeholder="Your Email" type="email" class="form-control" name="email" id="email" required>
                        </div>
                        <div class="form-group mt-3">
                            <input placeholder="Subject" type="text" class="form-control" name="subject" id="subject" required>
                        </div>
                        <div class="form-group mt-3">
                            <textarea placeholder="Message" class="form-control" name="message" rows="5" required></textarea>
                        </div>
                        <div class="my-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
        </div>
        </section><!-- End Contact Section -->
    </main><!-- End #main -->
</template>

<style scoped></style>