import { Breadcrumbs } from '@/shared/ui';

const Home = () => {
  return (
    <Breadcrumbs
      list={[
        { name: 'Home', link: '/' },
        { name: 'Abount', link: '/about' },
      ]}
    />
  );
};

export default Home;
