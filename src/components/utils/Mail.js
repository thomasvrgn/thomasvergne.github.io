import { Button } from './Button';

export const Mailto = ({ email, subject = '', body = '', children, ...btnParams }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <Button href={`mailto:${email}${params}`} {...btnParams}>
    {children}
  </Button>
};