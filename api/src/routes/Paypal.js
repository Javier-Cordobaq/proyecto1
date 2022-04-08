const express = require('express')
const router = express.Router()
const PAYPAL_API_CLIENT = 'AU-y-eZbnaeVi-C8tQUQWVWBtVVVL1K6QTS6dZtS4ZpXZ_NapXmM4RiAZtIy_KuENpl_BxeWkA9VAvWk'
const PAYPAL_API_SECRET = 'EO6tp6jSSs7hwsC1gVKSpIJi89m2Wgugbjlxue9EI5UO4pfv5FiCiGmyfAasTp7qJzNd9aVSvHCZ8-hK'
const PAYPAL_API_URL = 'https://api-m.sandbox.paypal.com'
const HOST = 'http://localhost:3001'
// const ACCESS_TOKE_PAYPAL = 'A21AAKum_E3qjWFnEWKYDGhjQVp1_6K9VmsjmzoxCyGK8JmMQq-igBEf2i_9D0P82uX_Y8_njEiXKMGvke0m1giyd-W0eYZow'
const axios = require('axios')
router.post('/create-order', async (req, res) => {
  const orden  = req.body
  try {
    // create order
    const total = orden.map(item => item.price * item.cantidad).reduce((a, b) => a + b, 0)
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: total
          },
          desription: 'Compra en Ranger Snacks'
        }
      ],
      application_context: {
        brand_name: 'Ranger',
        landing_page: 'LOGIN',
        user_action: 'PAY_NOW',
        return_url: `${HOST}/Paypal/capture-order`,
        cancel_url: `${HOST}/Paypal/cancel-order`
      }
    }
    const params = new URLSearchParams()
    params.append('grant_type', 'client_credentials')
    const token = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET
      }

    })

    const response = await axios.post(`${PAYPAL_API_URL}/v2/checkout/orders`, order, {
      headers: {
        Authorization: `Bearer ${token.data.access_token}`
      }
    })

    res.json(response.data.links[1].href)
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

router.get('/capture-order', async (req, res) => {
  const { token } = req.query
  try {
    const params = new URLSearchParams()
    params.append('grant_type', 'client_credentials')
    const tokenAc = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET
      }

    })
    const response = await axios.post(`${PAYPAL_API_URL}/v2/checkout/orders/${token}/capture`, {}, {
      headers: {
        Authorization: `Bearer ${tokenAc.data.access_token}`
      }

    })

    console.log(response.data.purchase_units[0].payments.captures[0].amount, 'Buscando la plata')
    console.log(response.data.purchase_units[0].shipping)
    res.redirect('http://localhost:3000/Pagado')
  } catch (err) {
    res.status(500).send(err.message)
  }
})
router.get('/cancel-order', (req, res) => {
  try {
    res.redirect('http://localhost:3000/tienda')
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
