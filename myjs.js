const {createApp} = Vue;

createApp({
    data(){
        return {
            msg: 'ciao amico',
            immagineVue: 'https://miro.medium.com/v2/resize:fit:500/1*CPDIH8BWrGipHRJ6o6E2Vw.png'
        }
    },

}).mount('#container');

