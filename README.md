<h1><a href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&ab_channel=BroCode">React YouTube Course</a></h1>

<p>Instruções para rodar o projeto localmente</p>

<h2>1️⃣ Pré-requisitos</h2>
<p>Verificar se <strong>Node</strong> e <strong>Yarn</strong> estão instalados:</p>
<ul>
  <li><strong>Node.js</strong> (versão LTS recomendada) - <a href="https://nodejs.org/">Baixar Node.js</a></li>
  <li>Verificar a instalação:
    <pre><code>node -v</code></pre>
  </li>
  <li><strong>Yarn</strong> (Gerenciador de pacotes)
    <pre><code>npm install -g yarn</code></pre>
  </li>
  <li>Verificar a instalação:
    <pre><code>yarn -v</code></pre>
  </li>
</ul>

<h2>2️⃣ Clonar o Repositório</h2>
<pre><code>git clone https://github.com/lailacampos/react-yt-course.git</code></pre>

<h2>3️⃣ Instalar as Dependências</h2>
<p>Após clonar o repositório, instalar dependências necessárias:</p>
<pre><code>yarn install</code></pre>

<h2>4️⃣ Rodar o Servidor de Desenvolvimento</h2>
<p>Iniciar o projeto:</p>
<pre><code>yarn dev</code></pre>
<p>O projeto será iniciado e acessível no navegador, geralmente em:</p>
<pre><code>http://localhost:5173/</code></pre>

<h2>5️⃣ Estrutura do Projeto</h2>
<p>O projeto segue a seguinte estrutura:</p>
<pre><code>
📂 nome-do-projeto/
├── 📂 node_modules/        # Dependências instaladas
├── 📂 public/              # Arquivos estáticos
├── 📂 src/                 # Código-fonte principal
│   ├── 📂 components/      # Componentes reutilizáveis
│   ├── 📂