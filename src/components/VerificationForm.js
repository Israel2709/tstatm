import Button from "./Button";
import { useForm } from "react-hook-form";

const VerificationForm = ({ handler }) => {
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
        <label for="verification" className="form-label">
          Código de verificación
        </label>
        <input
          type="text"
          className="form-control"
          {...register("verification", { required: true, minLength: 6, maxLength: 6 })}
        />
        {errors.verification?.type === "required" && (
          <div className="form-text text-danger">El campo es requerido</div>
        )}
        {errors.verification?.type === "minLength" && (
          <div className="form-text text-danger">
            El campo deberá tener mínimo 6 carcateres.
          </div>
        )}
        {errors.verification?.type === "maxLength" && (
          <div className="form-text text-danger">
            El campo deberá tener máximo 6 carcateres.
          </div>
        )}
      </div>
      <div class="form-group w-50">
        <p>¿No recibiste el código?
            <a href="/"><b>Reenviar código</b></a>
        </p>
      </div>
      <Button
        type="primary"
        action="submit"
        className="ms-auto d-block"
        disabled={!isValid}
      >
        Validar código
      </Button>
    </form>
  );
};

export default VerificationForm;
