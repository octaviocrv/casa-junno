# Estrutura de Categorias - Casa Junno

## Categorias Principais

Estas são as 8 categorias principais da loja. Cada uma corresponde a uma **Collection** no Shopify.

| Handle | Nome | Descrição |
|--------|------|-----------|
| `camisas` | Camisas | Camisas sociais, casuais e de linho |
| `polos` | Polos | Polos em diferentes estilos e materiais |
| `tricos` | Tricôs | Suéteres, cardigãs e tricôs variados |
| `cashmere` | Cashmere | Peças premium em cashmere puro |
| `jaquetas` | Jaquetas | Blazers, jaquetas e outerwear |
| `calcas` | Calças | Calças sociais, casuais e calças de linho |
| `sapatos` | Sapatos | Sapatos sociais e casuais |
| `acessorios` | Acessórios | Lenços, cintos e outros acessórios |

## Estrutura de Subcategorias (Tags nos Produtos)

Para melhor organização, use as seguintes tags nos produtos:

### Camisas
- `camisa-linho` - Camisas de linho
- `camisa-alfaiataria` - Camisas de alfataria
- `camisa-casual` - Camisas casuais
- `camisa-social` - Camisas sociais

### Polos
- `polo-classico` - Polos clássicos
- `polo-casual` - Polos casuais

### Tricôs
- `trico-sueter` - Suéteres
- `trico-cardia` - Cardigãs
- `trico-basico` - Tricôs básicos

### Cashmere
- `cashmere-pure` - Cashmere puro
- `cashmere-blend` - Blend com cashmere

### Jaquetas
- `jaqueta-blazer` - Blazers
- `jaqueta-bomber` - Jaquetas bomber
- `jaqueta-social` - Jaquetas sociais

### Calças
- `calca-linho` - Calças de linho
- `calca-social` - Calças sociais
- `calca-casual` - Calças casuais

### Sapatos
- `sapato-social` - Sapatos sociais
- `sapato-casual` - Sapatos casuais

### Acessórios
- `acessorio-lenco` - Lenços
- `acessorio-cinto` - Cintos

## Próximos Passos

1. ✅ Criar as 8 collections principais no Shopify Admin
2. ⏳ Reorganizar produtos nas coleções corretas
3. ⏳ Aplicar tags apropriadas aos produtos
4. ⏳ Atualizar menu de navegação
5. ⏳ Organizar páginas de categoria

## Como Criar as Collections

### Opção 1: Shopify Admin (Manual)
1. Acesse: Admin → Produtos → Coleções
2. Clique em "Criar coleção"
3. Use o **Handle** da tabela acima como URL da coleção
4. Adicione produtos manualmente ou por regras

### Opção 2: Script (Automático)
Execute o script `create-collections.js` (veja `scripts/` para detalhes)

## Referência nas Templates

As collections são referenciadas nos templates usando o **handle**:
```liquid
{% assign camisas = collections.camisas %}
{% assign polos = collections.polos %}
```
