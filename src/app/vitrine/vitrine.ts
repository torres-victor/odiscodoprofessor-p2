import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import {CommonModule} from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  lista: Produto[] =
      [
  {
    "codigo": 1,
    "nome": "Martelo de Unha 25mm",
    "descritivo": "Martelo com cabo de madeira, ideal para trabalhos gerais de construção e manutenção.",
    "valor": 39.90,
    "valorPromo": 34.90,
    "quantidade": 25,
    "destaque": 1,
    "keywords": "martelo, ferramenta, construção, madeira, pregos"
  },
  {
    "codigo": 2,
    "nome": "Jogo de Chaves de Fenda 6 Peças",
    "descritivo": "Kit com chaves de fenda e Phillips para manutenção doméstica e profissional.",
    "valor": 59.90,
    "valorPromo": 49.90,
    "quantidade": 18,
    "destaque": 1,
    "keywords": "chave, fenda, phillips, ferramentas, kit"
  },
  {
    "codigo": 3,
    "nome": "Alicate Universal 8 Polegadas",
    "descritivo": "Alicate resistente para corte, aperto e trabalhos de manutenção.",
    "valor": 42.90,
    "valorPromo": 37.90,
    "quantidade": 30,
    "destaque": 1,
    "keywords": "alicate, universal, ferramenta, corte, manutenção"
  },
  {
    "codigo": 4,
    "nome": "Fita Métrica 5 Metros",
    "descritivo": "Trena compacta com trava e fita graduada para medições precisas.",
    "valor": 24.90,
    "valorPromo": 19.90,
    "quantidade": 45,
    "destaque": 0,
    "keywords": "trena, fita métrica, medição, ferramenta"
  },
  {
    "codigo": 5,
    "nome": "Furadeira de Impacto 650W",
    "descritivo": "Furadeira de impacto para perfurações em madeira, metal e alvenaria.",
    "valor": 289.90,
    "valorPromo": 249.90,
    "quantidade": 12,
    "destaque": 1,
    "keywords": "furadeira, impacto, elétrica, construção, ferramenta"
  },
  {
    "codigo": 6,
    "nome": "Broca para Concreto 8mm",
    "descritivo": "Broca com ponta de metal duro indicada para perfuração de concreto e alvenaria.",
    "valor": 12.90,
    "valorPromo": 9.90,
    "quantidade": 80,
    "destaque": 0,
    "keywords": "broca, concreto, alvenaria, perfuração"
  },
  {
    "codigo": 7,
    "nome": "Parafuso Sextavado 6x50mm - 10 Unidades",
    "descritivo": "Parafusos sextavados para fixações em madeira e estruturas diversas.",
    "valor": 18.90,
    "valorPromo": 15.90,
    "quantidade": 100,
    "destaque": 0,
    "keywords": "parafuso, sextavado, fixação, madeira"
  },
  {
    "codigo": 8,
    "nome": "Bucha de Nylon 8mm - 50 Unidades",
    "descritivo": "Buchas de nylon para fixação em paredes de alvenaria.",
    "valor": 16.90,
    "valorPromo": 13.90,
    "quantidade": 65,
    "destaque": 0,
    "keywords": "bucha, nylon, fixação, parede, alvenaria"
  },
  {
    "codigo": 9,
    "nome": "Chave Inglesa 10 Polegadas",
    "descritivo": "Chave ajustável fabricada em aço, indicada para diversos tipos de manutenção.",
    "valor": 49.90,
    "valorPromo": 44.90,
    "quantidade": 22,
    "destaque": 0,
    "keywords": "chave inglesa, ajustável, ferramenta, manutenção"
  },
  {
    "codigo": 10,
    "nome": "Serrote para Madeira 20 Polegadas",
    "descritivo": "Serrote com dentes temperados para cortes rápidos e precisos em madeira.",
    "valor": 54.90,
    "valorPromo": 46.90,
    "quantidade": 16,
    "destaque": 1,
    "keywords": "serrote, madeira, corte, ferramenta"
  },
  {
    "codigo": 11,
    "nome": "Nível de Bolha 40cm",
    "descritivo": "Nível de alumínio com bolhas de alta visibilidade para alinhamentos precisos.",
    "valor": 38.90,
    "valorPromo": 32.90,
    "quantidade": 20,
    "destaque": 0,
    "keywords": "nível, bolha, alinhamento, construção"
  },
  {
    "codigo": 12,
    "nome": "Estilete Profissional 18mm",
    "descritivo": "Estilete reforçado com lâmina de 18mm e sistema de trava de segurança.",
    "valor": 17.90,
    "valorPromo": 14.90,
    "quantidade": 40,
    "destaque": 0,
    "keywords": "estilete, lâmina, corte, ferramenta"
  },
  {
    "codigo": 13,
    "nome": "Fita Isolante 20 Metros",
    "descritivo": "Fita isolante de PVC para instalações e reparos elétricos.",
    "valor": 9.90,
    "valorPromo": 7.90,
    "quantidade": 120,
    "destaque": 1,
    "keywords": "fita isolante, elétrica, pvc, instalação"
  },
  {
    "codigo": 14,
    "nome": "Extensão Elétrica 10 Metros",
    "descritivo": "Extensão elétrica com cabo flexível para uso doméstico e profissional.",
    "valor": 44.90,
    "valorPromo": 39.90,
    "quantidade": 28,
    "destaque": 1,
    "keywords": "extensão, elétrica, tomada, cabo"
  },
  {
    "codigo": 15,
    "nome": "Lixa para Madeira Grão 120 - 10 Unidades",
    "descritivo": "Lixas para acabamento e preparação de superfícies de madeira.",
    "valor": 14.90,
    "valorPromo": 11.90,
    "quantidade": 75,
    "destaque": 0,
    "keywords": "lixa, madeira, acabamento, abrasivo"
  },
  {
    "codigo": 16,
    "nome": "Cola de Contato 75g",
    "descritivo": "Adesivo de contato indicado para colagem de madeira, laminados e outros materiais.",
    "valor": 18.90,
    "valorPromo": 15.90,
    "quantidade": 55,
    "destaque": 0,
    "keywords": "cola, adesivo, contato, madeira, laminado"
  },
  {
    "codigo": 17,
    "nome": "Silicone Acético Transparente 280g",
    "descritivo": "Selante de silicone para vedação e acabamento em diversas aplicações.",
    "valor": 27.90,
    "valorPromo": 23.90,
    "quantidade": 35,
    "destaque": 1,
    "keywords": "silicone, selante, vedação, transparente"
  },
  {
    "codigo": 18,
    "nome": "Luvas de Proteção em Látex",
    "descritivo": "Luvas resistentes para proteção das mãos durante serviços de manutenção.",
    "valor": 12.90,
    "valorPromo": 10.90,
    "quantidade": 90,
    "destaque": 0,
    "keywords": "luvas, proteção, segurança, manutenção, latex"
  },
  {
    "codigo": 19,
    "nome": "Óculos de Proteção Incolor",
    "descritivo": "Óculos de segurança com lentes transparentes para proteção dos olhos.",
    "valor": 15.90,
    "valorPromo": 12.90,
    "quantidade": 60,
    "destaque": 1,
    "keywords": "óculos, proteção, segurança, epi"
  },
  {
    "codigo": 20,
    "nome": "Caixa Organizadora de Ferramentas 18 Polegadas",
    "descritivo": "Caixa plástica resistente com compartimentos para armazenamento e transporte de ferramentas.",
    "valor": 89.90,
    "valorPromo": 79.90,
    "quantidade": 14,
    "destaque": 1,
    "keywords": "caixa, ferramentas, organizador, armazenamento"
  }
  ]
}
