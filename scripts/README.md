# Scripts - Casa Junno

## create-collections.js

Script para criar automaticamente as 8 coleções principais da loja.

### Pré-requisitos

1. **Shopify Access Token**: Gere um token no Shopify Admin
   - Acesse: Admin → Configurações → Apps and integrations → App and sales channel settings
   - Crie um novo token com permissão `write_products`

2. **Node.js**: Instalado na sua máquina

### Uso

```bash
# 1. Configure as variáveis de ambiente
export SHOPIFY_STORE_NAME=sua-loja.myshopify.com
export SHOPIFY_ACCESS_TOKEN=seu_token_aqui

# 2. Execute o script
node scripts/create-collections.js
```

### Ou via arquivo .env

```bash
# 1. Crie um arquivo .env (não versione!)
cp .env.example .env

# 2. Preencha com seus dados
nano .env

# 3. Carregue as variáveis
source .env

# 4. Execute o script
node scripts/create-collections.js
```

### Output esperado

```
🚀 Criando coleções...

✅ Camisas criada com sucesso
✅ Polos criada com sucesso
✅ Tricôs criada com sucesso
✅ Cashmere criada com sucesso
✅ Jaquetas criada com sucesso
✅ Calças criada com sucesso
✅ Sapatos criada com sucesso
✅ Acessórios criada com sucesso

✨ Processo concluído!
```

### Próximos passos

Após criar as coleções:

1. **Organizar produtos**
   - Acesse cada coleção no Admin
   - Adicione os produtos correspondentes

2. **Aplicar tags**
   - Use as tags definidas em `CATEGORIES.md`
   - Tags ajudam a filtrar produtos

3. **Configurar menu**
   - Atualize o menu de navegação para incluir as coleções

4. **Páginas de categoria**
   - Crie páginas para cada categoria (próximo passo)
