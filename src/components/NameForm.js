import Button from "./Button";
import { useForm } from "react-hook-form";

const NameForm = ({ handler }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onSubmit = () => {
    handler();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group w-50">
        <label for="name" className="form-label">
          Nombre(s)
        </label>
        <input
          type="text"
          className="form-control"
          {...register("firstName", { required: true, minLength: 5 })}
        />
        {errors.firstName?.type === "required" && (
          <div className="form-text text-danger">El campo es requerido</div>
        )}
        {errors.firstName?.type === "minLength" && (
          <div className="form-text text-danger">
            El nombre deberá tener mínimo 5 carcateres.
          </div>
        )}
      </div>
      <div className="form-group w-50 mt-3">
        <label for="lastName" className="form-label">
          Apellidos
        </label>
        <input
          type="text"
          className="form-control"
          {...register("lastName", { required: false })}
        />
      </div>

      <Button
        type="primary"
        action="submit"
        className="ms-auto d-block"
        disabled={!isValid}
      >
        Enviar
      </Button>
    </form>
  );
};

export default NameForm;
