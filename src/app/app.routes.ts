import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Detalhe } from './detalhe/detalhe';
import { Cadastro } from './cadastro/cadastro';
import { Cesta } from './cesta/cesta';
import { ListaPedidos } from './lista-pedidos/lista-pedidos';
import { Login } from './login/login';
import { Pedido } from './pedido/pedido';
import { Reenvio } from './reenvio/reenvio';
import { ResultadoBusca } from './resultado-busca/resultado-busca';
 
export const routes: Routes = [
    {path:"", component:Vitrine}, {path:"promo", component:Vitrine},
    {path:"detalhe/:codigo", component:Detalhe}, {path:"login", component:Login},
    {path:"cesta", component:Cesta}, {path:"pedido", component:Pedido},
    {path:"cadastro", component:Cadastro}, {path:"listapedidos", component:ListaPedidos},
    {path:"reenvio", component:Reenvio}, {path:"resultadobusca", component:ResultadoBusca},
     
];