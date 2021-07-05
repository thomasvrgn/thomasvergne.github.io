import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/utils/Button';
import { Input } from '../../components/utils/Input';
import { supabase } from '../Login';

export const pushTicket = async (session, id, title, subtitle, [order, setOrders]) => {
  title = title.current.value;
  subtitle = subtitle.current.value;
  const { body, error } = await supabase
    .from('orders')
    .select('tickets')
    .match({
      id,
      user_id: session.user.id,
    });

  if (error) throw error;
  const { tickets } = body[0];
  tickets.push(`${title}:${subtitle}`);
  await supabase.from('orders').update({
    tickets,
  }).match({
    id,
    user_id: session.user.id,
  });
  setOrders({ ...order, tickets, })
}

export const removeTicket = async (session, id, ticketID, [order, setOrders]) => {
  const { body, error } = await supabase
    .from('orders')
    .select('tickets')
    .match({
      id,
      user_id: session.user.id,
    });
  if (error) throw error;
  const { tickets } = body[0];
  tickets.splice(ticketID, 1);
  await supabase.from('orders').update({
    tickets,
  }).match({
    id,
    user_id: session.user.id,
  });
  setOrders({ ...order, tickets, })
}

export const Tickets = ({ session }) => {
  const { id } = useParams();
  const [order, setOrder] = useState();
  session = supabase.auth.session();
  useEffect(() => {
    if (session && session.user.id) {
      supabase.from('orders').select('*').match({
        user_id: session.user.id,
        id,
      }).then(({ body, error }) => {
        if (body.length === 0) window.location.assign('/dashboard');
        setOrder(error === null ? body[0] : undefined);
      });
    } else {
      return window.location.assign('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = useRef(null);
  const subtitle = useRef(null);

  return order 
    ? <div>
        <div className="flex flex-col md:flex-row mb-6 space-y-8 md:space-y-0">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex-auto">
            Tickets
          </h1>
          <div className="bg-red-100 dark:bg-red-200 bg-opacity-90 rounded-2xl p-4 px-6 pr-10 pb-5 flex flex-row items-center text-red-900 md:w-max">
            <FontAwesomeIcon className="text-2xl mt-2.5" icon={faExclamationTriangle} />
            <div className="ml-4">
              <h1 className="text-lg font-bold">Attention !</h1>
              <p className="leading-5 md:leading-3">Tout abus dans le système de tickets sera sévèrement sanctionné.</p>
            </div>
          </div>
        </div>
        <section className="lg:flex lg:flex-row lg:gap-x-6">
          <div className="space-y-8 flex flex-col lg:flex-row lg:space-y-0 lg:gap-8 flex-wrap items lg:flex-auto h-full">
            {(order && order.tickets.length > 0) && order.tickets.map((x, i) => {
              const [title, content] = x.split(':');
              return <div className="dark:bg-gray-900 bg-gray-50 p-8 relative rounded-2xl dark:shadow-2xl md:w-full 2xl:w-[47%]" key={i}>
                <span className="text-xl font-medium dark:text-white text-gray-800">{title}</span>
                <p className="text-lg text-gray-800 dark:text-white opacity-70 leading-5 mt-2">{content}</p>
                <button className="text-gray-800 dark:text-white text-xl opacity-75 focus:outline-none m-8 absolute right-0 top-0" onClick={() => removeTicket(session, id, i, [order, setOrder])}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            })}
            {(!order || order.tickets.length === 0) && <p className="text-lg text-gray-800 dark:text-white font-medium">
                Aucun ticket trouvé
              </p>}
          </div>
          <form onSubmit={e => { e.preventDefault(); pushTicket(session, id, title, subtitle, [order, setOrder]) }} className="border dark:border-none dark:bg-gray-900 bg-opacity-50 p-8 space-y-4 rounded-2xl mt-24 dark:shadow-xl lg:mx-auto lg:mt-0 lg:h-[min-content]">
            <header className="text-gray-800 dark:text-white">
              <h1 className="text-3xl font-bold">
                Créer un ticket
              </h1>
              <p className="text-opacity-60 w-3/4">
                Composez et envoyez dès à présent votre demande...
              </p>
            </header>
            <Input ref={title}>
              Titre
            </Input>
            <Input textarea ref={subtitle}>
              Décrivez votre demande
            </Input>
            <Button coloured full>
              Envoyer votre ticket
            </Button>
          </form>
        </section>
      </div>
    : <p className="text-lg text-gray-800 dark:text-white font-medium">
      Aucune commande n'a été trouvée !  
    </p>
}