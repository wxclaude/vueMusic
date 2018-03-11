import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  // 线上环境地址，同学们根据自己的需要配置修改
  // const url = debug ? '/api/getDiscList' : 'http://wxclaude.com/vueMusic/api/getDiscList'
  //
  // const data = Object.assign({}, commonParams, {
  //   platform: 'yqq',
  //   hostUin: 0,
  //   sin: 0,
  //   ein: 29,
  //   sortId: 5,
  //   needNewCode: 0,
  //   categoryId: 10000000,
  //   rnd: Math.random(),
  //   format: 'json'
  // })
  //
  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  let res = {"code":0,"subcode":0,"message":"","default":0,"data":{"uin":0,"categoryId":10000000,"sortId":5,"sum":5830,"sin":0,"ein":29,"list":[{"dissid":"3606864046","createtime":"2017-12-20","commit_time":"2017-12-20","dissname":"不可抗拒力！这磨人的慵懒男声 ","imgurl":"http://p.qpic.cn/music_cover/X9lmt3gQ1KkaezXF13jX38sowvHOwxwQtmPMWlfmyr3NKyficArOdSQ/600?n=1","introduction":"","listennum":491325,"score":0,"version":0,"creator":{"type":2,"qq":1079096147,"encrypt_uin":"oKnlNKnq7w6P7z**","name":"蘑菇","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"874021717","createtime":"2018-01-08","commit_time":"2018-01-08","dissname":"自我进修：形体芭蕾舞必备练习曲","imgurl":"http://p.qpic.cn/music_cover/5icK7iaMG251xxP4lurhKEcMKblRq9CHnfsdD1fc0eC0iaVT3XCtx74mw/600?n=1","introduction":"","listennum":138158,"score":0,"version":0,"creator":{"type":0,"qq":2201472570,"encrypt_uin":"ow-zoKvlow4lon**","name":"南极光","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3764730416","createtime":"2018-03-08","commit_time":"2018-03-08","dissname":"醉眼千山 • 墨明棋妙男声集","imgurl":"http://p.qpic.cn/music_cover/rs0wGJF4doYS9ubJ809ZBpqeoX0JI90sbv8VtgepP5pWicEqERsz2WA/600?n=1","introduction":"","listennum":19232,"score":0,"version":0,"creator":{"type":2,"qq":3308359265,"encrypt_uin":"oiozNeokNK-s7v**","name":"古风圈里没有我","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3642469712","createtime":"2018-01-11","commit_time":"2018-01-11","dissname":"摇滚力量，带着理想面对涣散的未来","imgurl":"http://p.qpic.cn/music_cover/0yiaX8d9LSmnROyId1RsUUwWMgNYfeYF3m3RGcxC7IzJkYCRhYd4nFA/600?n=1","introduction":"","listennum":176369,"score":0,"version":0,"creator":{"type":2,"qq":707665875,"encrypt_uin":"7inl7wCkNeSk","name":"哔咯独角兽 ,","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3707789156","createtime":"2018-02-04","commit_time":"2018-02-04","dissname":"迷幻民谣 | 扑入脑海的棉花糖","imgurl":"http://p.qpic.cn/music_cover/T0qpeJj1MpLkoxkZMuVVx8H7ZmDamUuCSvX3kkKVaWtESUpsjN8fCw/600?n=1","introduction":"","listennum":41958,"score":0,"version":0,"creator":{"type":2,"qq":810360741,"encrypt_uin":"Ne6zoiCz7iv5","name":"被嫌弃的唐唐的一生","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3764892045","createtime":"2018-03-08","commit_time":"2018-03-08","dissname":"抖友出征滴滴滴：“天王盖地虎！”","imgurl":"http://p.qpic.cn/music_cover/rbKoTQdkPFC5FFC95YibQL7afX0FK9j6rDRiaicqzibsUsH5zf6nsmGBaA/600?n=1","introduction":"","listennum":560093,"score":0,"version":0,"creator":{"type":0,"qq":2523668458,"encrypt_uin":"ow4AoiCsNevkNn**","name":"我是个讲道理的人","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3750998041","createtime":"2018-02-26","commit_time":"2018-02-26","dissname":"《这！就是街舞》参赛BGM合集","imgurl":"http://p.qpic.cn/music_cover/2g8aJznERGdXrFRjaqmCHNlT5IETMR1EicGia4z89akT3xJratWv40EA/600?n=1","introduction":"","listennum":855061,"score":0,"version":0,"creator":{"type":0,"qq":2669206093,"encrypt_uin":"owCsNK-z7wnqoz**","name":"Vitamin","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3760974297","createtime":"2018-03-05","commit_time":"2018-03-05","dissname":"重燃青春：圣斗士星矢动画原声","imgurl":"http://p.qpic.cn/music_cover/ibJJngZRP5m8ksRvDkGZxdavkYywBTpBAgE1dYvxgEaWynXdEL4tYKA/600?n=1","introduction":"","listennum":23288,"score":0,"version":0,"creator":{"type":0,"qq":793407810,"encrypt_uin":"7iEi7enlNe6z","name":"🌸 谈谈心恋恋爱 *","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3766117864","createtime":"2018-03-09","commit_time":"2018-03-09","dissname":"Apple Music最高流媒的女艺人Top 20","imgurl":"http://p.qpic.cn/music_cover/RrXobiciaW7sU0htwoU8XrKFPYozPt3EuH6fSUrpcwGo0qzOx8zJrBmg/600?n=1","introduction":"","listennum":37844,"score":0,"version":0,"creator":{"type":0,"qq":3210113365,"encrypt_uin":"oi-5oe65oios7v**","name":"大大熊","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3607831351","createtime":"2017-12-19","commit_time":"2017-12-19","dissname":"挚爱的Leslie！哥哥现场Live合集","imgurl":"http://p.qpic.cn/music_cover/9FFOSC3NnCw42Dx1kQ7CumYibrGGgmItibcqy6pBrUiatiaict8tMa7IL9Q/600?n=1","introduction":"","listennum":140536,"score":0,"version":0,"creator":{"type":0,"qq":471440350,"encrypt_uin":"7eS57evzoi4z","name":"弓长","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3757250195","createtime":"2018-03-07","commit_time":"2018-03-07","dissname":"50位日本90后歌手，了解一下？","imgurl":"http://p.qpic.cn/music_cover/AhbCa0vazSRDjEJhYwthgpu82rFbqibr719YZn0wWqf76tzHeBoyLeg/600?n=1","introduction":"","listennum":103707,"score":0,"version":0,"creator":{"type":0,"qq":1747907171,"encrypt_uin":"oKSP7iEz7i6lov**","name":"🌈委屈哒哒","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3724879080","createtime":"2018-02-27","commit_time":"2018-02-27","dissname":"「Sax电音」动感旋律，骚气节奏","imgurl":"http://p.qpic.cn/music_cover/PJrGzQib7nia43112ibFrSia1DK8S0ibnDiaEv9vzibKIPZ15TUicOTzeomNibA/600?n=1","introduction":"","listennum":521278,"score":0,"version":0,"creator":{"type":0,"qq":1545023735,"encrypt_uin":"oK4P7KnAoiSi7v**","name":"Monster〃","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3764678117","createtime":"2018-03-08","commit_time":"2018-03-08","dissname":"华语流行歌里的古筝元素","imgurl":"http://p.qpic.cn/music_cover/CJ35Z2cnZA0kWwtIMrxsbgkibz8iamGyO7ogibBibHyA7qCqa4cGOHiccOw/600?n=1","introduction":"","listennum":663663,"score":0,"version":0,"creator":{"type":0,"qq":86010258,"encrypt_uin":"NeCzoKnA7Kc*","name":"霜泧","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3764787850","createtime":"2018-03-08","commit_time":"2018-03-08","dissname":"声影交汇：Cytus 1&2 收录歌曲","imgurl":"http://p.qpic.cn/music_cover/wzvG5MwiaSrRPIom1hvTLCP3TtphFeIEwGQ68m37N1F6qDicnUsfxWww/600?n=1","introduction":"","listennum":157067,"score":0,"version":0,"creator":{"type":0,"qq":3537271905,"encrypt_uin":"oi4i7i-loKEz7v**","name":"街舞是我的绳命","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3700332629","createtime":"2018-01-30","commit_time":"2018-01-30","dissname":"kawaii bass：来自糖果漩涡的甜蜜鼓点","imgurl":"http://p.qpic.cn/music_cover/zvTEv4nf24OhibNkHicltqWOQ1YbhtkaP5vpc6XloQJbrbPcibeaZlMYg/600?n=1","introduction":"","listennum":362507,"score":0,"version":0,"creator":{"type":2,"qq":1134746874,"encrypt_uin":"oK6i7eSP7wcl7n**","name":"鹿泺","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3762660158","createtime":"2018-03-06","commit_time":"2018-03-06","dissname":"漫威系列 | 《黑豹》电影原声集","imgurl":"http://p.qpic.cn/music_cover/7pSYAyufQLevtgZ2rjWe3mq69kQBGCIKzYXib6cfoKQG6TTgpVSEYkw/600?n=1","introduction":"","listennum":698745,"score":0,"version":0,"creator":{"type":0,"qq":3182508680,"encrypt_uin":"oi6Fow4zNeCFon**","name":"我的心事你别猜","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3764754658","createtime":"2018-03-08","commit_time":"2018-03-08","dissname":"30位内地90后民谣女歌手","imgurl":"http://p.qpic.cn/music_cover/ibJJngZRP5m8ksRvDkGZxdavkYywBTpBA7g57ibNtDxawFOpk3jvXX7A/600?n=1","introduction":"","listennum":865555,"score":0,"version":0,"creator":{"type":0,"qq":793407810,"encrypt_uin":"7iEi7enlNe6z","name":"🌸 谈谈心恋恋爱 *","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3754332642","createtime":"2018-02-28","commit_time":"2018-02-28","dissname":"舒缓柔美：充满幻想的日本新世纪","imgurl":"http://p.qpic.cn/music_cover/4SToLgyAFibJLOGopcPDpxld3JPdqLNDuQV0oEUVdS7qutuePwiae8Ow/600?n=1","introduction":"","listennum":169085,"score":0,"version":0,"creator":{"type":0,"qq":1978787848,"encrypt_uin":"oKElNeSF7icPNn**","name":"LOKINLAM","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2387489740","createtime":"2017-10-27","commit_time":"2017-10-27","dissname":"下班后的小资：在酒吧品一杯现代蓝调","imgurl":"http://p.qpic.cn/music_cover/CUb6aLrCpYutyWVibOcoib0utDvibC5rkSQqNoEy6Guw8LpI535qqIDyQ/600?n=1","introduction":"","listennum":347980,"score":0,"version":0,"creator":{"type":0,"qq":2085444145,"encrypt_uin":"ownF7KvP7e6P7v**","name":"阳光少年","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3752307699","createtime":"2018-02-27","commit_time":"2018-02-27","dissname":" 乐器也疯狂 | 50首激燃的小提琴曲","imgurl":"http://p.qpic.cn/music_cover/PJrGzQib7nia43112ibFrSia1JFhohkLoAMNlLz0gXfumicSVoV3icJo1voA/600?n=1","introduction":"","listennum":516775,"score":0,"version":0,"creator":{"type":0,"qq":1545023735,"encrypt_uin":"oK4P7KnAoiSi7v**","name":"Monster〃","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2690788692","createtime":"2017-12-06","commit_time":"2017-12-06","dissname":"撩人！古典音乐史上最浪漫的幻想曲","imgurl":"http://p.qpic.cn/music_cover/s6ib7KHLTqdrU3UxaGALxNQH9WMUaUuIlmUfl15NtHiboicb9NW1xqSoA/600?n=1","introduction":"","listennum":58272,"score":0,"version":0,"creator":{"type":0,"qq":2368857126,"encrypt_uin":"owosNeck7i6A7c**","name":"天天困成狗","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3763180786","createtime":"2018-03-07","commit_time":"2018-03-07","dissname":"【经典呈现】历届奥斯卡最佳原创歌曲","imgurl":"http://p.qpic.cn/music_cover/tmk5HNSnJvJhsOvcIpWuldibvgficiaZewmvPTuiaBibntYIZmsR45fqjNQ/600?n=1","introduction":"","listennum":78564,"score":0,"version":0,"creator":{"type":0,"qq":2958598324,"encrypt_uin":"owEkNe4qNeoA7n**","name":"橘子皮","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3756838699","createtime":"2018-03-07","commit_time":"2018-03-07","dissname":"抖音热门的中文说唱歌曲","imgurl":"http://p.qpic.cn/music_cover/CIY2ghIaVQwxemsbBuCNDb2HmeOnsrcPta047wf4NKDGaibiaCBj3g5Q/600?n=1","introduction":"","listennum":398038,"score":0,"version":0,"creator":{"type":0,"qq":965669402,"encrypt_uin":"NKCk7wCq7enA","name":"林南","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3747672197","createtime":"2018-03-02","commit_time":"2018-03-02","dissname":"日系伤感：蓦然回首，发现泪已千行","imgurl":"http://p.qpic.cn/music_cover/4SToLgyAFibJLOGopcPDpxld3JPdqLNDuAqxIkNcqDqXcicwQJHLI61g/600?n=1","introduction":"","listennum":97284,"score":0,"version":0,"creator":{"type":0,"qq":1978787848,"encrypt_uin":"oKElNeSF7icPNn**","name":"LOKINLAM","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3590665948","createtime":"2017-12-01","commit_time":"2017-12-01","dissname":"正能量：别害怕，自信的笑容很好看","imgurl":"http://p.qpic.cn/music_cover/8HhavvWNIicpyjlv0UnT5TfMaSdbLR6AHweAWpU6YAeVzAPUrgXvBug/600?n=1","introduction":"","listennum":872398,"score":0,"version":0,"creator":{"type":3,"qq":478695379,"encrypt_uin":"7eSF7wEkoiSq","name":"DJ顾念晨","isVip":3,"avatarUrl":"","followflag":0}},{"dissid":"3764284022","createtime":"2018-03-08","commit_time":"2018-03-08","dissname":"【口味不怪 不可爱】李沁枬推荐歌单 ","imgurl":"http://p.qpic.cn/music_cover/x9y9FuyOoAsbuI2fIv8X4IIvxrTObLfYQicntUPfI5lrl1iadS4fAdWw/600?n=1","introduction":"","listennum":56272,"score":0,"version":0,"creator":{"type":1,"qq":512303575,"encrypt_uin":"7K6Aoini7KSk","name":"李沁枬","isVip":1,"avatarUrl":"","followflag":0}},{"dissid":"3720149014","createtime":"2018-02-28","commit_time":"2018-02-28","dissname":"强强联手！欧美嘻哈大佬合作歌曲","imgurl":"http://p.qpic.cn/music_cover/IGAfqm1zBpN653gt1MXE9TE7HianbLXILQpIFxWdZO8Q9mAiblkgicFOg/600?n=1","introduction":"","listennum":117039,"score":0,"version":0,"creator":{"type":2,"qq":1372077356,"encrypt_uin":"oKolownl7iok7c**","name":"Mr. Blue Sky","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3761158540","createtime":"2018-03-07","commit_time":"2018-03-07","dissname":"Bass House｜令人深陷的毒性低音","imgurl":"http://p.qpic.cn/music_cover/PiajxSqBRaEJPtLXYsvILNVnzofiaMhNDKzn8ibgicsibsgaVm8RbQgze2A/600?n=1","introduction":"","listennum":137455,"score":0,"version":0,"creator":{"type":0,"qq":4960643,"encrypt_uin":"7eEsoeCPoz**","name":"电子音乐研究室","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3759151130","createtime":"2018-03-07","commit_time":"2018-03-07","dissname":"苏到没朋友！最撩古风男神音集锦","imgurl":"http://p.qpic.cn/music_cover/iaKWuOopD3iapM7JjD7In6UuCAoF4mlqyqpstib0n9z3GIibR9rG4RZJtA/600?n=1","introduction":"","listennum":185337,"score":0,"version":0,"creator":{"type":0,"qq":1553392125,"encrypt_uin":"oK4koioqow6A7v**","name":"沈清。","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3631399115","createtime":"2018-01-09","commit_time":"2018-01-09","dissname":"Supper Moment：从小伙子到大丈夫","imgurl":"http://p.qpic.cn/music_cover/vT1naPTJ8sYQQb8x2xMFWvqkt2w4DiarBZicRMGVc5pyVoJCkhe3eIdw/600?n=1","introduction":"","listennum":61628,"score":0,"version":0,"creator":{"type":0,"qq":3376919139,"encrypt_uin":"oiol7wE5NK6iNv**","name":"中午不睡觉","isVip":0,"avatarUrl":"","followflag":0}}]}}
  return Promise.resolve(res)
}

export function getSongList(disstid) {
  const url = debug ? '/api/getCdInfo' : 'http://wxclaude.com/vueMusic/api/getCdInfo'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
