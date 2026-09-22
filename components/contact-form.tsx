'use client';

import { Send } from 'lucide-react';
import type { SubmitEvent } from 'react';
import { contact } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const fieldClass = 'h-11 border-zinc-300 bg-white';
const solutionOptions = [
  { value: 'estruturas-metalicas', label: 'Estruturas metálicas' },
  { value: 'esquadrias-ferro', label: 'Esquadrias de ferro' },
  { value: 'esquadrias-aluminio', label: 'Esquadrias de alumínio' },
  { value: 'artefatos-metalicos', label: 'Artefatos metálicos' },
  { value: 'outro', label: 'Outro / a definir' },
];

function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;

  for (const input of form.querySelectorAll<HTMLInputElement>('input[required]')) {
    input.setCustomValidity(input.value.trim() ? '' : 'Preencha este campo.');
  }
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const value = (name: string) => {
    const field = data.get(name);
    return typeof field === 'string' ? field.trim() : '';
  };
  const solution = solutionOptions.find((option) => option.value === value('tipo-solucao'))?.label ?? '';
  const fields = [
    ['Nome', value('nome')],
    ['Empresa', value('empresa')],
    ['E-mail', value('email')],
    ['Telefone', value('telefone')],
    ['Cidade', value('cidade')],
    ['Estado', value('estado')],
    ['Tipo de solução', solution],
  ];
  const message = [
    'Olá! Gostaria de solicitar um orçamento com a Marinox.',
    fields.filter(([, content]) => content).map(([label, content]) => `${label}: ${content}`).join('\n'),
    value('descricao') ? `Descrição do projeto:\n${value('descricao')}` : '',
    value('mensagem') ? `Mensagem:\n${value('mensagem')}` : '',
    'Aguardo o contato. Obrigado!',
  ].filter(Boolean).join('\n\n');

  window.open(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

export function ContactForm() {
  return (
    <form
      className="grid gap-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
      method="post"
      onSubmit={handleSubmit}
      onInput={(event) => {
        if (event.target instanceof HTMLInputElement) event.target.setCustomValidity('');
      }}
      aria-label="Formulário de orçamento"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input className={fieldClass} name="nome" placeholder="Nome" aria-label="Nome" autoComplete="name" required />
        <Input className={fieldClass} name="empresa" placeholder="Empresa" aria-label="Empresa" autoComplete="organization" />
        <Input className={fieldClass} name="email" type="email" placeholder="E-mail" aria-label="E-mail" autoComplete="email" required />
        <Input className={fieldClass} name="telefone" type="tel" placeholder="Telefone / WhatsApp" aria-label="Telefone / WhatsApp" autoComplete="tel" required />
        <Input className={fieldClass} name="cidade" placeholder="Cidade" aria-label="Cidade" autoComplete="address-level2" />
        <Input className={fieldClass} name="estado" placeholder="Estado" aria-label="Estado" autoComplete="address-level1" />
      </div>
      <Select name="tipo-solucao" items={solutionOptions}>
        <SelectTrigger aria-label="Tipo de solução" className="h-11 w-full border-zinc-300 bg-white">
          <SelectValue placeholder="Tipo de solução" />
        </SelectTrigger>
        <SelectContent>
          {solutionOptions.map((option) => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>)}
        </SelectContent>
      </Select>
      <Textarea className="min-h-28 border-zinc-300 bg-white" name="descricao" placeholder="Descrição do projeto" aria-label="Descrição do projeto" />
      <Textarea className="min-h-24 border-zinc-300 bg-white" name="mensagem" placeholder="Mensagem" aria-label="Mensagem" />
      <p className="rounded-md bg-zinc-50 px-3 py-2 text-sm text-zinc-600">
        Ao continuar, o WhatsApp será aberto com sua mensagem para você confirmar o envio.
      </p>
      <Button type="submit" className="h-11 bg-red-700 text-white hover:bg-red-800">
        Enviar solicitação <Send />
      </Button>
    </form>
  );
}
