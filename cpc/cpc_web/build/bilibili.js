const express = require('express')
const axios = require('axios')
const router = express.Router()

// 直播
router.get('/live', (req, res) => {
    let url = 'https://api.live.bilibili.com/room/v1/RoomRecommend/biliIndexRecList'
    axios.get(url, {
      headers: {
        referer: 'https://www.bilibili.com/',
        host: 'api.live.bilibili.com'
      }
    }).then(response => {
      res.send(response.data.data) 
    }).catch(err => {
      console.log(err)
    })
})

// 特别推荐
router.get('/recommend', (req, res) => {
    let url = 'https://www.bilibili.com/index/c.json'
    axios.get(url, {
      headers: {
        referer: 'https://www.bilibili.com/',
        host: 'www.bilibili.com'
      }
    }).then(response => {
      res.send(response.data.data)
    }).catch(err => {
      console.log(err)
    })
})

// 关注主播
router.get('/focusLive', (req, res) => {
    let url = 'https://api.live.bilibili.com/relation/v1/feed/feed_list'
    axios.get(url, {
      headers: {
        referer: 'https://www.bilibili.com/',
        host: 'www.bilibili.com'
      },
      params: {
        pagesize: 6,
        page: 1
      }
    }).then(response => {
      res.send(response.data.data)
    }).catch(err => {
      console.log(err)
    })
})

module.exports = router