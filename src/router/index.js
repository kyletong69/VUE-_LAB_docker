import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home', // NOTE 首頁
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/match', // NOTE 比賽
    name: 'match',
    component: () => import('../views/match.vue'),
    children: [
      {
        path: 'index',
        name: 'matchIndex',
        component: () => import('../components/match/index.vue')
      },
      {
        path: 'schedule',
        name: 'matchSchedule',
        component: () => import('../components/match/schedule.vue')
      },
      {
        path: 'follow',
        name: 'matchFollow',
        component: () => import('../components/match/follow.vue')
      },
      {
        path: 'rank',
        name: 'rank',
        component: () => import('../components/match/rank.vue')
      },
      {
        path: '*',
        redirect: '/match/index'
      }
    ]
  },

  {
    path: '/stat', // NOTE 數據
    name: 'stat',
    component: () => import('../views/stat.vue')
  },

  {
    path: '/profile', // NOTE 個人
    name: 'profile',
    component: () => import('../views/profile.vue'),
    children: [
      {
        path: 'index',
        name: 'profileIndex',
        component: () => import('../components/profile/index.vue')
      },
      {
        path: 'aboutUs',
        name: 'aboutUs',
        component: () => import('../components/profile/aboutUs.vue')
      },
      {
        path: 'msgCenter',
        name: 'msgCenter',
        component: () => import('../components/profile/msgCenter.vue')
      },
      {
        path: 'msgDetail',
        name: 'msgDetail',
        component: () => import('../components/profile/msgDetail.vue')
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: () => import('../components/profile/feedback.vue')
      },
      {
        path: 'follow',
        name: 'profileFollow',
        component: () => import('../components/profile/follow.vue'),
        children: [
          {
            path: 'detail',
            name: 'detail',
            component: () => import('../components/profile/follow/detail.vue')
          },
          {
            path: '*',
            redirect: '/profile/follow/detail'
          }
        ]
      },
      {
        path: '*',
        redirect: '/profile/index'
      }
    ]
  },

  {
    path: '/integral', // NOTE 賽事主頁
    name: 'integral',
    component: () => import('../views/best.vue') // 上下頁面
    // children: [
    //   {
    //     path: 'points',
    //     name: 'points',
    //     component: () => import('../components/integral/points.vue')
    //   },
    //   {
    //     path: 'match',
    //     name: 'match',
    //     component: () => import('../components/integral/match.vue')
    //   },
    //   {
    //     path: 'player',
    //     name: 'player',
    //     component: () => import('../components/integral/player.vue')
    //   },
    //   {
    //     path: 'team',
    //     name: 'team',
    //     component: () => import('../components/integral/player.vue')
    //   },
    //   {
    //     path: '*',
    //     redirect: '/integral/points'
    //   }
    // ]
  },
  {
    path: '/ranking', // NOTE 積分榜
    name: 'ranking',
    component: () => import('../views/ranking.vue')
  },

  {
    path: '/scheduleDetail', // NOTE 賽程主頁
    name: 'scheduleDetail',
    component: () => import('../views/scheduleDetail.vue')
    // children: [
    //   {
    //     path: 'live',
    //     name: 'live',
    //     component: () => import('../components/scheduleDetail/live.vue')
    //   },
    //   {
    //     path: 'chat',
    //     name: 'chat',
    //     component: () => import('../components/scheduleDetail/chat.vue')
    //   },
    //   {
    //     path: 'situation',
    //     name: 'situation',
    //     component: () => import('../components/scheduleDetail/situation.vue')
    //   },
    //   {
    //     path: 'lineups',
    //     name: 'lineups',
    //     component: () => import('../components/scheduleDetail/lineups.vue')
    //   },
    //   {
    //     path: '*',
    //     redirect: '/scheduleDetail/live'
    //   }
    // ]
  },
  {
    path: '/bestPlayer/:playerId', // 003 最佳球員
    name: 'bestPlayer',
    component: () => import('../views/best.vue')
    // children: [
    //   {
    //     path: 'playerInfo',
    //     name: 'playerInfo',
    //     component: () => import('../components/bestPlayer/playerInfo.vue')
    //   },
    //   {
    //     path: 'playerAnalysis',
    //     name: 'playerAnalysis',
    //     component: () => import('../components/bestPlayer/playerAnalysis.vue')
    //   },
    //   {
    //     path: 'playerMatch',
    //     name: 'playerMatch',
    //     component: () => import('../components/bestPlayer/playerMatch.vue')
    //   },
    //   {
    //     path: '*',
    //     redirect: '/bestPlayer/playerInfo'
    //   }
    // ]
  },
  {
    path: '/bestTeam/:teamId', // 004 最佳球隊
    name: 'bestTeam',
    component: () => import('../views/best.vue')
    // children: [
    //   {
    //     path: 'teamInfo',
    //     name: 'teamInfo',
    //     component: () => import('../components/bestTeam/teamInfo.vue')
    //   },
    //   {
    //     path: 'teamRanking',
    //     name: 'teamRanking',
    //     component: () => import('../components/bestTeam/teamRanking.vue')
    //   },
    //   {
    //     path: 'teamMatch',
    //     name: 'teamMatch',
    //     component: () => import('../components/bestTeam/teamMatch.vue')
    //   },
    //   {
    //     path: 'teamLineups',
    //     name: 'teamLineups',
    //     component: () => import('../components/bestTeam/teamLineups.vue')
    //   },
    //   {
    //     path: '*',
    //     redirect: '/bestTeam/teamInfo'
    //   }
    // ]
  },
  {
    path: '/follow', // NOTE 關注
    name: 'follow',
    component: () => import('../views/follow.vue')
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: () => import('../views/searchResult.vue')
  },
  {
    path: '/allStages',
    name: 'allStages',
    component: () => import('../views/allStages.vue')
  },
  {
    path: '/subscribe', // NOTE 關注
    name: 'subscribe',
    component: () => import('../views/subscribe.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('../views/welcome.vue')
  }
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
