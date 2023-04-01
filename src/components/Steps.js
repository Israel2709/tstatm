const Steps = (props) => {
  const { image, title, description } = props;
  return (
    <div className="row">
      <div className="col-12 d-flex flex-row align-items-center">
        <img src={image} alt="" />
        <h1 className="text-center ms-3 fs-lg fw-bold">
          {title}
          <span className="text-main-red">{description}</span>
        </h1>
      </div>
    </div>
  )
}

export default Steps;
