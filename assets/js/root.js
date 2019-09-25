Vue.component('skills-template', {
    template: '#post-skill',
    props: ['name', 'progress']
})
var skills = new Vue({
    el: '#skills',
    data: {
        profesionals: [{
            id: 1,
            text: 'HTML & HTML5',
            percent: '90'
        }, {
            id: 2,
            text: 'CSS & CSS3',
            percent: '85'
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
            percent: '50'
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
            percent: '95'
        }, {
            id: 10,
            text: 'Communication',
            percent: '80'
        }, {
            id: 11,
            text: 'Teamwork',
            percent: '65'
        }, {
            id: 12,
            text: 'Dedication',
            percent: '80'
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
        }, {
            id: 18,
            text: 'Figma / Avocode',
            percent: '75'
        }]
    },


})

var contact = new Vue({
    el: '#contact',
    data: {
        name: '',
        content: '',
        subject: ''
    }
})
const app = new Vue({
    el: '#app',
    data: {
        // custom: {
        //     duration: 500, // Animation speed
        //     offset: 0, // Offset from element, you can use positive or negative values
        //     container: '', // the scroll container, default is window,use document.querySelector to query the Element
        // }
    }
})