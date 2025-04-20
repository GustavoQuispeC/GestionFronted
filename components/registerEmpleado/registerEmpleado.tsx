"use client";

import { Button, Input, Select } from "@material-tailwind/react";
import { useState } from "react";

export default function RegisterEmpleyoee() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    documento: "",
    tipoDocumento: "DNI",
    fechaNacimiento: "",
    genero: "",
    telefono: "",
    email: "",
    direccion: "",
    cargo: "",
    fechaIngreso: "",
    tipoContrato: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Aquí podrías hacer un fetch/post al backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Registro de Empleado
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Nombres</label>
          <Input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold">Apellidos</label>
          <Input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Tipo de Documento</label>

          <Select
            name="tipoDocumento"
            value={formData.tipoDocumento}
            onChange={handleChange}
          >
            <Select.Trigger
              className="w-72"
              placeholder="Seleccione documento"
            />
            <Select.List>
              <Select.Option value="DNI">DNI</Select.Option>
              <Select.Option value="CE">Carnet de extranjería</Select.Option>
              <Select.Option value="Pasaporte">Pasaporte</Select.Option>
            </Select.List>
          </Select>
        </div>

        <div>
          <label className="block font-medium">Número de Documento</label>
          <Input
            type="number"
            name="documento"
            inputMode="numeric"
            value={formData.documento}
            onChange={handleChange}
            required
            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>
        <div>
          <label className="block font-medium">Fecha de Nacimiento</label>

          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="w-full px-4 py-1.5 border-[1.5px] border-gray-300 rounded-md ring-0 hover:ring-2 hover:ring-gray-300 hover:border-black focus:ring-2 focus:border-black focus:ring-gray-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block font-medium">Género</label>

          <Select name="genero" value={formData.genero} onChange={handleChange}>
            <Select.Trigger className="w-72" placeholder="Seleccione género" />
            <Select.List>
              <Select.Option value="masculino">Masculino</Select.Option>
              <Select.Option value="femenino">Femenino</Select.Option>
            </Select.List>
          </Select>
        </div>

        <div>
          <label className="block font-medium">Teléfono</label>
          <Input
            type="numeric"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <div>
          <label className="block font-medium">Correo electrónico</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium">Dirección</label>
          <Input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <div>
          <label className="block font-medium">Cargo</label>
          <Input
            type="text"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <div>
          <label className="block font-medium">Fecha de Ingreso</label>

          <input
            type="date"
            name="fechaIngreso"
            value={formData.fechaIngreso}
            onChange={handleChange}
            className="w-full px-4 py-1.5 border-[1.5px] border-gray-300 rounded-md ring-0 hover:ring-2 hover:ring-gray-300 hover:border-black focus:ring-2 focus:border-black focus:ring-gray-400 focus:outline-none transition"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium">Tipo de Contrato</label>

          <Select
            name="
"
            value={formData.tipoContrato}
            onChange={handleChange}
          >
            <Select.Trigger className="w-72" placeholder="Seleccione" />
            <Select.List>
              <Select.Option value="Indeterminado">Indeterminado</Select.Option>
              <Select.Option value="PlazoFijo">Plazo fijo</Select.Option>
              <Select.Option value="LocaciónServicios">
                Locación de servicios
              </Select.Option>
              <Select.Option value="Practicas">Prácticas</Select.Option>
            </Select.List>
          </Select>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button
          type="submit"
          color="primary"
          className="text-white px-6 py-2 rounded-md transition"
        >
          Registrar
        </Button>
      </div>
    </form>
  );
}
