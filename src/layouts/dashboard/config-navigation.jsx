import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Movie Finder',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My Favorite',
    path: '/my-favorite',
    icon: icon('ic_user'),
  },
];

export default navConfig;
