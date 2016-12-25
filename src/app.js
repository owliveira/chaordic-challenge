function X(response){
    var data = response.data;

    insertReferenceProduct(data.reference.item);
    insertInterestProducts(data.recommendation, data.widget.size);

    function insertReferenceProduct(referenceProduct) {
        var youVisitedContainer = document.getElementById('you-visited');
        var referenceProductElement = generateProductElement(referenceProduct);

        youVisitedContainer.appendChild(referenceProductElement);
    }

    function insertInterestProducts(products, quantity) {
        var interestProductContainer = document.getElementById('may-like').getElementsByClassName('scrollable-container')[0];
        var interestProductElement;

        for (var i = 0; i < quantity; i++) {
            interestProductElement = generateProductElement(products[i]);
            interestProductContainer.appendChild(interestProductElement);
        }
    }

    function generateProductElement(product) {
        var productContainerElement = document.createElement('div');
        var productContainerInnerHTML = [
            '<div class="product-image-container">',
                '<img class="product-image" src="' + product.imageName + '">',
            '</div>',
            '<div class="product-details-container">',
                '<div class="product-name">' + truncateProductName(product.name) + '</div>',
                getOldPriceHTML(product.oldPrice),
                '<div class="price red-ink">Por: <strong>' + product.price + '</strong></div>',
                getPaymentContition(product.productInfo),
            '</div>'
        ].join('');

        productContainerElement.classList.add('product-container');
        productContainerElement.innerHTML = productContainerInnerHTML;

        return productContainerElement;
    }

    function truncateProductName(name) {
        return name.slice(0, 70).concat(' ...');
    }

    function getOldPriceHTML(oldPrice) {
        if (oldPrice) {
            return '<div class="old-price">De: ' + oldPrice + '</div>'
        }
    }

    function getPaymentContition(productInfo) {
        if(productInfo && productInfo.paymentConditions) {
            return '<div class="payment-conditions red-ink">' + productInfo.paymentConditions + '</div>';
        }
    }
}
