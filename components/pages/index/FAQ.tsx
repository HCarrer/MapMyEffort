import { INDEX_FAQ } from "../../../constants/IndexFAQ"

const FAQ = () => {
  return (
    <div className="flex justify-between w-full mx-auto">
      {INDEX_FAQ.map((section) => {
        return (
          <div className="flex flex-col justify-between w-1/4 aspect-square border-2 border-light-blue hover:bg-light-blue hover:bg-opacity-40 cursor-pointer px-3 py-6" key={section.id}>
            <span className="text-center text-white font-anton text-2xl tracking-wide px-1">
              {section.title}
            </span>
            <div className="flex flex-col gap-y-3 text-center">
              {section.explanation.map((explanationSection) => {
                return (
                  <span key={explanationSection.id} className="text-xs text-white">
                    {explanationSection.text}
                  </span>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FAQ