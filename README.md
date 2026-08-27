# Casa Junno

Tema Shopify para a **Casa Junno**, marca de moda masculina de alto padrão com posicionamento "quiet luxury" — peças atemporais, tecidos nobres e elegância discreta.

Referências estéticas: MR PORTER, Loro Piana e Kinfolk.

## Stack

- Shopify (Liquid + Shopify CLI)
- Node v22 (via `.nvmrc`)

## Rodando localmente

```bash
nvm use
shopify theme dev --store jv0ry2-md.myshopify.com
```

## Design system

- **Cores:** creme/off-white, areia, tinta escura, tom neutro e um acento terracota
- **Tipografia:** Cormorant Garamond (títulos, serifada) + Jost (labels/texto, sans-serif)
- **Linguagem visual:** fundos em tom papel, bastante espaço em branco, hierarquia tipográfica forte

## Estrutura

- `sections/journey.liquid` — seção editorial "Journal", inspirada na estrutura do Journal da MR PORTER
- outros componentes custom (video banner, product grid, services, footer, header)

## Status

Em desenvolvimento ativo. Alguns componentes já validados e refinados; Journal em processo de ajustes de acordo com feedback de direção criativa.
