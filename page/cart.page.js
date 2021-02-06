
class CartPage {
    constructor(){

        this.locator = {
            clickable : {
                proceed_check_out : '//p[contains(@class, \'cart_navigation\')]//span[contains(text(),\'Proceed to checkout\')]',
                agree_term_service : '.checker',
                pay_by_check : '.cheque',
                confirm_my_order: '//span[contains(text(),\'confirm\')]',
            },
            labels : {
                total_price : '#total_price',
                alert_message : '//p[contains(@class, \'alert\')]'
            }
        }

    }
}

module.exports = new CartPage();
