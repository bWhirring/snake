import React from 'react'

import Count from './views/Count'

export const router = [
  {
    path: '/',
    main: () => <h1>home</h1>
  }, {
    path: '/login',
    main: () => <h1>login</h1>
  }, {
    path: '/count',
    main: () => <Count />
  }
]
