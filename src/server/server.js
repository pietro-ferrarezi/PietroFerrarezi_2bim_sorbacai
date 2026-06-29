const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()
const cors = require("cors")

const pool = require("./db")

const PORT = process.env.PORT || 3040

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "..", "public/")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views/portaria.html"))
});
app.get("/redirect", (req, res) => {
  const tipo = req.query.tipo;

  if (tipo === "cliente") {
    return res.redirect("/cliente");
  }

  if (tipo === "vendedor") {
    return res.redirect("/vendedor");
  }

  res.redirect("/");
});

app.get("/cliente", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views/cliente/index_cliente.html"));
});

app.get("/vendedor", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views/admin/index_admin.html"));
});

app.get("/cliente/carrinho", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views/cliente/carrinho.html"));
});

app.get("/infos/produtos", async(req, res) => {
  const result = await pool.query("SELECT * FROM public.produtos;")
  const dados = await result.rows

  res.send({ status: 'ok', dados: dados }).status(200)
})

app.get("/infos/complementos", async (req, res) => {
  const result = await pool.query("SELECT * FROM public.complementos;");
  const dados = await result.rows;

  res.send({ status: "ok", dados: dados }).status(200);
});

app.get("/infos/pedidos", async (req, res) => {
  const result = await pool.query("SELECT * FROM public.pedidos;");
  const dados = await result.rows;

  res.send({ status: "ok", dados: dados }).status(200);
});
app.get("/infos/pedidos/:id", async (req, res) => {
  const id = req.params.id;

  const result = await pool.query("SELECT * FROM public.pedidos WHERE id_pedido = $1", [id])
  const dados = result.rows

  res.send({ status: "ok", dados: dados }).status(200);
});

app.listen(PORT, () => {
  console.log(`Server Running! http://localhost:${PORT}`)
})