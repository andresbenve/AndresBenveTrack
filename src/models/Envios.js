import { Schema, model, models } from "mongoose";

// NOTA: le falta cosas, como video por ejemplo
const enviosSchema = new Schema({
  Nombre: {
    type: String,
  },
  Apellido: {
    type: String,
  },
  Email: {
    type: String,
  },
  Telefono: {
    type: Number,
  },
  Direccion: {
    type: String,
  },
  Nrodecalle: {
    type: Number,
  },
  CP: {
    type: String,
  },
  Provincia: {
    type: String,
  },
  Localidad: {
    type: String,
  },
  Observaciones: {
    type: String,
  },
});
export default models.Envios || model("Envios", enviosSchema);
