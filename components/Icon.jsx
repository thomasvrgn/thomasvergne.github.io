import { useState, useEffect } from 'react';
const transformName = name => (name[0] + name.slice(1).replace(/([A-Z])/g, '-$1')).toLowerCase();
import { save, exists } from 'api/blog';

const url = 'https://raw.githubusercontent.com/astrit/css.gg/master/icons/svg/';
const buildURL = name => `${url}${transformName(name)}.svg`;

export default function Icon({ name, ...props }) {
  const [icon, setIcon] = useState(null);
  useEffect(async () => {
    // Checking if icon exists in cache
    if (exists(name)) return setIcon(window.localStorage.getItem(name));

    // Fetching svg icon from github
    const data = await fetch(buildURL(name));
    const content = await data.text();

    // Both saving icon to local storange and to state
    save(name, content); setIcon(content);
  }, []);

  return <i dangerouslySetInnerHTML={{ __html: icon }} {...props}></i>;
}