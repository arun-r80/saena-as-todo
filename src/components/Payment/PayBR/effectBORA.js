/* global customcheckout */
/* global window.isCardNumberComplete */
  const effectBORA = 
function() {
    var customCheckout = customcheckout();
    console.log("In custom checkout", customCheckout)
    window.isCardNumberComplete = false;
    window.isCVVComplete = false;
    window.isExpiryComplete = false;
  
    var customCheckoutController = {
      init: function() {
        console.log('checkout.init()');
        this.createInputs();
        this.addListeners();
      },
      createInputs: function() {
        console.log('checkout.createInputs()');
        var options = {};
  
        // Create and mount the inputs
        options.placeholder = 'Card number';
        

      
      options.classes = {base:'bambora-base'};
        const cardNumber = customCheckout.create('card-number', options);
        console.log("Card Number Bambora component ",cardNumber);
        cardNumber.mount('#cc-number');
  
        options.placeholder = 'CVV';
        customCheckout.create('cvv', options).mount('#cc-cvv');
  
        options.placeholder = 'MM / YY';
        customCheckout.create('expiry', options).mount('#cc-expiry');
      },
      addListeners: function() {
        var self = this;
        
        // listen for submit button
        if (document.getElementById('checkout-form') !== null) {
          document
            .getElementById('checkout-form')
            .addEventListener('submit', self.onSubmit.bind(self));
        }
  
        customCheckout.on('brand', function(event) {
          console.log('brand: ' + JSON.stringify(event));
  
          var cardLogo = 'none';
          if (event.brand && event.brand !== 'unknown') {
            var filePath =
              'https://cdn.na.bambora.com/downloads/images/cards/' +
              event.brand +
              '.svg';
            cardLogo = 'url(' + filePath + ')';
          }
          console.log("In Brand Event: ", cardLogo);
          document.getElementById('cc-number').style.backgroundImage = cardLogo;
        });
        console.log("In Add Listeners");
        customCheckout.on('blur', function(event) {
          console.log('blur: ' + JSON.stringify(event));
        });
  
        customCheckout.on('focus', function(event) {
          console.log('focus: ' + JSON.stringify(event));
        });
  
        customCheckout.on('empty', function(event) {
          console.log('empty: ' + JSON.stringify(event));
  
          if (event.empty) {
            if (event.field === 'card-number') {
              console.log("Card number is empty;");
              window.isCardNumberComplete = false;
              
            } else if (event.field === 'cvv') {
              window.isCVVComplete = false;
            } else if (event.field === 'expiry') {
              window.isExpiryComplete = false;
            }
           self.setPayButton && self.setPayButton(false);
          }
        });
  
        customCheckout.on('complete', function(event) {
          console.log('complete: ' + JSON.stringify(event));
  
          if (event.field === 'card-number') {
            window.isCardNumberComplete = true;
            self.hideErrorForId('cc-number');
          } else if (event.field === 'cvv') {
            console.log("Error in CVV cleared")
            window.isCVVComplete = true;
            self.hideErrorForId('cc-cvv');
          } else if (event.field === 'expiry') {
            window.isExpiryComplete = true;
            self.hideErrorForId('cc-expiry');
          }
  
        self.setPayButton &&  self.setPayButton(
            window.isCardNumberComplete && window.isCVVComplete && window.isExpiryComplete
          );
        });
  
        customCheckout.on('error', function(event) {
          console.log('error: ' + JSON.stringify(event));
  
          if (event.field === 'card-number') {
            window.isCardNumberComplete = false;
            self.showErrorForId('cc-number', event.message);
          } else if (event.field === 'cvv') {
            window.isCVVComplete = false;
            self.showErrorForId('cc-cvv', event.message);
          } else if (event.field === 'expiry') {
            window.isExpiryComplete = false;
            self.showErrorForId('cc-expiry', event.message);
          }
         self.setPayButton && self.setPayButton(false);
        });
      },
      onSubmit: function(event) {
        var self = this;
  
        console.log('checkout.onSubmit()');
  
        event.preventDefault();
        self.setPayButton &&self.setPayButton(false);
        self.toggleProcessingScreen();
  
        var callback = function(result) {
          console.log('token result : ' + JSON.stringify(result));
  
          if (result.error) {
            self.processTokenError(result.error);
          } else {
            self.processTokenSuccess(result.token);
          }
        };
  
        console.log('checkout.createToken()');
        customCheckout.createOneTimeToken('10e9aa9c-6da2-46c9-948f-efabe3eb2c6b', callback);
  
      },
      hideErrorForId: function(id) {
        console.log('hideErrorForId: ' + id);
  
        var element = document.getElementById(id);
  
        if (element !== null) {
          var errorElement = document.getElementById(id + '-error');
          if (errorElement !== null) {
            errorElement.classList.remove('credit-bambora-error');
          }
  
      
        } else {
          console.log('showErrorForId: Could not find ' + id);
        }
      },
      showErrorForId: function(id, message) {
        console.log('showErrorForId: ' + id + ' ' + message);
  
        var element = document.getElementById(id);
  
        if (element !== null) {
          var errorElement = document.getElementById(id + '-error');
          if (errorElement !== null) {
            errorElement.classList.add("credit-bambora-error");
            errorElement.innerHTML = message;
          }
        } else {
          console.log('showErrorForId: Could not find ' + id);
        }
      },
      // setPayButton: function(enabled) {
      //   console.log('checkout.setPayButton() disabled: ' + !enabled);
  
      //   var payButton = document.getElementById('pay-button');
      //   if (enabled) {
      //     payButton.disabled = false;
      //     payButton.className = 'btn btn-primary';
      //   } else {
      //     payButton.disabled = true;
      //     payButton.className = 'btn btn-primary disabled';
      //   }
      // },
      toggleProcessingScreen: function() {
        var processingScreen = document.getElementById('processing-screen');
        if (processingScreen) {
          processingScreen.classList.toggle('visible');
        }
      },
      showErrorFeedback: function(message) {
        var xMark = '\u2718';
        this.feedback = document.getElementById('feedback');
        this.feedback.innerHTML = xMark + ' ' + message;
        this.feedback.classList.add('error');
      },
      showSuccessFeedback: function(message) {
        var checkMark = '\u2714';
        this.feedback = document.getElementById('feedback');
        this.feedback.innerHTML = checkMark + ' ' + message;
        this.feedback.classList.add('success');
      },
      processTokenError: function(error) {
        error = JSON.stringify(error, undefined, 2);
        console.log('processTokenError: ' + error);
  
        this.showErrorFeedback(
          'Error creating token: </br>' + JSON.stringify(error, null, 4)
        );
        // this.setPayButton(true);
        this.toggleProcessingScreen();
      },
      processTokenSuccess: function(token) {
        console.log('processTokenSuccess: ' + token);
  
        this.showSuccessFeedback('Success! Created token: ' + token);
        // this.setPayButton(true);
        this.toggleProcessingScreen();
  
        // Use token to call payments api
        // this.makeTokenPayment(token);
      },
    };
  
    customCheckoutController.init();
  };

  export default effectBORA;
  