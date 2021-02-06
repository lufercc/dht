class SingInPage{
    constructor() {
        this.go = '.login'

        this.locator = {
            field : {
                email : '#email',
                password : '#passwd'
            },
            clickable : {
                sing_in_button : '#SubmitLogin'
            }
        }
    }
}

module.exports = new SingInPage();
