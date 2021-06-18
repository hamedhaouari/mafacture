import firebase from 'firebase'

export default {

methods: {

    logout: function () {
    firebase.auth().signOut().then(() => {
        this.$router.replace('login')
    })
}
}
}
