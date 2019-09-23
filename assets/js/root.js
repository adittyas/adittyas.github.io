Vue.component('skills-template', {
    template: '#post-skill',
    props: ['name', 'progress', 'key']
})
var skills = new Vue({
    el: '#skills',
    data: {
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
            percent: '60'
        }],
        personal: [{
            id: 9,
            text: 'Active Learning',
            percent: '90'
        }, {
            id: 10,
            text: 'Communication',
            percent: '80'
        }, {
            id: 11,
            text: 'Teamwork',
            percent: '60'
        }, {
            id: 12,
            text: 'Dedication',
            percent: '70'
        }, {
            id: 13,
            text: 'Creativity',
            percent: '65'
        }],
        software: [{
            id: 14,
            text: 'visual studio code',
            percent: '90'
        }, {
            id: 15,
            text: 'git',
            percent: '80'
        }, {
            id: 16,
            text: 'microsoft office',
            percent: '90'
        }, {
            id: 17,
            text: 'mySql',
            percent: '70'
        }]
    },


})