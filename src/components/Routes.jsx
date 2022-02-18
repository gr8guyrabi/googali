import React from 'react'
import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import Results from './Results'

const renderMultiRoutes = ({ element: Element, paths, ...rest }: MultiRoutes) =>
  paths.map((path) => <Route key={path} path={path} {...rest} element={Element} />);

const Routes = () => {
  return (
    <div className="p-4">
        <Switch>
            <Route exact path="/" element={<Navigate replace to="/search" />} />
            {renderMultiRoutes({
                paths: ['/search', '/images', '/news', '/videos'],
                element: <Results />,
                exact: true
            })}
        </Switch>
    </div>
  )
}

export default Routes