const FieldLabel = ({ labelTitle, className, ...props }) => {
  return (
    <label className={className} {...props}>
      {labelTitle}
    </label>
  )
}

export default FieldLabel
