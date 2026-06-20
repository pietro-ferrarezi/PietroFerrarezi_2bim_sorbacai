-- Crie um banco de dados chamado agroinfos

DROP TABLE IF EXISTS public.culturas_por_estados, public.culturas, public.estados;

-- Tabela de culturas
CREATE TABLE public.culturas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  nome_cientifico VARCHAR(100) NOT NULL,
  epoca_plantio VARCHAR(100) NOT NULL,
  tempo_colheita VARCHAR(50) NOT NULL,
  produtividade_media VARCHAR(20) NOT NULL,
  imagem VARCHAR(255),
  descricao TEXT
);

-- Tabela de estados
CREATE TABLE public.estados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  sigla CHAR(2) NOT NULL UNIQUE,
  clima VARCHAR(255)
);

-- Relacionamento (N-N) das culturas por estados
CREATE TABLE public.culturas_por_estados (
  id_cultura INT NOT NULL,
  id_estado INT NOT NULL,
  PRIMARY KEY(id_cultura, id_estado),
  FOREIGN KEY (id_cultura) REFERENCES culturas(id),
  FOREIGN KEY (id_estado) REFERENCES estados(id)
);