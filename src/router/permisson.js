import router, {constRoutes} from '@/router'
import {getRoutes} from '@/api'

getRoutes().then((res) => {
  let result = res.data.list
  let filterRoutes = getFilterRoutes(constRoutes, getRouteConfig(result))
  router.addRoutes(filterRoutes)
  console.log(router, 'router')
})

function getFilterRoutes (constRoutes, routerConfigs) {
  let accessedRoutes = constRoutes.filter((route) => {
    if (route.children && route.children.length) {
      route.children = getFilterRoutes(route.children, routerConfigs)
    }
    if (routerConfigs.includes(route.name)) {
      return true
    }
    return false
  })
  return accessedRoutes
}

function getRouteConfig (res) {
  let names = []
  function cycleNames (res) {
    res.forEach((item) => {
      if (!names.includes(item.component)) {
        names.push(item.component)
      }
      if (item.children) {
        cycleNames(item.children)
      }
    })
  }
  cycleNames(res)
  return names
}