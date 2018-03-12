import { commonParams, options } from './config'
import axios from 'axios'
import jsonp from 'common/js/jsonp'
import { getUid } from 'common/js/uid'

const debug = process.env.NODE_ENV !== 'production'

export function getLyric(mid) {
  // const url = debug ? '/api/lyric' : 'wxclaude.club/vueMusic/api/lyric'
  //
  // const data = Object.assign({}, commonParams, {
  //   songmid: mid,
  //   platform: 'yqq',
  //   hostUin: 0,
  //   needNewCode: 0,
  //   categoryId: 10000000,
  //   pcachetime: +new Date(),
  //   format: 'json'
  // })
  //
  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  let res = {
    "retcode":0,"code":0,"subcode":0,"lyric":"W3RpOldoaXRlIEdsb3Zlc10KW2FyOktocnVhbmdiaW5dClthbDpUaGUgVW5pdmVyc2UgU21pbGVzIFVwb24gWW91XQpbYnk6XQpbb2Zmc2V0OjBdClswMDowMC4xOF1XaGl0ZSBHbG92ZXMgLSBLaHJ1YW5nYmluClswMDowMS4xM10KWzAwOjI5LjY0XVNoZSB3YXMgYSBxdWVlbgpbMDA6MzAuOTZdClswMDozNC44N11TaGUgaGFkIGEgaG91c2UKWzAwOjM2LjE3XQpbMDA6NDAuMjFdU2hlIHdhcyBhIGZpZ2h0ZXIKWzAwOjQxLjEyXQpbMDA6NDUuMzRdU2hlIHdhcyBhIHF1ZWVuClswMDo0Ni42Ml0KWzAwOjUwLjcxXUhhZCBhIGdvb2QgZHVkZQpbMDA6NTEuOThdClswMDo1Ni4xMF1Cb3VnaHQgbWUgYSByYWJiaXQKWzAwOjU3LjYzXQpbMDE6MDEuMTNdU2hlIHdhcyBhIHF1ZWVuClswMTowMi40MV0KWzAxOjA2LjU3XVdlYXJpbmcgd2hpdGUgZ2xvdmVzClswMToxMC43Nl0KWzAxOjE2LjgyXUJ1dCBzaGUga2VwdCAnZW0gY2xlYW4KWzAxOjE4LjQ5XQpbMDE6MjIuNDldQ2xhc3N5IGxhZHkKWzAxOjIzLjU1XQpbMDE6MjcuMzJdQnV0IHNoZSB3YXNuJ3QgcXVpZXQKWzAxOjI4LjU3XQpbMDE6MzIuNTZdU2hlIHdhcyBhIHF1ZWVuClswMTozMy45Nl0KWzAyOjA0LjI4XU9uZSBkYXkgc2hlIHdhcyBnb25lClswMjowNS41MV0KWzAyOjA4LjkzXVNoZSBkaWVkIGluIGEgZmlnaHQKWzAyOjEwLjU2XQpbMDI6MTQuMzNdQ2F1c2Ugc2hlIHdhcyBhIGZpZ2h0ZXIKWzAyOjE1Ljg0XQpbMDI6MTkuNjddU2hlIHdhcyBhIHF1ZWVuClswMjoyMS4wMF0KWzAyOjM1LjU5XVNoZSB3YXMgYSBxdWVlbgpbMDI6MzYuODRdClswMjo1MS4xNF1TaGUgd2FzIGEgcXVlZW4KWzAyOjUyLjI2XQpbMDM6MDYuOTNdU2hlIHdhcyBhIHF1ZWVu","trans":""}
  return Promise.resolve(res)
}

export function getVKey(songmid, filename) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    cid: 205361747,
    format: 'json',
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    uin: 0,
    songmid,
    filename,
    guid: getUid()
  })

  return jsonp(url, data, Object.assign({}, options, {
    param: 'callback'
  }))
}
