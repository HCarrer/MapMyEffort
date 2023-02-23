const Separator = ({isLast}: {isLast?: boolean}) => {
  return (
    <div className={`w-4/5 mx-auto h-0.5 bg-light-blue ${isLast ? 'mt-32 mb-4' : 'my-32'}`}/>
  )
}

export default Separator