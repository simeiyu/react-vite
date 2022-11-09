import { Navigate, useRoutes, RouteObject } from 'react-router-dom'
import PageError from '@pages/pageError'
import Explore, { Scene, Default } from '@pages/explore'
import Overview, { Graphic, List } from '@pages/overview'
import Algo from '@pages/algo'
import Predict from '@pages/predict'

const routes: RouteObject[] = [
  {
    path: '/explore',
    element: <Explore />,
    children: [
      // { index: true, element: <Default /> },
      { path: 'scene', element: <Scene /> },
    ]
  }, {
    path: '/overview',
    element: <Overview />,
    children: [
      { index: true, element: <Graphic /> },
      { path: 'list', element: <List /> },
    ]
  }, {
    path: '/algo',
    element: <Algo />
  }, {
    path: '/predict',
    element: <Predict />
  }, {
    path: '*',
    element: <PageError />
  }, {
    path: '/',
    element: <Navigate to='/explore' />
  }
]

export default () => useRoutes(routes)
