import { MessageCircle } from 'lucide-react';
import { contact } from '@/lib/site-data';

export function WhatsappFloating() {
  return (
    <a
      href={`https://wa.me/${contact.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Marinox pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-13 place-items-center rounded-full bg-red-700 text-white shadow-lg transition hover:bg-red-800"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
