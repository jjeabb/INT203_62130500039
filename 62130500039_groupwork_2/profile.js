    const app = {
        data() {
            return {
                name: 'Thanyaluck Ngamchaipisit',
                id: '@thanyaN',
                posts: '1039 posts',
                followers: '42.9k followers',
                following: '930 following'
            }
        }
    }
    var mountedApp = Vue.createApp(app).mount('#app')