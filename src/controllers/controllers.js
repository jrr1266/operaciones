import { createConnection } from "../database/database.js";

// consulta para agregar operaciones
export const addOperacion = async (req, res) => {
  try {
    const { fecha, nombre,tarjeta, banco, monto,moneda } = req.body;
    if (
      monto === 0 ||
      monto === "" ||
      isNaN(monto) ||
      monto === undefined ||
      monto === null
    ) {
      res.status(400).json({ message: "error de cliente" });
    }
    const parametro = { fecha, nombre, tarjeta, banco, monto, moneda };
    const connection = await createConnection();
    await connection.query("INSERT INTO operaciones SET ?", parametro);
    res.status(200).send("OPERACION INTRODUCIDA");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//consulta de operaciones
export const getOperacion = async (req, res) => {
  try {
    const {tarjeta} = req.query;    
    if (tarjeta === undefined) {
      const connection = await createConnection();
      const resultado = await connection.query("SELECT * FROM operaciones");
      res.status(200).json(resultado);
    }
   else{
     const connection = await createConnection();
     const resultado = await connection.query(
       `SELECT * FROM operaciones WHERE tarjeta = ${tarjeta}`
     );
     res.json(resultado);
   }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//eliminar una operacion por id
export const deleteOperacion = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await createConnection();
     await connection.query(
      "DELETE FROM operaciones WHERE id = ?",
      id
    );
    res.json("operacion borrada exitosamente");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//eliminar todas las operaciones al principio de mes
export const deleteOperaciones = async (req,res)=>{
  try {
     const connection = await createConnection();
     await connection.query("DELETE FROM operaciones");
     res.json("registros borrados exitosamente").status(200);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
  
