'use client';

import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const fieldClass = 'h-11 border-zinc-300 bg-white';

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm" action="#" aria-label="Formulário de orçamento">
      <div className="grid gap-4 md:grid-cols-2">
        <Input className={fieldClass} name="nome" placeholder="Nome" required />
        <Input className={fieldClass} name="empresa" placeholder="Empresa" />
        <Input className={fieldClass} name="email" type="email" placeholder="E-mail" required />
        <Input className={fieldClass} name="telefone" placeholder="Telefone / WhatsApp" required />
        <Input className={fieldClass} name="cidade" placeholder="Cidade" />
        <Input className={fieldClass} name="estado" placeholder="Estado" />
      </div>
      <Select name="tipo-solucao">
        <SelectTrigger className="h-11 w-full border-zinc-300 bg-white">
          <SelectValue placeholder="Tipo de solução" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="estruturas-metalicas">Estruturas metálicas</SelectItem>
          <SelectItem value="esquadrias-ferro">Esquadrias de ferro</SelectItem>
          <SelectItem value="esquadrias-aluminio">Esquadrias de alumínio</SelectItem>
          <SelectItem value="artefatos-metalicos">Artefatos metálicos</SelectItem>
          <SelectItem value="outro">Outro / a definir</SelectItem>
        </SelectContent>
      </Select>
      <Textarea className="min-h-28 border-zinc-300 bg-white" name="descricao" placeholder="Descrição do projeto" />
      <Textarea className="min-h-24 border-zinc-300 bg-white" name="mensagem" placeholder="Mensagem" />
      <p className="rounded-md bg-zinc-50 px-3 py-2 text-sm text-zinc-600">
        Campo para anexar projetos e documentos preparado para etapa futura de backend.
      </p>
      <Button type="submit" className="h-11 bg-red-700 text-white hover:bg-red-800">
        Enviar solicitação <Send />
      </Button>
    </form>
  );
}
