import spaceman2 from "../assets/spaceman-2.png"
import Button from "../components/Button"
import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"
import Steps from "../components/Steps"

const stepsRegister = [
  {
    image: step1,
    title: "TE QUEREMOS ",
    description: "CONOCER"
  },
  {
    image: step2,
    title: "VALIDA TU ",
    description: "CELULAR"
  },
  {
    image: step3,
    title: "CÓDIGO DE ",
    description: "VERIFICACIÓN"
  },
  {
    image: step4,
    title: "TÉRMINOS Y",
    description: "CONDICIONES"
  }
]

const RegisterForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 h-100">
          <div className="row">
            <Steps image={step1} title="TE QUEREMOS " description="CONOCER"/>
            <p className="fs-3 text-white">Queremos saber que eres tú , por favor ingresa los siguientes datos:</p>
          </div>
          <div className="row">
            <div className="col-6">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Nombre(s)</label>
                  <input type="text" class="form-control" id="name" aria-describedby="nameHelp" />
                  <div id="nameHelp" class="form-text text-danger">El nombre deberá tener mínimo 5 carcateres.</div>
                </div>
                <div class="mb-3">
                  <label for="lastName" class="form-label">Apellidos</label>
                  <input type="text" class="form-control" id="lastName" />
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 offset-md-9">
              <Button type="primary" className="w-25">Enviar</Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
        <img src={spaceman2} alt="imageSpaceman2" />
        </div>
      </div>
    </div>
  )
};

export default RegisterForm;
