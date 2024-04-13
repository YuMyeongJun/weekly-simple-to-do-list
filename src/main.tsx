import { Routers } from '@routers';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@modules';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={'...loading'}>
      <RouterProvider router={Routers} />
    </Suspense>
  </QueryClientProvider>,
);
