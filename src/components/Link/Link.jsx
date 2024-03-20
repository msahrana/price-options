const Link = ({route}) => {
  return (
    <li className="mr-8 hover:bg-yellow-700 p-2">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
