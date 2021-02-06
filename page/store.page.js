
class storepage {
    constructor(props) {

        this.url = 'http://automationpractice.com/index.php'
        this.go = '#header_logo'

        this.locator = {
            hover : {
                store_item : '//ul[@id=\'homefeatured\']//img[@title=\'_text_\']'
            },
            clickable : {
                add_to_card : '//ul[@id=\'homefeatured\']//a[contains(text(),\'_text_\')]//' +
                    'ancestor::div[@class=\'product-container\']//a[contains(@class, \'add_to_cart_button\')]',
                proceed_check_out : 'a[title=\'Proceed to checkout\']'
            }
        }
    }

}

module.exports = new storepage();
