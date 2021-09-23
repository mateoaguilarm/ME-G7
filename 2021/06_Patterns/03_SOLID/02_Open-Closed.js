
// Sin Principio

class Payment {
    constructor(paymentType) {
        this.paymentType = paymentType;
    }

    pay(amount) {
        if (this.paymentType === `paypal`) {
            return `Paying $${amount} with PayPal`;
        }
        if (this.paymentType === `stripe`) {
            return`Paying $${amount} with Stripe`;
        }
    }
}


// Aplicando Principio

class iPayment {
    pay() {
        return `Paying`;
    }
    
}

class PayPal extends iPayment {
    pay(amount) {
        return`Paying $${amount} with PayPal`;
    }
}

class Stripe extends iPayment {
    pay(amount) {
        return`Paying $${amount} with Stripe`;
    }
}
