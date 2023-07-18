const adv = [
    {
        title: 'Grow your buisiness',
        detail: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
    },
    {
        title: 'Build Products',
        detail: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
    },
    {
        title: 'Success Every Day',
        detail: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
    },
    {
        title: 'Bring Ideas to Life',
        detail: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
    },
]

const pricing= [
    {
        title: "Free",
        rate: "$0",
        users: '10 users included',
        storage: "2 GB of storage<br>Email support<br>Help center access",
        golink:"Sign up for free"
    },
    {
        title: "Pro",
        rate: "$12",
        users: '20 users included',
        storage: "10 GB of storage<br>Email support<br>Help center access",
        golink:"Get Started"
    },
    {
        title: "Enterprize",
        rate: "$20",
        users: '30 users included',
        storage: "15 GB of storage<br>Email support<br>Help center access",
        golink:"Contact Us"
    },
]

const hero = {
    title: "Promote Your Products by Colorlib",
    detail: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
    imageLink: "https://preview.colorlib.com/theme/launch/images/market-launch-pana.svg",
    buttons: [
        {
            text: "See Features",
            class:"rounded-pill btn btn-primary btn-lg px-4 me-md-2 fw-bold"
        },
        {
            text: "Pricing",
            class:"rounded-pill btn btn-outline-secondary btn-lg px-4"
        }
    ]
}

const features = {
    title: "Features",
    detail: "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p><ul><li>Grow Your Buisiness<br></li><li>Build Products<br></li><li>Success Every Day<br></li><li>Bring Ideas To Life<br></li></ul>",
    imageLink: "https://preview.colorlib.com/theme/launch/images/dashboard.jpg",
    buttons: [
        {
            text: "See Features",
            class:"rounded-pill btn btn-primary btn-lg px-4 me-md-2 fw-bold"
        },
        {
            text: "Pricing",
            class:"rounded-pill btn btn-outline-secondary btn-lg px-4"
        }
    ]

}

const about = {
    title: "About Us",
    detail: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
    imageLink: "https://preview.colorlib.com/theme/launch/images/about.svg",
    videoLink: "https://www.youtube.com/watch?v=mwtbEGNABWU&t=9s"
}

const contact = {
    title: "Contact Us",
    detail: "Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.",
    address: {
        city: "San Francisco, CA 94126, USA",
        phone: "+ 01 234 567 89",
        email: "contact@mdbootstrap.com"
    },
    formAction: "/url"
}

const news = {
    title: "News",
    detail: "Far from the countries Vokalia and Consonantia",
    content: [
        {
            newsTitle: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            imageLink: "https://st2.depositphotos.com/6235482/9903/i/600/depositphotos_99031172-stock-photo-daily-news-and-coffee.jpg",
            link: "url",
            tag: "news"
        },
        {
            newsTitle: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            imageLink: "https://st.depositphotos.com/2288675/2452/i/600/depositphotos_24522067-stock-photo-good-news-daily-newspaper-headline.jpg",
            link: "url",
            tag: "news"
        },
        {
            newsTitle: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            imageLink: "https://media.istockphoto.com/id/503437085/photo/daily-newspaper-mock-up-with-fake-articles.jpg?s=612x612&w=0&k=20&c=ozyXfuMumr7B9Px6IJPE1gekaYFGQaESBUNsDfFc-14=",
            link: "url",
            tag: "news"
        },
        {
            newsTitle: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            imageLink: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg",
            link: "url",
            tag: "news"
        },
        {
            newsTitle: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            imageLink: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            link: "url",
            tag: "news"
        },
        {
            newsTitle: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            imageLink: "https://s.abcnews.com/images/US/abcnl__NEW_streamingnow_1664457649883_hpMain_16x9_608.jpg",
            link: "url",
            tag: "news"
        }
    ]
}

const footers = {
    company: {
        logo: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-black.svg",
        name: "Boostrap",
        designer: 'Designed and built with all the love in the world by the <a href="/docs/5.0/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.',
        lisence: 'Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.',
        version: 'Currently v5.0.2.',
        analytics: 'Analytics by <a href="https://usefathom.com/ref/ADZSBE" target="_blank" rel="noopener">Fathom</a>.'
    },
    Links: [
        {
            text: 'Home',
            link: "#"
        },
        {
            text: 'Docs',
            link: "#"
        },
        {
            text: 'Examples',
            link: "#"
        },
        {
            text: 'Themes',
            link: "#"
        },
        {
            text: 'Blog',
            link: "#"
        },
        {
            text: 'Swag Store',
            link: "#"
        },
    ],
    Guides: [
        {
            text: 'Getting Started',
            link: "#"
        },
        {
            text: 'Starter Template',
            link: "#"
        },
        {
            text: 'Webpack',
            link: "#"
        },
        {
            text: 'Percel',
            link: "#"
        }
    ],
    Projects: [
        {
            text: 'Bootstrap 5',
            link: "#"
        },
        {
            text: 'Tailwind css',
            link: "#"
        },
        {
            text: 'Css Grid',
            link: "#"
        },
        {
            text: 'Laravel',
            link: "#"
        },
        {
            text: 'PHP',
            link: "#"
        },
        {
            text: 'Photoshop',
            link: "#"
        },
    ],
    Community: [
        {
            text: 'Issues',
            link: "#"
        },
        {
            text: 'Discussion',
            link: "#"
        },
        {
            text: 'Corporate Sponsors',
            link: "#"
        },
        {
            text: 'Stack Overflow',
            link: "#"
        },
        {
            text: 'Open Collective',
            link: "#"
        }
    ]
}

export { adv, pricing, hero, features, about, contact, news, footers }
