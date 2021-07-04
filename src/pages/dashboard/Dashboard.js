import { useEffect, useState } from 'react';
import { Button } from '../../components/utils/Button';
import { supabase } from '../Login';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Tickets } from './Tickets';

const fetchProfile = async (id) => {
  return new Promise((resolve, reject) => {
    supabase.from('users').select('*').eq('user_id', id)
      .throwOnError(reject)
      .then(resolve)
  })
}

export const idify = name => name.toLowerCase().split(' ').join('');

export const Dashboard = ({ session }) => {
  const [informations, setInformations] = useState(null);
  const [orders, setOrders] = useState([]);
  const pushOrder = value => setOrders(orders.concat(value));
  useEffect(() => {
    setOrders([]);
    supabase.auth.refreshSession().then(({ data: session }) => {
      if (session === null)
        return window.location.assign('/login');
      const { user } = session;
      fetchProfile(user.id)
        .then(async x => {
          setInformations(x.data[0]);
          const commands = x.data[0].orders;
          if (!commands) return;
          for (const command of commands) {
            const id = idify(command);
            const { error, data: project } = await supabase
              .from('orders')
              .select('id, date, description, type, project_name, website_url, state')
              .eq('id', id);
            if (error) continue;
            const date = new Date(Date.parse(project[0].date));
            const format = n => n < 10 ? '0' + n : n;
            pushOrder({...project[0], date: `${format(date.getDay())}/${format(date.getMonth())}/${date.getFullYear()}`});
          }
        });
    })
  }, []);
  const date = new Date().getHours();
  const signOut = () => {
    supabase.auth.signOut();
    window.location.assign('/login');
  }
  
  return informations && <section className="my-24 mx-8 lg:w-2/3 lg:mx-auto ">
    <header className="mb-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:items-center">
      <h1 className="text-xl text-white flec flex-auto">
        <span className="opacity-60 text-lg">
          {date < 18 && date > 6 ? 'Bonjour' : 'Bonsoir'} 
        </span>
        <strong className="ml-1">
          {informations.firstname} {informations.lastname}
        </strong>
      </h1>
      <div className="flex flex-row space-x-4">
        <Link to="/dashboard">
          <Button coloured>
            Mes commandes
          </Button>
        </Link>
        <Button onClick={() => signOut()}>
          Se déconnecter
        </Button>
      </div>
    </header>
    <hr className="opacity-25 mb-6" />
    <Switch>
      <Route path="/dashboard/tickets/:id">
        <Tickets session={session} />
      </Route>
      <Route exact path="/dashboard">
        <div className="lg:mt-8">
          <div className="flex flex-col my-4 lg:flex-row mt-8 flex-wrap gap-8">
            {orders && orders.map((x, i) => <div className="bg-gray-900 p-8 flex flex-row rounded-2xl shadow-xl children:w-1/2 flex-wrap gap-y-8 lg:w-[48%]" key={i}>
              <div className="!w-full bg-gray-800 bg-opacity-50 p-4 rounded-xl flex flex-row items-center">
                <span className={`block h-4 w-4 ${x.state === 0 ? 'bg-orange-400' : 'bg-green-400'} rounded-full`}></span>
                <p className="ml-3 font-medium text-white">
                  {x.state === 0
                    ? 'Commande en cours de développement...'
                    : 'Commande terminée...'
                  }
                </p>
              </div>
              <div className="flex flex-col text-white">
                <span className="uppercase font-bold text-sm tracking-wider opacity-60">Nom du projet</span>
                <span className="leading-5 text-lg">{x.project_name}</span>
              </div>
              <div className="flex flex-col text-white">
                <span className="uppercase font-bold text-sm tracking-wider opacity-60">Commande</span>
                <span className="leading-5 text-lg">{x.type}</span>
              </div>
              <div className="flex flex-col text-white !w-full">
                <span className="uppercase font-bold text-sm tracking-wider opacity-60">
                  Date d'échéance
                </span>
                <span className="leading-5 text-lg">{x.date}</span>
              </div>
              <div className="flex flex-col text-white !w-3/4">
                <span className="uppercase font-bold text-sm tracking-wider opacity-60">
                  Description
                </span>
                <span className="leading-5 text-lg">
                  <ul className="list-disc list-inside">
                    {x.description}
                  </ul>
                </span>
              </div>
              <div className="!w-full relative">
                <img src={`https://shot.screenshotapi.net/screenshot?&url=${x.website_url}&fresh=true&output=image&file_type=png&wait_for_event=load`} className="w-full h-48 object-cover object-top rounded-2xl shadow-xl" alt="" />
                <span className="absolute inset-0 h-full w-full bg-black rounded-2xl bg-opacity-25 backdrop-filter backdrop-blur-[1px]"></span>
              </div>
              <div className="flex flex-row space-x-4 !w-full">
                <Link to={'/dashboard/tickets/' + x.id}>
                  <Button coloured>
                    Accéder aux tickets
                  </Button>
                </Link>
                <Button href={x.website_url} blank>
                  Accéder au site
                </Button>
              </div>
            </div>)}
            {(!orders || orders.length === 0) && <p className="text-lg text-white font-medium">
              Aucune commande n'a été trouvée !  
            </p>}
          </div>
        </div>
      </Route>
    </Switch>
  </section>
}