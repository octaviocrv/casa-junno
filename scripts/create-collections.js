#!/usr/bin/env node

/**
 * Script para criar as 8 coleções principais
 *
 * Uso: node scripts/create-collections.js
 *
 * Requer variáveis de ambiente:
 * - SHOPIFY_STORE_NAME: seu-loja.myshopify.com
 * - SHOPIFY_ACCESS_TOKEN: seu token de acesso
 */

const http = require('https');

const categories = [
  {
    handle: 'camisas',
    title: 'Camisas',
    description: 'Camisas sociais, casuais e de linho. Qualidade premium em diversos estilos.',
  },
  {
    handle: 'polos',
    title: 'Polos',
    description: 'Polos em diferentes estilos e materiais. Perfeitas para looks casuais e elegantes.',
  },
  {
    handle: 'tricos',
    title: 'Tricôs',
    description: 'Suéteres, cardigãs e tricôs variados. Peças essenciais para o guarda-roupa.',
  },
  {
    handle: 'cashmere',
    title: 'Cashmere',
    description: 'Peças premium em cashmere puro. Luxo e conforto em cada detalhe.',
  },
  {
    handle: 'jaquetas',
    title: 'Jaquetas',
    description: 'Blazers, jaquetas e peças de outerwear. Looks sofisticados e modernos.',
  },
  {
    handle: 'calcas',
    title: 'Calças',
    description: 'Calças sociais, casuais e de linho. Acabamento impecável.',
  },
  {
    handle: 'sapatos',
    title: 'Sapatos',
    description: 'Sapatos sociais e casuais. Conforto e estilo para toda ocasião.',
  },
  {
    handle: 'acessorios',
    title: 'Acessórios',
    description: 'Lenços, cintos e outros acessórios premium. Detalhes que completam o look.',
  },
];

const storeName = process.env.SHOPIFY_STORE_NAME;
const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;

if (!storeName || !accessToken) {
  console.error('❌ Erro: Variáveis de ambiente não configuradas');
  console.error('Configure:');
  console.error('  export SHOPIFY_STORE_NAME=sua-loja.myshopify.com');
  console.error('  export SHOPIFY_ACCESS_TOKEN=seu_token_aqui');
  process.exit(1);
}

async function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: storeName,
      port: 443,
      path: path,
      method: method,
      headers: {
        'X-Shopify-Access-Token': accessToken,
        'Content-Type': 'application/json',
      },
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, body: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function createCollections() {
  console.log('🚀 Criando coleções...\n');

  for (const category of categories) {
    try {
      const response = await makeRequest('POST', '/admin/api/2024-01/collections.json', {
        collection: {
          title: category.title,
          handle: category.handle,
          body_html: category.description,
          published: true,
        },
      });

      if (response.status === 201) {
        console.log(`✅ ${category.title} criada com sucesso`);
      } else if (response.status === 422) {
        console.log(`⚠️  ${category.title} já existe`);
      } else {
        console.error(`❌ Erro ao criar ${category.title}:`, response.body);
      }
    } catch (error) {
      console.error(`❌ Erro de conexão para ${category.title}:`, error.message);
    }
  }

  console.log('\n✨ Processo concluído!');
  console.log('Próximos passos:');
  console.log('1. Organize os produtos nas coleções corretas');
  console.log('2. Aplique tags apropriadas aos produtos');
  console.log('3. Configure o menu de navegação');
}

createCollections().catch(console.error);
