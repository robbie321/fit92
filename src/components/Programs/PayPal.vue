<template>
  <div>
    <div id="paypal-button-container"></div>
    <div v-if="success" class="alert alert-success">
      <strong>Success!</strong> Payment successfuly done
    </div>
    <div v-if="error" class="alert alert-danger">
      <strong>Ooops!</strong> something went wrong
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "paypal",
  props: ["amount", "title"],
  data() {
    return {
      error: false,
      success: false
    };
  },
  methods: {
    sendDataPaypal(creds) {
      return new Promise((resolve, reject) => {
        console.log(creds);
        axios
          .post(
            "https://afternoon-citadel-39632.herokuapp.com/checkoutpaypal",
            creds,
            {
              crossdomain: true
            }
          )
          .then(
            res => resolve()
            // return axios.post("http://localhost:1337/ipn");
          )
          .catch(err => reject(err));
      });
    }
  },
  mounted() {
    const client = {
      sandbox:
        "AWH3neqIoKxHtw_Y4eYsb0QRUcY57TclDF-FVxbqN58SuNdpFmTa2Rh_f24lPmofpHOHT3HmvUbbpW6n"
    };
    // Make a call to the REST api to create the payment
    const payment = (data, actions) =>
      actions.payment.create({
        payment: {
          transactions: [
            {
              amount: { total: this.amount, currency: "EUR" }
            }
          ]
        }
      });
    const onAuthorize = data => {
      var data = {
        paymentID: data.paymentID,
        payerID: data.payerID,
        amount: this.amount,
        title: this.title
      };
      this.sendDataPaypal({ data })
        .then(() => {
          this.success = true;
        })
        .catch(err => {
          this.error = true;
        });
    };
    paypal.Button.render(
      {
        style: {
          color: "blue",
          shape: "pill",
          label: "pay",
          tagline: "true",
          size: "medium"
        },
        env: "sandbox", // sandbox | production
        commit: true,

        client,
        payment,
        onAuthorize
      },
      "#paypal-button-container"
    );
  }
};
</script>
