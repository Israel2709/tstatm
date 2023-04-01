import Button from "./Button";
import { useForm } from "react-hook-form";

const TermsForm = ({ handler }) => {
  const {
    formState: { isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onSubmit = () => {
    handler();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group w-50">
        <p>Por favor revisa nuestros términos y condiciones para este servicio:</p>
        <a href="/"><b>Consulta Términos y  Condiciones</b></a>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> 
            <label class="form-check-label" for="flexCheckDefault">
                Acepto los Terminos y Condiciones
            </label>
        </div>
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

export default TermsForm;
