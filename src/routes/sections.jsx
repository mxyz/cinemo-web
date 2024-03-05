import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const FavoritePage = lazy(() => import('src/pages/favorite'));
export const MovieDetailPage = lazy(() => import('src/pages/movie'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const MoviesPage = lazy(() => import('src/pages/movies'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <MoviesPage />, index: true },
        { path: 'my-favorite', element: <FavoritePage /> },
      ],
    },
    { path: 'movie/:id', element: <MovieDetailPage /> },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
