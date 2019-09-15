import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Dtct2Wxx5abgmtMGA-cruOZSyId6FiBJbq-1m2K-GF-3JdYvhz3_2xbolUxdYNDRIEgZ728I4rs46R27b8WvGnAD6E8ZGlq8iq_QQVY9jHwLwysbb1wTzMSWlil9XXYx'
  }
})
