Vue.component('skills-template', {
    template: '#post-skill',
    props: ['name', 'progress']
})
var skills = new Vue({
    el: '.skills-item',
    data: {
        determinate: document.querySelectorAll('.determinate'),
        profesionals: [{
                id: 1,
                text: 'HTML & HTML5',
                percent: '80'
            }, {
                id: 2,
                text: 'CSS & CSS3',
                percent: '80'
            }, {
                id: 3,
                text: 'Javascript',
                percent: '80'
            }, {
                id: 4,
                text: 'PHP',
                percent: '75'
            }, {
                id: 5,
                text: 'jQuery',
                percent: '85'
            }, {
                id: 6,
                text: 'vue.js',
                percent: '60'
            }, {
                id: 7,
                text: 'Codeignitier',
                percent: '70'
            }, {
                id: 8,
                text: 'Laravel',
                percent: '70'
            }

        ]
    },
    personal: [{
            text: 'HTML & HTML5',
            percent: '80'
        }, {
            text: 'CSS & CSS3',
            percent: '80'
        }, {
            text: 'Javascript',
            percent: '80'
        }, {
            text: 'PHP',
            percent: '75'
        }, {
            text: 'jQuery',
            percent: '85'
        }, {
            text: 'vue.js',
            percent: '60'
        }, {
            text: 'Codeignitier',
            percent: '70'
        }, {
            text: 'Laravel',
            percent: '70'
        }

    ]

})