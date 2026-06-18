# 🚀 Landing Page Premium - Portfólio Pessoal

Landing page moderna e futurista com tema **AbacatePay** (Preto + Verde Neon) inspirada em **Webflow, Framer e SaaS premium**.

## 📁 Arquivos

- **index.html** - Estrutura HTML completa
- **styles.css** - Estilos principais (tema preto/verde)
- **animations.css** - Animações e efeitos de movimento
- **effects.css** - Efeitos visuais avançados (glassmorphism, glow, etc)
- **script.js** - Interatividade e JavaScript (scroll reveal, particles, etc)

## 🎨 Design Features

✅ Dark Mode Premium (Preto #0A0A0A)
✅ Verde Neon (#52D273 e #2DD96F)
✅ Glassmorphism & Blur Effects
✅ Partículas animadas em tempo real
✅ Scroll Reveal com IntersectionObserver
✅ Navbar transparente → scrolled blur
✅ Glow effects em cards e botões
✅ Hover animations suaves
✅ Efeitos de movimento sincronizados
✅ 100% Responsivo (Mobile First)
✅ Sem dependências externas

## 🔧 Personalizações Necessárias

### 1. Informações Pessoais
Abra `index.html` e atualize:
```html
<!-- Hero Section -->
<h1 class="hero-title">Seu Título Aqui</h1>
<p class="hero-subtitle">Sua descrição aqui</p>

<!-- Sobre Mim -->
<p class="about-text">Sua bio aqui...</p>

<!-- Stats -->
<span class="stat-number">50+</span>
<span class="stat-label">Seus projetos</span>
```

### 2. Links de Contato
Atualize os links na seção `#contato`:
```html
<a href="mailto:seu@email.com" class="btn btn-primary large">Enviar Email</a>
<a href="https://wa.me/5511999999999" class="btn btn-outline large">WhatsApp</a>

<!-- Social Links -->
<a href="https://github.com/seu-usuario" class="social-link">GitHub</a>
<a href="https://linkedin.com/in/seu-usuario" class="social-link">LinkedIn</a>
<a href="https://instagram.com/seu-usuario" class="social-link">Instagram</a>
```

### 3. Projetos
Atualize os cards de projetos:
```html
<div class="project-card">
  <div class="project-image">
    <div class="placeholder-img">Seu Projeto</div>
  </div>
  <div class="project-content">
    <h3>Nome do Projeto</h3>
    <p>Descrição detalhada</p>
    <div class="project-tags">
      <span>Tech 1</span>
      <span>Tech 2</span>
    </div>
  </div>
</div>
```

### 4. Habilidades
Atualize as skills com seus níveis:
```html
<div class="skill-item">
  <div class="skill-header">
    <span>Sua Habilidade</span>
    <span class="skill-level">90%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" style="width: 90%"></div>
  </div>
</div>
```

## 🚀 Deploy no Vercel

### 1. Prepare para GitHub
```bash
# Criar pasta do projeto
mkdir meu-portfolio
cd meu-portfolio

# Iniciar git
git init
git add .
git commit -m "Initial commit - Portfolio landing page"
```

### 2. Upload no GitHub
```bash
# No GitHub, crie um novo repositório
# Depois execute:
git remote add origin https://github.com/seu-usuario/seu-repo.git
git branch -M main
git push -u origin main
```

### 3. Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório do GitHub
4. Deixe as configurações padrão
5. Deploy automático! 🎉

## 📱 Responsividade

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (360px - 767px)

## 🎬 Efeitos Implementados

### Animações
- Fade in on scroll
- Float animation (partículas)
- Glow pulse (cards e botões)
- Shimmer effect
- Slide in animations
- Border glow

### Interatividade
- Mouse parallax blur effects
- Hover lift em cards
- Smooth scroll
- Navbar blur on scroll
- Progress bar animada
- Reveal on scroll

### Performance
- CSS animations (GPU accelerated)
- No JavaScript framework
- Lazy loading optimizado
- Minimal reflows
- Will-change optimization

## 🔐 SEO & Acessibilidade

- ✅ Semantic HTML5
- ✅ Meta tags completas
- ✅ Heading hierarchy correto
- ✅ Alt text em imagens
- ✅ ARIA labels
- ✅ Focus visible states
- ✅ Color contrast WCAG AA

## 📊 Estrutura de Seções

1. **Hero** - Apresentação principal
2. **Sobre** - Quem você é
3. **O Que Faço** - Seus serviços
4. **Habilidades** - Tech stack
5. **Projetos** - Portfolio
6. **Processo** - Como trabalha
7. **Depoimentos** - Social proof
8. **CTA Final** - Call to action
9. **Footer** - Contato e links

## 🎯 Dicas de Otimização

### Imagens
- Substitua placeholder por imagens reais
- Optimize com TinyPNG ou similar
- Use webp para melhor performance
- Adicione lazy loading

### Customização de Cores
Para mudar a cor verde, edite em `styles.css`:
```css
:root{
  --color-primary: #52D273;  /* Verde principal */
  --color-primary-bright: #5FE686;  /* Verde claro */
  --color-secondary: #2DD96F;  /* Verde secundário */
}
```

### Mudança de Fonte
Substitua em `styles.css`:
```css
--font-display: 'Sua Font Display';
--font-body: 'Sua Font Body';
```

## 🐛 Troubleshooting

**Elementos não animam?**
- Verifique se animations.css e effects.css estão linkados
- Procure por `will-change` overflow hidden

**Cores estranhas?**
- Limpe cache do navegador (Ctrl+Shift+Del)
- Verifique variáveis CSS em :root

**Mobile bugado?**
- Aumente viewport width
- Teste responsividade no DevTools

## 📝 Licença

Código aberto e livre para uso pessoal e comercial.

## 💬 Suporte

Para dúvidas ou sugestões, abra uma issue no GitHub!

---

**Desenvolvido com ❤️ e tecnologia verde neon** 🟢
